import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const BlogHeader = () => {
    //useState variables//
    const [pageInformation, setPageInformation] = useState([]);
    const [searchQuery, setSearchQuery] = useState('');
    const [searchResults, setSearchResults] = useState([]);
    const [searchResultNames, setSearchResultNames] = useState([]);

    //standard variables//
    var pageLoaded: boolean = false;

    //functions//
    function getBlogDirectory(): [string] { //returns an array of page navigations relative to component folder
        var pages: [string] = [];
        const blogPages = import.meta.glob('../pages/blogpages/blog/*');
        for (const key in blogPages) {
            pages.push(key);
        };
        return pages;
    }; //end of getBlogDirectory function

    async function getPageInformation(pages: [string]) { //linker function between getBlogDirectory and loadPageData
        for (const page of pages) {
            loadPageData(page);
        };
    }; //end of getPageInformation function

    async function loadPageData(fileNav: string) { //loads page data into pageInformation for use
        const pageObject = await import(/* @vite-ignore */`${fileNav}`);
        const currentDictionary = {
            'name': pageObject.name,
            'tags': pageObject.tags,
            'id': pageObject.id,
            'routelink': pageObject.routelink,
            'description': pageObject.description,
            'date': pageObject.date
        };

        setPageInformation(prevArray => [...prevArray, currentDictionary]);
    }; //end of loadPageData function

    //useEffects//
    useEffect(() => { //on page load
        if (!pageLoaded) {
            pageLoaded = true;
            const pagedirs = getBlogDirectory();
            getPageInformation(pagedirs);
        }
    }, []);

    useEffect(() => { //updates search results
        if (searchQuery.length > 2) {
            //eventually replace this with some kind of ascyn loading function
            for (let index = 0; index < pageInformation.length; index++) {
                if (searchResultNames.includes(pageInformation[index].name)) { //if the search result is already logged
                    //console.log('This page is already logged!')
                    var validResult: boolean = false;
                    for (const [key, value] of Object.entries(pageInformation[index])) {
                        if (value.includes(searchQuery)) { //if the page still applies to the search query
                            //console.log('This page is still valid.');
                            validResult = true;
                            break;
                        };
                    };

                    if (!validResult) { //if the page does not apply to the search query
                        //console.log('This page is invalid.');
                        const invalidIndex = searchResultNames.indexOf(pageInformation[index].name);
                        //console.log('Index: ' + invalidIndex);
                        //console.log('searchResultNames at ' + invalidIndex + ': ' + searchResultNames[index]);
                        var holdSearchResultNames = searchResultNames;
                        holdSearchResultNames.splice(invalidIndex, 1);
                        setSearchResultNames(holdSearchResultNames);
                        //console.log(searchResultNames);
                        //console.log('searchResults at ' + invalidIndex + ': ' + searchResults[index]);
                        var holdSearchResults = searchResults;
                        holdSearchResults.splice(invalidIndex, 1);
                        setSearchResults(holdSearchResults);
                        //console.log(searchResults);
                    };
                } else { //if the search result is not already logged
                    //console.log('This page is not already logged!');
                    for (const [key, value] of Object.entries(pageInformation[index])) {
                        if (value.includes(searchQuery)) {
                            //console.log('This value has the search term in it!');
                            setSearchResultNames(searchResultNames.concat(pageInformation[index].name));
                            setSearchResults(searchResults.concat(<SearchResult pageInfo = {pageInformation[index]} key = {pageInformation[index].id} />));
                        };
                    };        
                };
            }; //end of pageInformation iteration
        } else {
            setSearchResultNames([]);
            setSearchResults([]);
        }
        console.log(searchResults); //seems to be a letter behind
    },[searchQuery]);

    //internal components//
    const SearchResult = ({ pageInfo }) => {
        return(
            <div id = "search_result">
                <Link to = {pageInfo.routeLink}>
                    <p>{pageInfo.name}</p>
                </Link>
            </div>
        );
    };

    //HTML 'code'//
    return(
        <div className = "search_bar_full">
            <label>Search: </label>
            {/*dropdown to specify search to imporve performance eventually*/}
            <input type = "text" className = "search_input" value = {searchQuery} onChange = {(e) => setSearchQuery(e.target.value)}/>
            <div className = "search_results">
                {searchResults}
            </div>
        </div>
    );

}; //end of BlogHeader component

export default BlogHeader;