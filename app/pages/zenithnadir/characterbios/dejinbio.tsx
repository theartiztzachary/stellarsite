import React from 'react';
import type { Route } from "./+types/home";

import '../../../../csssheets/znstyle.css';

import PageHeader from '../../../components/pageheader.tsx';
import '../../../../csssheets/pageheader.css';
import PageFooter from '../../../components/pagefooter.tsx';
import '../../../../csssheets/pagefooter.css';

export function meta({}: Route.MetaArgs) {
    return [
        { title: "Sakura Fox Fyre Dreams - Dejin's Bio" },
        { name: "description", content: "beep" },
    ];
};

export default function DejinBio() {
    return (
        <>
        <PageHeader />

        <div className = "page_section">
            <div className = "spacer"></div>

            <div className = "main_section">
                <h1>Dejin</h1>

                
            </div>

            <div className = "spacer"></div>
        </div>
           
        <PageFooter />
        </>
    )
};