//KNWON ISSUE - when the search query changes, the useEffect tied to it seems to be running multiple times, even if only one letter is changed

import type { Route } from "./+types/home";
import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';

import PageHeader from '../../components/pageheader.tsx';
import '../../../csssheets/pageheader.css';
import PageFooter from '../../components/pagefooter.tsx';
import '../../../csssheets/pagefooter.css';

import '../../../csssheets/znstyle.css';
import ZNNHeader from "~/components/znnheader";

export function meta({}: Route.MetaArgs) {
    return [
        { title: "Sakura Fox Fyre Dreams - Dejin's Bio" },
        { name: "description", content: "beep" },
    ];
};

export default function CharacterOverview() {
    const CharacterSearch = (props) => {
        //useState variables//
        const [pageInformation, setPageInformation] = useState([]);
        const [searchQuery, setSearchQuery] = useState('');
        const [searchResultPages, setSearchResultPages] = useState([]);
        const [searchResults, setSearchResults] = useState([]);

        //variables//
        var pageLoaded: boolean = false;

        //functions//
        function getCharactersDirectory(): [string] { //returns an array of page navs relative to component folder
            //console.log('getCharactersDirectory is running...');
            var pages: [string] = [];
            const characterPages = import.meta.glob('./characterbios/*');
            for (const [key, value] of Object.entries(characterPages)) {
                pages.push(key);
            }
            //console.log(pages);
            return pages;
        }; //end of getCharactersDirectory function

        async function getPageInformation(pages: [string]) { //linker function between getCharactersDirectory and loadPageData for the async usage
            for (const page of pages) {
                loadPageData(page);
                //console.log(pageInformation);
            }
        }; //end of getPageInformation function

        async function loadPageData(fileNav) { //loads page data into PageInformation for use
            //console.log('loadPageData is running...');
            const pageObject = await import(/* @vite-ignore */`${fileNav}`);
            //console.log(pageObjet.name);
            const currentPageInfo = {
                'name': pageObject.name,
                'tags': pageObject.tags,
                'id': pageObject.id,
                'routelink': pageObject.routelink,
                'description': pageObject.description
            };
            //console.log(currentPageInfo);
            setPageInformation(prevArray => [...prevArray, currentPageInfo]);
        }; //end of loadPageData function

        //useEffects//
        useEffect(() => { //hypothetically this runs twice in dev and only once in prd
            if(!pageLoaded) {
                //console.log('I should only show once in the console.');
                pageLoaded = true;
                const pagedirs = getCharactersDirectory();
                getPageInformation(pagedirs);
            };
        }, []);

        useEffect(() => { //updates search results
            //console.log('searchResultPages is currently: ' + searchResultPages);
            if (searchQuery.length > 2) {
                //this will need some kind of ascyn/loading function bc pages are going to get wild but for now
                for (let index = 0; index < pageInformation.length; index++) {
                    if (searchResultPages.includes(pageInformation[index].name)) {
                        //console.log('This page is already logged.');
                        //check if the result is still valid and if not remove it
                        var validResult: boolean = false;
                        for (const [key, value] of Object.entries(pageInformation[index])) {
                            if (value.includes(searchQuery)) {
                                validResult = true;
                                //console.log('This page is still valid.');
                                break; //removes us from the loop bc we are good
                            };
                        };

                        if (!validResult) {
                            //console.log('This page is invalid.');
                            const invalidIndex = searchResultPages.indexOf(pageInformation[index].name);
                            //console.log(invalidIndex);
                            setSearchResultPages(searchResultPages.splice(invalidIndex, 1));
                            setSearchResults(searchResults.splice(invalidIndex, 1));
                        };

                        break;

                    } else {
                        //console.log('This result is not already logged.');
                        for (const [key, value] of Object.entries(pageInformation[index])) {
                            //console.log(pageInformation[index].name);
                            if (pageInformation[index].name.toLowerCase().includes(searchQuery.toLowerCase())) {
                                //console.log('The value has the search term in it!');
                                setSearchResultPages(searchResultPages.concat(pageInformation[index].name));
                                setSearchResults(searchResults.concat(<SearchResult pageInfo = {pageInformation[index]} key = {pageInformation[index].id} />));
                                break;
                            };
                            
                            //console.log('The value does not have the search term in it.');
                        };
                    }; //end of dictionary check
                };
            } else if ((searchResultPages.length > 0) && (searchResultPages[0] != '')) {
                //console.log(searchResultPages);
                //console.log('Removing search results...');
                setSearchResultPages(prevArray => []);
                setSearchResults(prevArray => []);
            }
        }, [searchQuery]);

        //internal components//
        const SearchResult = ({ pageInfo }) => {
            return (
                <div className = 'searchResult'>
                    <Link to = {pageInfo.routeLink}>
                        <h3>{pageInfo.name}</h3>
                    </Link>
                </div>
            );
        }; //end of SearchResult

        //'HTML' code//
        return (
            <div className = "search_bar_full">
                <label>Search: </label>
                {/* dropdown to specify search to improve performance */}
                <input type = 'text' id = 'search_input' value = {searchQuery} onChange = {(e) => setSearchQuery(e.target.value)}/>
                <p>Testing - current search query: {searchQuery}</p>
                <p>Testing - current search results:</p>
                <div className = 'search_results'>
                    {searchResults}
                </div>
            </div>
        );
    }; //end of search bar component

    return (
        <>
        <div className = 'background-setup'>
            <img src = '../../../../images/zntreeimage.png' id = 'background-image' />
        </div>
        <div className = 'backgound-setup' id = 'background-opacity-filter'></div>

        <PageHeader />

        <ZNNHeader />

        <div className = "page_section">
            <div className = 'spacer'/>

            <div className = 'main_section'>
                <CharacterSearch />
            </div>

            <div className = 'spacer'/>
        </div>
        </>
    );
};