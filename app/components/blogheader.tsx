//KNOWN MINOR ISSUES//
//1. if the search bar is emptied, the search is not cleared

//from the top
//i need an input bar that captures user input - done
//i need to pull all the pages in the blog directory to search through - done
//i need the paga data to be pulled as part of the dom load - done
//i need to compare the two and get search results - done
//i need a way to show the results to the user - done ish, i show results but it's not pretty xd
//the user should be able to click on a result and navigate to that pages

import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const BlogHeader = (props) => {
	//useState variables//
	const [pageInformation, setPageInformation] = useState([]);
	const [searchQuery, setSearchQuery] = useState('');
	const [searchResults, setSearchResults] = useState('');

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

	//useEffects//
	useEffect(() => { //hypothetically this runs twice in dev run and only once in prd run, so will have to check prd to confirm
		if (!pageLoaded) {
			console.log('I should only show once in the console.');
			pageLoaded = true;
			const pagedirs = getBlogDirectory();
			getPageInformation(pagedirs);
		}
	}, []);

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

	useEffect(() => { //updates search results
		if (searchQuery != '') {
			//console.log('I am comparing the query to the directory info!');
			//console.log(searchQuery);
			//console.log(pageInformation);
			//console.log(pageInformation.length);
			var sResults = [];
			
			for (let i = 0; i < pageInformation.length; i++) {
				//console.log(pageInformation[i]);
				for (const [key, value] of Object.entries(pageInformation[i])) {
					console.log("The key is: " + key);
					//console.log("The value is: " + value);
					if (value.includes(searchQuery)) {
						console.log('The value has the search term in it!')
						sResults.push(pageInformation[i])
						break
					}
				}
			}

			var resString = '';
			//console.log(sResults);
			if (sResults.length != 0) {
				for (let i = 0; i < sResults.length; i++) {
					console.log(sResults[i]);
					resString = resString + sResults[i].name + '\n';
				};
			};
			//console.log(resString);
			setSearchResults(resString);
		};
	}, [searchQuery]);

	//'HTML' code
	return (
		<div id = 'search_bar_full'>
			<label>Search: </label>
			{/* dropdown to specify search to improve performance */}
			<input type = "text" id = "search_input" value = {searchQuery} onChange = {(e) => setSearchQuery(e.target.value)}/>
			<p>Testing - current search query: {searchQuery}</p>
			<p>Testing - current search results:</p>
			<p>{searchResults}</p>
		</div>
	);
}; //end of BlogHeader component

export default BlogHeader;