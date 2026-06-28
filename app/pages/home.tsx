import React from 'react';
import type { Route } from "./+types/home";

import '../../csssheets/homestyle.css';

import PageHeader from '../components/pageheader.tsx';
import '../../csssheets/pageheader.css';
import PageFooter from '../components/pagefooter.tsx';
import '../../csssheets/pagefooter.css';

export function meta({}: Route.MetaArgs) {
    return [
        { title: "Sakura Fox Fyre Dreams - Home" },
        { name: "description", content: "beep" },
    ];
};


export default function Home() {
    //beginning of "HTML" code//
    return (
		<>
        <PageHeader />

        <div className = "page_section">
            <div className = "spacer"></div>

            <div className = "main_section">
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
            </div>

            <div className = "spacer"></div>
        </div>
           
        <PageFooter />
        </>
    );
}; //end of page function




