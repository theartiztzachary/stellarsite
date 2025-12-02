//KNOWN MINOR ISSUES
//1. There is a space in front of the first word in the possible word list. Might be due to starting with an empty string and building on it.

//THINGS TO ADD EVENTUALLY
//1. User input validation

import React, { useState, useEffect } from 'react';
import type { Route } from './+types/home';
import ReactDom from 'react-dom';
import { Link } from 'react-router-dom';
import { isNumericString } from '../../util.tsx';

import '../../../csssheets/wordletool.css';

import PageHeader from '../../components/pageheader.tsx';
import '../../../csssheets/pageheader.css';
//import PageFooter from '../../components/pagefooter.tsx';
//import '../../../csssheets/pagefooter.css';

export function meta({}: Route.MetaArgs) {
    return [
        { title: "Stellar Sakura - Wordle Tool" },
        { name: "description", content: "beep" },
    ];
};

export default function WordleTool() {

    //interfaces for the API call//
    interface WordQuery {
        limit: number;
        page: number;
    };

    interface WordResults {
        data: [string];
        total: number;
    };

    interface WordResponse {
        query: WordQuery;
        results: WordResults;
    };

    //constants and variables//
    var wordList: string = '';
    var needToPagenate: boolean = true;
    var currentYellowWord: string = '';
    var isFullWord = false;
    var goodResults = null;
    var neutralResults = null;

    //useState variables//
    const [possibleWords, setPossibleWords] = useState('Possible words will appear here after searching.');
    const [yellowRowCount, setYellowRowCount] = useState(0);
    const [yellowRows, setYellowRows] = useState(['']);

    //internal components
    const YellowRow = () => {
        return (
            <div className = 'yellow_row'>
                <label className = "letter_input">
                    <input name = {`yellowRow${yellowRowCount}FirstLetter`} />
                </label>

                <label className = "letter_input">
                    <input name = {`yellowRow${yellowRowCount}SecondLetter`} />
                </label>

                <label className = "letter_input">
                    <input name = {`yellowRow${yellowRowCount}ThirdLetter`} />
                </label>

                <label className = "letter_input">
                    <input name = {`yellowRow${yellowRowCount}FourthLetter`} />
                </label>

                <label className = "letter_input">
                    <input name = {`yellowRow${yellowRowCount}FifthLetter`} />
                </label>
            </div>
        );
    }; // end of YellowRow component

    //functions//
    async function getWord(wordToSearch: string, currentPage: number): Promise<WordResponse> { //actually makes the API call itself
        var apiCall = 'https://wordsapiv1.p.rapidapi.com/words/?letterPattern=^' + wordToSearch + '$&page=' + currentPage;

        const headers: Headers = new Headers();
        headers.set('Accept', 'application/json');
        headers.set('X-RapidAPI-Key', import.meta.env.VITE_REACT_APP_WORD_API_TOKEN);

        const request: RequestInfo = new Request(apiCall, {
            method: 'GET',
            headers: headers
        });

        const response = await fetch(request);
        const data = await response.json();
        return data;
    }; //end of getWord function

    const addYellowRow = event => {
        setYellowRows(yellowRows.concat(<YellowRow key = {yellowRowCount} />));
        setYellowRowCount(prevCount => prevCount + 1);
    }; //end of addYellowRow function

    function processYellowRow(letter: string) {
        //console.log('Yellow Row Count: ' + yellowRowCount);
        if (letter == '') {
            if (currentYellowWord == '') {
                currentYellowWord = '.';
            } else {
                currentYellowWord = currentYellowWord + '.';
            };
        } else {
            if (currentYellowWord == '') {
                currentYellowWord = letter;
            } else {
                currentYellowWord = currentYellowWord + letter;
            };
        };

        if (currentYellowWord.length == 5) {
            isFullWord = true;
        };
    }; //end of procesYellowRow function

    async function processResult(results: WordResponse, yellowWords: [string], grayLetters: string, currentPage: number) {
        if (results.results.total >= 500) { //checks if there is too much data to comb through, mostly to limit amount of api calls
            //console.log('Beep.');
            needToPagenate = false;
            setPossibleWords('I need more green letters to narrow down my search.');
            neutralResults = true;
            return
        };

        //console.log(neutralResults); //should be null

        var grayLettersArray : [];
        if (grayLetters != '') { //if there are gray letters
            grayLettersArray = grayLetters.split('');
            for (let index: number = 0; index < grayLettersArray.length; index++) {
                if (!isNumericString(grayLettersArray[index])) { //if the letter is actually a letter
                    grayLettersArray[index] = grayLettersArray[index].toLowerCase();
                };
            };
        } else { //if there are no gray letters
            grayLettersArray = [''];
        };

        var returnedWordCount: number = 0; //used to keeep track of how many words are in the response
        var displayWordCount: number = 1; //used to keep track of how many words we have pulled to display
        var goodWord: boolean = true; //used to confirm if the current word in the call is valid
        goodResults = false; //sets this to false so if there is no returns at all then it will show the 'double check your inputs' message
        for (const word in results.results.data) {
            returnedWordCount += 1;
            goodWord = true; //reset goodWord
            for (let index: number = 0; index < 5; index++) {
                if (grayLettersArray.includes(results.results.data[word][index])) {
                    //console.log('There is a gray letter in this word.')
                    goodWord = false;
                    break; //if the letter is a known gray letter
                };
            };
            
            if (goodWord) {
                if (yellowRowCount == 0) {
                    //console.log('No yellow words.');
                    wordList = wordList + (((currentPage - 1) * 100) + displayWordCount).toString() + '. ' + results.results.data[word] + '\n';
                    displayWordCount += 1;
                    goodResults = true;
                } else {
                    var yellowLetters: [string] = [];
                    for (const yWord in yellowWords) {
                        //console.log('Yellow word is: ' + yellowWords[yWord]);
                        yellowLetters.push(...yellowWords[yWord].split(''));
                        //console.log('Yellow letters now are now... ' + yellowLetters);
                    };

                    //console.log('Yellow letters before: ' + yellowLetters)
                    for (let index: number = 0; index < yellowLetters.length; index++) {
                        yellowLetters[index] = yellowLetters[index].toLowerCase();
                    };
                    //console.log('Yellow letters after: ' + yellowLetters)

                    for (const yWord in yellowWords) {
                        for (let index: number = 0; index < 5; index++) {
                            //console.log('Current results letter: ' + results.results.data[word][index]);
                            //console.log('Current yellow word letter: ' + yellowWords[yWord][index]);

                            if (results.results.data[word][index] == yellowWords[yWord][index].toLowerCase()) {
                                //console.log('The letters are the same. This word is bad.');
                                goodWord = false;
                                break; //if the letter is the same and in the same position as a yellow letter
                            };

                            if (index == 4) { //on the last check if we haven't broken yet
                                //console.log('We are on the final check for this word...');
                                //console.log('Returned word: ' + results.results.data[word]);
                                const exclude = '.';
                                const filteredYellowLetters = yellowLetters.filter(item => item !== exclude); //this should have the yellow letters without the periods
                                const wordAsArray = results.results.data[word].split('');
                                if (!filteredYellowLetters.every(value => wordAsArray.includes(value))) { //if the word doesn't have all yellow letters in it
                                    goodWord = false;
                                    break;
                                }
                            };
                        };
                    };
                    if (goodWord) {
                        wordList = wordList + (((currentPage - 1) * 100) + displayWordCount).toString() + '. ' + results.results.data[word] + '\n';
                        displayWordCount += 1;
                        goodResults = true;
                    };
                };
            };   
        };

        if (returnedWordCount != 100) {
            needToPagenate = false; //the api returns 100 words per page, so if we don't get 100 then we don't need to keep going
        };
    }; //end of processResult function

    async function handleSubmit(e) {
        e.preventDefault();
        setPossibleWords('Loading...');
        wordList = '';
        goodResults = null;
        neutralResults = null;
        
        const data = e.target;
        const formedData = new FormData(data);
        const formedJson = Object.fromEntries(formedData.entries());

        var wordToSearch: string = '';
        var greenWord: string = '';
        var yellowWords: [string] = [];
        var grayLetters: string = '';

        //the first five data points are known letters with relevant positions
        //yellow letters are data points six through 5 + yellow row count * 5
        //the rest are gray letters (together as a single string)
        //console.log('Yellow row count: ' + yellowRowCount);
        var dataCount: number = 0;
        for (const data in formedJson) {
            if (dataCount < 5) {
                if (wordToSearch == '') { //if this is the first data point
                    if (formedJson[data] == '') {
                        wordToSearch = '.{1}';
                    } else {
                        if (!isNumericString(formedJson[data])) {
                            const letter = formedJson[data].toLowerCase();
                            wordToSearch = letter;
                        } else {
                            wordToSearch = '.{1}';
                        };
                    };
                } else {
                    if (formedJson[data] == '') {
                        wordToSearch = wordToSearch + '.{1}';
                    } else {
                        if (!isNumericString(formedJson[data])) {
                            const letter = formedJson[data].toLowerCase();
                            wordToSearch = wordToSearch + letter;
                        } else {
                            wordToSearch = wordToSearch + '.{1}';
                        };
                    };
                };
            } else if ((dataCount >= 5 && (dataCount < (5 + (yellowRowCount * 5))))) {
                if (!isNumericString(formedJson[data])) {
                    processYellowRow(formedJson[data]);
                } else {
                    processYellowRow('');
                }
                if (isFullWord) {
                    yellowWords.push(currentYellowWord);
                    isFullWord = false;
                    currentYellowWord = '';
                };
            } else {
                grayLetters = formedJson[data];
            };

            dataCount += 1;
        };

        if (wordToSearch == '.{1}.{1}.{1}.{1}.{1}') {
            //console.log('Beep');
            setPossibleWords('I need at least one green letter in order to complete my search.')
            neutralResults = true; //we shouldn't even hit that check but just in case :)
            return
        }

        var currentPage = 1;
        while (needToPagenate) {
            const results = await getWord(wordToSearch, currentPage);
            await processResult(results, yellowWords, grayLetters, currentPage);
            currentPage += 1;
        };

        //console.log('goodResults: ' + goodResults);
        //console.log('neutralResults: ' + neutralResults);

        if (goodResults) {
            setPossibleWords(wordList);
        } else if (goodResults == false) { //note to self: when using !boolean, null is the same as false (probably specifically checks for not true xd)
            setPossibleWords('Something went wrong. Please double check your inputs or, if you are certain your inputs are correct, log an issue on our GitHub page. https://github.com/theartiztzachary/stellarsite/issues');
        } else if (neutralResults) {
            //nothing happens
        } else {
            setPossibleWords('Something went terribly wrong. Please log an issue on our GitHub page, and include the console output (if any). https://github.com/theartiztzachary/stellarsite/issues');
        };
    }; //end of handleSubmit function

    //beginning of "HTML" code//
    return (
        <>
        <PageHeader />

        <div className = "page_section">
            <h1>Wordle Cheating Tool</h1>
            <p>Built this for fun. If the tool says you need more information, that meanst that it would have taken more than 5 individual API calls to the API I am using, so it is a self-imposed rate limit, mostly becuase I'm on the free tier right now and... :3</p>
            <div id = 'nytwordle'>
                <Link to = {{ pathname: 'https://www.nytimes.com/games/wordle/index.html'}} target = '_blank'>Play Wordle!</Link>
            </div>

            <form onSubmit = {handleSubmit}>
                <h5>Green Letters + Positions:</h5>

                <label className = "green_letter_input">
                    <input name = 'firstGreenLetter' />
                </label>

                <label className = "green_letter_input">
                    <input name = 'secondGreenLetter' />
                </label>

                <label className = "green_letter_input">
                    <input name = 'thirdGreenLetter' />
                </label>

                <label className = "green_letter_input">
                    <input name = 'fourthGreenLetter' />
                </label>

                <label className = "green_letter_input">
                    <input name = 'fifthGreenLetter' />
                </label>

                <h5>Yellow Letter Combinations</h5>
                <p>Click the button to add a new row, then place letters in the locations where they were yellow.</p>
                <button type = "button" id = "add_yellow_row" onClick = {addYellowRow}>
                    Add Yellow Letter Combination
                </button>
                <br />
                <div id = "added_yellow_rows">
                    {yellowRows}
                </div>

                <h5>Gray Letters:</h5>
                <p>List letters WITHOUT spaces, commas or other delimiters.</p>
                <label className = "gray_letter_input">
                    <input name = "grayLetters" />
                </label>

                <br />
                <br />

                <button id = "find_button" type = "submit">
                    Find Words
                </button>
            </form>

            <h3>Possible Words:</h3>
            <p id = "words_list"> {possibleWords} </p>
        </div>

        {/* footer goes here */}
        </>
    );

    ReactDom.render(<getYellowRow />, document.getElementById("getyellowrow"));
}; //end of page function