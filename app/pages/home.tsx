import React from 'react';
import type { Route } from "./+types/home";

import '../../csssheets/homestyle.css';

import PageHeader from '../components/pageheader.tsx';
import '../../csssheets/pageheader.css';
//import PageFooter from '../components/pagefooter.tsx';
//import '../../csssheets/pagefooter.css';

export function meta({}: Route.MetaArgs) {
    return [
        { title: "Stellar Sakura - Home" },
        { name: "description", content: "beep" },
    ];
};


export default function Home() {
    //beginning of "HTML" code//
    return (
		<>
        <PageHeader />
            <div className = "page_section">

                <div className = "main_section">
                </div>

                <div className = "external_links">
                    <p>Instagram</p>
                    <p>Bluesky</p>
                    <p>Youtube</p>
                    <p>TikTok</p>
                    <p>GitHub</p>
                    <p>Itch.io</p>
                </div>
    
            </div>
           
        {/* footer goes here */}
        </>
    );
}; //end of page function




