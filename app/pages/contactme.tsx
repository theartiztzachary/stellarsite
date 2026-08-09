import React from 'react';
import type { Route } from "./+types/home";

import '../../csssheets/homestyle.css';

import PageHeader from '../components/pageheader.tsx';
import '../../csssheets/pageheader.css';
import PageFooter from '../components/pagefooter.tsx';
import '../../csssheets/pagefooter.css';

export function meta({}: Route.MetaArgs) {
    return [
        { title: "Sakura Fox Fyre Dreams - Contact Me" },
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
                <p>email</p>
                <p>telegram</p>
            </div>

            <div className = "spacer"></div>
        </div>
           
        <PageFooter />
        </>
    );
}; //end of page function




