import React from 'react';
import type { Route } from "./+types/home";

import '../../csssheets/homestyle.css';

import PageHeader from '../components/pageheader.tsx';
import '../../csssheets/pageheader.css';
import PageFooter from '../components/pagefooter.tsx';
import '../../csssheets/pagefooter.css';

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
    
            </div>
           
        <PageFooter />
        </>
    );
}; //end of page function




