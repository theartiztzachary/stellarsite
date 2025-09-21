import type { Route } from "./+types/home";
import '../../../csssheets/wordletool.css';
import React, { useState } from 'react';
import ReactDom from 'react-dom';
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

        const headers: Headers = new Headers();
        headers.set('Accept', 'application/json');
        headers.set('X-RapidAPI-Key', import.meta.env.VITE_REACT_APP_WORD_API_TOKEN);

        const request: RequestInfo = new Request(apiCall, {
            method: 'GET',
            headers: headers
        })  

        const response = await fetch(request);
        const data = await response.json();
        return data;

    } //end of get word function

    async function processResult(results: WordResponse, goodLetters: string, badLetters: string, currentPage: number) {

        if (results.results.total >= 500) {
            needToPagenate = false;
            wordList = "";
            currentPage = 6
            return
        }

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

            const currentWordArray = results.results.data[word].split('');
            for (const index in currentWordArray) {
                if (badLettersArray.includes(currentWordArray[index])) {
                    goodWord = false;
                    break;
                }
            }

            var goodLetterDetected = false;
            if (goodWord && (goodLettersArray[0] != "")) {
                for (const index in currentWordArray) {
                    if (goodLettersArray.includes(currentWordArray[index])) {
                        goodLetterDetected = true;
                    } 
                }
            } else if (goodWord && (goodLettersArray[0] == "")) {
                goodLetterDetected = true;
            }

            if (goodWord && goodLetterDetected) {
                wordList = wordList + (((currentPage - 1) * 100) + wordCount + 1).toString() + '. ' + results.results.data[word] + '\n';
                wordCount += 1;
            }

        }

        if (wordCount != 99) { //theoretically if wordCount is 99, that means 100 words were pulled, which means we need to check pagnations n stuff
            needToPagenate = false;
        }
        
    } //end of process results function

    async function handleSubmit(e) {
        e.preventDefault();
        setPossibleWords('Loading...');
        wordList = ""; //set word list to be empty with a fresh submit

        const data = e.target;
        const formedData = new FormData(data);
        const formedJson = Object.fromEntries(formedData.entries());

        var wordToSearch: string = "";
        var goodLetters: string = "";
        var badLetters: string = "";

        //first five are the known letter/positions, then is other known letters, then is bad letters (7 total)
        var dataCount: number = 0;
        for (const data in formedJson) {
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

        var currentPage = 1;
        while (needToPagenate) {
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

    {/*
    const [yellowRows, setYellowRows] = useState([]);
    var yellowCount = 1;
    var yellowRowCount = 1;
    var subArray = [];

    function addYellowRow (e) {
        //e.preventDefault();

        const currentLabel = 'yellowLetter' + yellowRowCount.toString() + '.' + yellowCount.toString();

        for (let i : number = 0; i < 5; i++) {
            const Component = () => { <label key = {currentLabel} className = "letter_input">
                                        <input name = {currentLabel} />
                                      </label>
            } 
            yellowCount += 1;
            subArray.push(<Component />);
            console.log(Component);
        }
        
        setYellowRows([subArray]);
        console.log(subArray);
        yellowRowCount += 1;
        yellowCount = 1;

    } //end of add yellow row function
    */}

    var yellowRowCount = 1;
    const [yellowRows, setYellowRows] = useState([]);

    const YellowRow = () => {
        return (
            <div className = 'yellow_row'>
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
            </div>
        );
    };

    const addYellowRow = event => {
        console.log(yellowRowCount);
        setYellowRows(yellowRows.concat(<YellowRow key = {yellowRowCount} />));

        yellowRowCount += 1;
        console.log(yellowRowCount)
    };
    
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
                        {/*
                        <div className = "dropdown">
                            <button className = "dropdown_button"> Stories </button>
                            <div className = "dropdown_content">
                                <Link to = '/stories/crescendo/overview'> Crescendo </Link>
                            </div>
                        </div>
                        */}

                        {/* Zenith and Nadir */}
                        {/*}
                        <div className = "dropdown">
                        <button className = "dropdown_button"> Zenith &amp; Nadir </button>
                            <div className = "dropdown_content">
                                <Link to = '/zenithnadir/overview'> Overview </Link>
                            </div>
                        </div>
                        */}

                        {/* Warframe */}
                        {/*
                        <div className = "dropdown">
                        <button className = "dropdown_button"> Warframe </button>
                            <div className = "dropdown_content">
                                <Link to = '/warframe/tracker'> Tracker </Link>
                            </div>
                        </div>
                        */}

                        {/* Mabinogi */}
                        {/*
                        <div className = "dropdown">
                        <button className = "dropdown_button"> Mabinogi </button>
                            <div className = "dropdown_content">
                                <Link to = '/mabinogi/tracker'> Tracker </Link>
                            </div>
                        </div>
                        /*}

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
                    <p> TBD </p>
                    {/* eventual goal will have people using Google's auth to login to their google account to access their drive
			            for object storage */}
                    {/* light background dark text vs dark background light text */}
                </div>

            </div>
            {/* ending of header section */}

            {/* beginning of page section */}
            <div className = "page_section">

                <div className = "main_section">
                    <h1>Wordle Cheating Tool</h1>
                    <p>Built this for fun. As of right now, you can't really insert yellow letters, and you need to know some letter positions for it to work the most effecitvely.</p>
                    <div id = 'nytwordle'>
                        <Link to = {{ pathname : 'https://www.nytimes.com/games/wordle/index.html'}} target = '_blank'>Play Wordle!</Link>
                    </div>

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

                        {/* button for Add Yellow Letter Combonation
                            this will give you a new row of five input fields that allow you to input yellow letters directly
                            so this would put an unknown amount of new data points betwen the five green letters and the grey letters
                            and possibly create more api calls - but as long as it's just like me and one friend and i keep an eye on things
                            i should be fine lol
                            
                            so then the first five data points would be the green letters
                            of the json object from submit, it would be 
                            if we can get length/amount of points in a json object...
                            that length divided by five and then minus one would be the amount of yellow word combos we get (since counting starts at zero)
                            so then 0 - 5 would be the green letters in order,
                            0 + (5 * x) through 5 + (5 * x) where x the number of yellow combo we're on would be yellow numbers
                            and then the final number would be the gray letters
                            though x = 0 would also be the green letters in that formula... */}


                        <h5>Yellow Letter Combinations</h5>
                        <p>Click the button to add a new row, and then place letters in locations where they were yellow.</p>
                        <button id = "add_yellow_row" onClick = {addYellowRow}>
                            Add Yellow Letter Combination
                        </button>
                        <div id = "added_yellow_rows">
                            {yellowRows}
                        </div>

                        {/*}
                        <h5>Other Known Letters:</h5>
                        <p>List letters without spaces or other delimiters.</p>
                        <label>
                            <input name = "goodLetters" />
                        </label>
                        */}

                        <h5>Letters Not In Word (aka Gray Letters):</h5>
                        <p>List letters without spaces or other delimiters.</p>
                        <label>
                            <input name = "badLetters" />
                        </label>
                        <br />
                        <button id = "find_button" type = "submit">
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

    ReactDom.render(<getYellowRow />, document.getElementById("getyellowyow"));
  
}




