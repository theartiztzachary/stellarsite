import React, { useState, useCallback, useEffect } from 'react';
import { Link } from 'react-router-dom';

const BlogHeader = () => {
	//constants and variables//
	const blogDirectory = '../pages/blogpages/blog';

	//useState variables//
	const [searchTerm, setSearchTerm] = useState('');
	const [searchResults, setSearchResults] = useState('');
	const [pageInformation, setPageInformation] = useState([]);

	//functions//

	function getBlogDirectory(): [string] {
		console.log('getBlogDirectory is running...');
		var pages: [string] = [];
		const blogPages = import.meta.glob('../pages/blogpages/blog/*');
		//console.log(blogPages);
		for (const [key, value] of Object.entries(blogPages)) {
			pages.push(key);
		}
		//console.log(pages);
		return pages;
	}; //end of getBlogDirectory function

	async function getPageInformation(pages: [string]) {
		for (const page of pages) {
			const pageObject = loadPageData(page);
		};
	}; //end of getPageInformtion function

	async function loadPageData(fileNav) {
		console.log('loadPageData is running...');
		const pageObject = await import(/* @vite-ignore */`${fileNav}`);
		//console.log(pageObject.name); //testing
		const currentDictionary = {
			'name': pageObject.name,
			'tags': pageObject.tags,
			'id': pageObject.id,
			'routelink': pageObject.routelink,
			'description': pageObject.description
		};
		//console.log(currentDictionary);

		setPageInformation(pageInformation.push(currentDictionary));
	}; //end of loadPageData function

	//this will run once when the page loads - why is it running twice??? lmao
	/*
	useEffect(() => {
		const pagenames = getBlogDirectory();
		getPageInformation(pagenames);
	}, []);
	*/

	//internal components//
	const SearchBar = () => {
		//this sets a small timeout window so search results will calculate a few moments after the user stops typing instead of after every keystroke
		const debounce = (func, delay) => {
			let timeoutId;
			return (...args) => {
				clearTimeout(timeoutId);
				timeoutId = setTimeout(() => func(...args), delay);
			};
		}; //end of debounce delcaration

		const handleSearch = useCallback(
			debounce((term) => {
				if (term.trim() === '') { //if the search is empty 
					setSearchResults([]);
				} else {
					const results = pageInformation.filter((item) =>
						item.name.toLowerCase().includes(term.toLowerCase()), //compares the search term to the page names
					);
					setSearchResults(results);
				};
			}, 300),
			[],
		); //end of handleSearch delcaration

		useEffect(() => { //this is running constantly! i thought it was only supposed to run when searchTerm changed...
			//console.log('inner useEffect is triggering!');
			handleSearch(searchTerm)
		}, [searchTerm, handleSearch]);

		const handleInputChange = (e) => {
			setSearchTerm(e.target.value)
		};

		return( //"HTML"
			<div className = "search_bar_component">
				<div className = "search_bar">
					<form onSubmit = {(e) => e.preventDefault()}>
						<input id = "search_bar_input" value = {searchTerm} onChange = {handleInputChange} placeholder = "Search the Blog" />
						<button type = "submit">
							Search
						</button>
					</form>
				</div>

				{searchResults.length > 0 && (
					<div className = "search results">
						<h2>Search Results: </h2>
						<ul className = "search_result_list">
							{searchResults.map((result) => (
								<li key = {result.id} className = "signle_result">
									{result.name}
									{result.description}
								</li>
							))}
						</ul>
					</div>
				)};
			</div>
		); //end of return
	}; //end of SearchBar component

	//beginning of "HTML" code//
	return(
		<>
		<p>testing</p>
		<SearchBar />
		</>
	);

	document.addEventListener("DOMContentLoaded", () => {
		console.log('DOM has loaded.');
		const pagenames = getBlogDirectory();
		getPageInformation(pagenames);
	});

}; //end of BlogHeader component

export default BlogHeader;