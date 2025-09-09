import type { Route } from "./+types/home";
import '../../../csssheets/wordletool.css';
import React, { useState} from 'react';
import { Link } from 'react-router-dom';

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Stellar Sakura - Home" },
    { name: "description", content: "Welcome to React Router!" },
  ];
}

export default function WordleTool() {

    interface WordQuery {
        limit: number;
        page: number;
    }

    interface WordResults { 
        data: [string];
        total: number;
    }

    interface WordResponse {
        query: WordQuery;
        results: WordResults;
    }

    const [possibleWords, setPossibleWords] = useState("Possible words will appear here after searching.");
    var wordList: string = "";
    var needToPagenate: boolean = true;

    // Functions! //
    async function getWord(wordToSearch: string, currentPage: number): Promise<WordResponse> {
        var apiCall = 'https://wordsapiv1.p.rapidapi.com/words/?letterPattern=^' + wordToSearch + '$&page=' + currentPage;
        //console.log(apiCall)

        console.log('Before setting headers...');
        const headers: Headers = new Headers();
        headers.set('Accept', 'application/json');
        headers.set('X-RapidAPI-Key', import.meta.env.VITE_REACT_APP_WORD_API_TOKEN);
        console.log('After setting headers...');

        console.log('Exposing the token for debugging...');
        console.log(import.meta.env.VITE_REACT_APP_WORD_API_TOKEN);

        const request: RequestInfo = new Request(apiCall, {
            method: 'GET',
            headers: headers
        })  

        const response = await fetch(request);
        const data = await response.json();
        //console.log('In getWord fucntion...');
        //console.log(data);
        //console.log(data.results);
        return data;

        //return fetch(request)
        //    .then(res => res.json());

    } //end of get word function

    async function processResult(results: WordResponse, goodLetters: string, badLetters: string, currentPage: number) {
        //console.log('In the processReults function...')
        //console.log(results);
        //console.log(results.results.data[0]);
        //console.log(goodLetters);
        //console.log('currentPage at the beginning of processResult...: ' + currentPage); //WHY ARE YOU UNDEFINED >:I
        //console.log('Total words at the beginning of processResult...: ' + results.results.total);

        if (results.results.total >= 500) {
            needToPagenate = false;
            wordList = "";
            currentPage = 6
            return
        }

        //console.log('I have gotten past the kill switch in processResult.');

        var goodLettersArray: [];
        if (goodLetters != "") {
            goodLettersArray = goodLetters.split('');
        } else {
            goodLettersArray = [""];
        }

        var badLettersArray : [];
        if (badLetters != "") {
            badLettersArray = badLetters.split('');
        } else {
            badLettersArray = [""];
        }

        var wordCount: number = 0;
        var goodWord: boolean = true;
        for (const word in results.results.data) {
            goodWord = true;
            //console.log('In the for loop...')
            //console.log(results.results.data[word])

            const currentWordArray = results.results.data[word].split('');
            for (const index in currentWordArray) {
                if (badLettersArray.includes(currentWordArray[index])) {
                    //console.log('Bad letter detectd!');
                    goodWord = false;
                    break;
                }
            }

            //console.log('I have checked for bad letters. goodWord boolean is; ' + goodWord);

            var goodLetterDetected = false;
            if (goodWord && (goodLettersArray[0] != "")) {
                //console.log('Checking for good letters...');
                for (const index in currentWordArray) {
                    if (goodLettersArray.includes(currentWordArray[index])) {
                        //console.log('Good letter detected!');
                        goodLetterDetected = true;
                    } 
                }
            } else if (goodWord && (goodLettersArray[0] == "")) {
                goodLetterDetected = true;
            }

            if (goodWord && goodLetterDetected) {
                //console.log(currentPage);
                wordList = wordList + (((currentPage - 1) * 100) + wordCount + 1).toString() + '. ' + results.results.data[word] + '\n';
                wordCount += 1;
            }

        }

        if (wordCount != 99) { //theoretically if wordCount is 99, that means 100 words were pulled, which means we need to check pagnations n stuff
            needToPagenate = false;
        }

        //string.split('') effectively returns an array of characters from the string 
        //array.includes(item) returns a bool if the item is or is not in the array
        console.log(wordList);

        //i'm going to need to figure out pagnation for this api call...
        
    } //end of process results function

    async function handleSubmit(e) {
        e.preventDefault();
        setPossibleWords('Loading...');
        wordList = ""; //set word list to be empty with a fresh submit

        const data = e.target;
        const formedData = new FormData(data);
        const formedJson = Object.fromEntries(formedData.entries());
        //console.log(formedJson);
        //console.log(formedJson.firstLetter);

        //https://wordsapiv1.p.rapidapi.com/words/?letterPattern=^a.{1}.{0}.t.{1}$
        //REACT_APP_WORD_API_TOKEN

        var wordToSearch: string = "";
        var goodLetters: string = "";
        var badLetters: string = "";

        //this is gonna need some uh data validation .3.
        //first five are the known letter/positions, then is other known letters, then is bad letters (7 total)
        var dataCount: number = 0;
        for (const data in formedJson) {
            //console.log(data);
            //console.log(formedJson[data]);
            if (dataCount < 5) {
                if (wordToSearch == "") {
                    if (formedJson[data] == "") {
                        wordToSearch = '.{1}';
                    } else {
                        wordToSearch = formedJson[data]
                    }
                } else {
                    if (formedJson[data] == "") {
                        wordToSearch = wordToSearch + '.{1}';
                    } else {
                        wordToSearch = wordToSearch + formedJson[data];
                    }
                }
            } else if (dataCount < 6) {
                goodLetters = formedJson[data];
            } else {
                badLetters = formedJson[data];
            }

            dataCount += 1;
        }

        //console.log(wordToSearch);

        var currentPage = 1;
        while (needToPagenate) {
            //console.log('Current page in while loop...: ' + currentPage);

            const results = await getWord(wordToSearch, currentPage)
            await processResult(results, goodLetters, badLetters, currentPage);

            currentPage += 1;
            if (currentPage == 6) { //kill switch
                break;
            }
        }

        if ((wordList == "") || (currentPage == 6)) {
            setPossibleWords('I need more information to narrow down my search.');
        } else {
            setPossibleWords(wordList);
        }

    } //end of submit function
    
    // "HTML" code //

    return (
		<>
        {/* beginning of head section */}

        {/* end of head section */}

        {/* beginning of body section */}

            {/* begining of header section */}{" "}
            <div className = "header_section">
                <div className = "title_links">
                    <div className = "title_section">
                        <h1>Stellar Sakura</h1>
                    </div>

                    <div className = "navlinks">
                        {/* Home */}
                        <div>
                            <Link to = '/'>
                                <button id = "home_button"> Home </button>
                            </Link>
                        </div>

                        {/* Blog */}
                        <div>
                            <Link to = "/blog">
                                <button id = "blog_button"> Blog </button>
                            </Link>
                        </div>

                        {/* Stories */}
                        <div className = "dropdown">
                            <button className = "dropdown_button"> Stories </button>
                            <div className = "dropdown_content">
                                <Link to = '/stories/crescendo/overview'> Crescendo </Link>
                            </div>
                        </div>

                        {/* Zenith and Nadir */}
                        <div className = "dropdown">
                        <button className = "dropdown_button"> Zenith &amp; Nadir </button>
                            <div className = "dropdown_content">
                                <Link to = '/zenithnadir/overview'> Overview </Link>
                            </div>
                        </div>

                        {/* Warframe */}
                        <div className = "dropdown">
                        <button className = "dropdown_button"> Warframe </button>
                            <div className = "dropdown_content">
                                <Link to = '/warframe/tracker'> Tracker </Link>
                            </div>
                        </div>

                        {/* Mabinogi */}
                        <div className = "dropdown">
                        <button className = "dropdown_button"> Mabinogi </button>
                            <div className = "dropdown_content">
                                <Link to = '/mabinogi/tracker'> Tracker </Link>
                            </div>
                        </div>

                        {/* Misc */}
                        <div className = "dropdown">
                        <button className = "dropdown_button"> Misc </button>
                            <div className = "dropdown_content">
                                <Link to = '/misc/wordletool'> Wordle Tool </Link>
                            </div>
                        </div>

                    </div>
                </div>

                <div className = "login_area">
                    <p> blep </p>
                    {/* eventual goal will have people using Google's auth to login to their google account to access their drive
			            for object storage */}
                    {/* light background dark text vs dark background light text */}
                </div>

            </div>
            {/* ending of header section */}

            {/* beginning of page section */}{" "}
            <div className = "page_section">

                <div className = "main_section">
                    <h1>Wordle Cheating Tool</h1>
                    <p>Built this for fun. As of right now, you can't really insert yellow letters, and you need to know some letter positions for it to work the most effecitvely.</p>

                    {/* so the idea is that there are five slots you can slot in the letters you know and see possible words based on that
                        at least to start
                        
                        so we need five input fields, a button to capture them, and then a small script to take that and fashion and api call,
                        and then of course show the results of the API call
                        
                        hopefully eventually we can have the system know what letters aren't available or what are yellow but we'll start
                        small*/}
                    <form onSubmit = {handleSubmit}>
                        <h5>Known Letters + Positions:</h5>
                        <label className = "letter_input">
                            <input name = "firstLetter" />
                        </label>

                        <label className = "letter_input">
                            <input name = "secondLetter" />
                        </label>

                        <label className = "letter_input">
                            <input name = "thirdLetter" />
                        </label>

                        <label className = "letter_input">
                            <input name = "fourthLetter" />
                        </label>

                        <label className = "letter_input">
                            <input name = "fifthLetter" />
                        </label>

                        <h5>Other Known Letters:</h5>
                        <p>List letters without spaces or other delimiters.</p>
                        <label>
                            <input name = "goodLetters" />
                        </label>

                        <h5>Letters Not In Word:</h5>
                        <p>List letters without spaces or other delimiters.</p>
                        <label>
                            <input name = "badLetters" />
                        </label>

                        <button id = "findbutton" type = "submit">
                            Find Words
                        </button>

                    </form>

                    <h3>Possible Words:</h3>
                    <p id = "words_list"> {possibleWords} </p>

                </div>
    
            </div>
            {/* ending of page section */}{" "}

            {/* beginnig of footer section */}{" "} 
            <div className = "footer_section">
   
            </div>
            {/* ending of footer section */}

        {/* end of body section */}
        </>

	);
  
}




