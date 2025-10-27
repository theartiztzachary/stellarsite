import { readdir } from 'fs';
import React, { useState, useCallBack, useEffect } from 'react';
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
		readdir(blogDirectory, (error, pages) => {
			if (error) {
				console.error('Error pulling blog pages.', error);
				return;
			}

			console.log('Blog pages pulled successfully.');
			return pages;
		});
	}; //end of getBlogDirectory function

	async function getPageInformation(pages: [string]) {
		const pageNavPart = '../pages/blogpages/blog';
		for (page in pages) {
			const pageNav = pageNavPart + '/' + page;
			const currentPage = await import(pageNav);
			const currentDictionary = {
				'name': currentPage.name,
				'tags': currentPage.tags,
				'id': currentPage.id,
				'routelink': currentPage.routelink,
				'description': currentPage.description
			};

				
			setPageInformation(pageInformation.push(currentDictionary));
		};
	}; //end of getPageInformtion function

	//this will run once when the page loads
	useEffect(() => {
		const pagenames = getBlogDirectory();
		getPageInformation(pagenames);
	}, []);

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

		useEffect(() => {
			handleSearch(searchTerm)
		}, [searchTerm, handleSearch]);

		const handleInputChange = (e) => {
			setSearchTerm(e.target.value)
		};

		return( //"HMTL"
			<div className = "search_bar">
				<form onSubmit = {(e) => e.preventDefault()}>
					<input value = {SearchTerm} onChange = {handleInputChange} placeholder = "Search the Blog" />
					<button type = "submit">
						Search
					</button>
				</form>
			</div>

			{searchResults.length > 0 && (
				<div className = "search_results">
					<h2>Search Results: </h2>
					<ul = "search_results_list">
						{searchResults.map((result) => (
							<li key = {result.id} clasName = "single_result">
								{result.name}
								{result.description}
							</li>
						))}
					</ul>
				</div>
			)}
		); //end of return
	}; //end of SearchBar component

	//beginning of "HTML" code//
	return(
		<p>testing</p>
		<SearchBar />
	);
}; //end of BlogHeader component

export default BlogHeader;