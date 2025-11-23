//KNOWN MINOR ISSUES//

import React, { useEffect, useState, useReducer } from 'react';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';

const BlogHeaderOld = () => {
	//types//
	type SearchResult = {
		name: string,
		tags: [string],
		id: string,
		routelink: string,
		description: string
	}

	type State = {
		results: [searchResult],
		isLoading: boolean,
		error?: string,
		query: string
	}

	type Action =
		| {type: 'request',}
		| {type: 'success', results: SearchResult[]}
		| {type: 'failure', error: string}
		| {type: 'setQuery', query: string}

	//consts and variables//
	const blogDirectory = '../pages/blogpages/blog';
	const dispatch = useDispatch;
	const initialSearchState: State = {isLoading: false, results: [], query: ''};
	const [pageInformation, setPageInformation] = useState([]);

	//const function things xd
	const getCharacters = async (query: string): Promise<SearchResult[]> => {
		//this is being triggered... four times before anything is even searched...
		//console.log('getCharacters is being triggered!');
		//console.log('Recieved query is: ' + query);


		//the code to get the 'results' from the search goes here...
		//the code we took from uses an external api/url as it's example
		//and we're not doing that
		//
	} //end of getCharacters

	const useLiveSearch = (dispatch: Dispatch<Action>, query: string) => {
		useEffect(() => {
			//abort controller to abort a request if the query changes before the call finishes
			const controller = new AbortController();
			(async function () {
				//set loading state to true
				dispatch({type: 'request'})
				try {
					const data = await getCharacters(query) //function not built out yet, wait how are we displaying the results?
					if (data) {
						dispatch({type: success, results: data})
					}
				} catch (err) {
					console.log('Error in fetching page data.')
					console.log(err)
					dispatch({'type': 'failure', error: 'Error in fetching page data.'})
				}
			})()
			return () => controller.abort();
		}, [query])
	} //end of useLiveSearch

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

	//a 'reducer'
	function reducer(state: State, action: Action): State {
		switch (action.type) {
			case 'request': {
				return {...state, isLoading: true}
			};
			case 'success': {
				return {...state, isLoading: false, results: action.results}
			};
			case 'failure': {
				return {...state, isLoading: false, error: action.error}
			};
			case 'setQuery': {
				return {...state, query: action.query}
			};
			default: {
				throw Error('Reducer function error.')
			};
		}
	} //end of reducer function

	//internal components//
	const SearchBar = (_props) => {
		const [state, dispatch] = useReducer(reducer, initialSearchState)
		const {query, isLoading, results, error} = state
		const [debounceValue, setDebounceValue] = useState<string>('')

		useLiveSearch(dispatch, query)

		function handleQueryChange (e) {
			setDebounceValue(e.target.value)
		} //end of handleQueryChange function

		useEffect(() =>  {
			if (debounceValue < 3) {return}
			const timeout = setTimeout(() => {
			dispatch({type: 'setQuery', query: debounceValue})
			}, 400 ); //interval is in... miliseconds? maybe? xd
		}, [debounceValue])

		return ( //'HTML'
			<div className = "search_bar">
				{/* maybe some salesforce-style dropdown to pin down what to look at? */}
				<input onChange = {handleQueryChange} value = {state.query} type = "search" className = "search_bar"></input>
			</div>
		) 
	}

	//'HTML' code - okay so this.... 'works' as a basic input bar but a) weird lag and b) can't erase the first letter?
	return (
		<>
		<p>testing</p>
		<SearchBar /> 
		</>
	) //end of return

	document.addEventListener("DOMContentLoaded", () => { //this is no longer running???? lmao...
		console.log('DOM has loaded.');
		const pagenames = getBlogDirectory();
		getPageInformation(pagenames);
	}); 
} //end of BlogHeader component

//export default BlogHeader;