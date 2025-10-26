import { readdir } from 'fs';
import React from 'react';
import { Link } from 'react-router-dom';
import { Search, Mic } from 'lucide-react';

const BlogHeader = () => {
	//constants and variables//
	const blogDirectory = '../pages/blogpages/blog';

	//internal components//
	const SearchBar = () => {
		return(

		);
	}; //end of SearchBar component

	//internal functions//
	async function getBlogDirectory(): [string] {
		const pages: [string] = readdir(blogDirectory, (error, files)) => {
			if (error) {
				console.error('Error in pulling blog pages:', error);
				return
			} 
		});

		return pages;
	}

	//this will run once when a page loads, allowing us to pre-load blog directory
	useEffect(() => {

	}

	//beginning of "HTML" code//
	return(
		<p>testing</p>
	);
};

export default BlogHeader;