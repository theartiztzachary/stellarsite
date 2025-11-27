import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const BlogHeader = (props) => {
	//useState variables//
	const [pageInformation, setPageInformation] = useState([]);
	const [searchQuery, setSearchQuery] = useState('');
	const [searchResultPages, setSearchResultPages] = useState([]);
	const [searchResults, setSearchResults] = useState([]);

	//variables//
	var pageLoaded: boolean = false;

	//functions//
	function getBlogDirectory(): [string] { //returns an array of page navs relative to component folder
		//console.log('getBlogDirectory is running...');
		var pages: [string] = [];
		const blogPages = import.meta.glob('../pages/blogpages/blog/*');
		for (const [key, value] of Object.entries(blogPages)) {
			pages.push(key);
		}
		//console.log(pages);
		return pages;
	}; //end of getBlogDirectory function

	async function getPageInformation(pages: [string]) { //linker function between getBlogDirectory and loadPageData for the async usage
		for (const page of pages) {
			loadPageData(page);
			//console.log(pageInformation);
		};
	}; //end of getPageInformation function

	async function loadPageData(fileNav) { //loads page data into pageInformation for use
		//console.log('loadPageData is running...');
		const pageObject = await import(/* @vite-ignore */`${fileNav}`);
		//console.log(pageObject.name);
		const currentDictionary = {
			'name': pageObject.name,
			'tags': pageObject.tags,
			'id': pageObject.id,
			'routelink': pageObject.routelink,
			'description': pageObject.description
		};
		//console.log(currentDictionary);
		setPageInformation(prevArray => [...prevArray, currentDictionary]);
	}; //end of loadPageData function

	//useEffects//
	useEffect(() => { //hypothetically this runs twice in dev run and only once in prd run, so will have to check prd to confirm
		if (!pageLoaded) {
			console.log('I should only show once in the console.');
			pageLoaded = true;
			const pagedirs = getBlogDirectory();
			getPageInformation(pagedirs);
		}
	}, []);

    useEffect(() => { //updates search results
        //console.log('searchResultPages is currently: ' + searchResultPages);
        if (searchQuery.length > 2) {
            //this will need some kind of ascyn/loading function bc pages are gonna get...wild xd but for now
            for (let index = 0; index < pageInformation.length; index++) {
                if (searchResultPages.includes(pageInformation[index].name)) {
                    console.log('This page is already logged.');
                    //check if the result is still valid and if not remove it
                    var validResult: boolean = false;
                    for (const [key, value] of Object.entries(pageInformation[index])) {
                        if (value.includes(searchQuery)) {
                            validResult = true;
                            console.log('This page is still valid.');
                            break; //removes us from the for loop bc we are good
                        }
                    }

                    if (!validResult) {
                        console.log('This page is invalid.');
                        const invalidIndex = searchResultPages.indexOf(pageInformation[index].name);
                        //console.log(invalidIndex);
                        setSearchResultPages(searchResultPages.splice(invalidIndex, 1));
                        setSearchResults(searchResults.splice(invalidIndex, 1));
                    }

                    break
                } else {
                    //console.log('This result is not already logged.');
                    for (const [key, value] of Object.entries(pageInformation[index])) {
                        if (value.includes(searchQuery)) {
                            console.log('The value has the search term in it!');
                            //removal is not working
                            setSearchResultPages(searchResultPages.concat(pageInformation[index].name))
                            setSearchResults(searchResults.concat(<SearchResult pageInfo = {pageInformation[index]} key = {pageInformation[index].id} />));
                            break
                        }
                    } //end of dictionary check
                }
            } //end of pageInformation iteration
        } else if ((searchResultPages.length > 0) && (searchResultPages[0] != '')) {
            //console.log(searchResultPages);
            //console.log('Removing search results...');
            //setSearchResultPages(searchResultPages.length = 0);
            //setSearchResults(searchResults.length = 0);
        }
    }, [searchQuery]);

    useEffect(() => {
        if (searchResults.length > 0) {
            console.log('Showing search results!');
            document.documentElement.style.setProperty("--search-results-show", "block");
        } else {
            console.log('Hiding search results!');
            document.documentElement.style.setProperty("--search-results-show", "hidden");
        }
    }, [searchResults]);

	//internal components//
	const SearchResult = ({ pageInfo }) => {
        return (
            <div id="search_result">
                <Link to = {pageInfo.routelink}>
                    <h3>{pageInfo.name}</h3>
                </Link>
            </div>
		);
	}; //end of SearchResult component

	//'HTML' code//
	return (
        <div className = "search_bar_full">
			<label>Search: </label>
			{/* dropdown to specify search to improve performance */}
			<input type = "text" id = "search_input" value = {searchQuery} onChange = {(e) => setSearchQuery(e.target.value)}/>
			<p>Testing - current search query: {searchQuery}</p>
            <p>Testing - current search results:</p>
            <div className = "search_results">
                {searchResults}
            </div>
		</div>
	);
}; //end of BlogHeader component

export default BlogHeader;