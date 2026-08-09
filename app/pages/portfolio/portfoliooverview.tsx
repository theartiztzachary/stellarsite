import React from 'react';
import type { Route } from "./+types/home";
import { Link } from 'react-router-dom';    

import '../../../csssheets/portfoliostyle.css';

import PageHeader from '../../components/pageheader.tsx';
import '../../../csssheets/pageheader.css';
import PageFooter from '../../components/pagefooter.tsx';
import '../../../csssheets/pagefooter.css';

export function meta({}: Route.MetaArgs) {
    return [
        { title: "Sakura Fox Fyre Dreams - Portfolio" },
        { name: "description", content: "beep" },
    ];
};

export default function PortfolioOverview() {
    return(
        <>
        <PageHeader />

        <div className = "page_section">
            <div className = "spacer"></div>

            <div className = "main_section">
                <div className = "banners">
                    <Link to = '/portfolio/gamejams/overview'>
                        <img src = '/testbanner.png' id = 'gamejam_banner' className = 'portfolio_banner'/>
                    </Link>
                    <Link to = '/portfolio/artfight2026'>
                        <img src = '/testbanner.png' id = 'artfight_banner' className = 'portfolio_banner' />
                    </Link>
                    <Link to ='/zenithnadir/overview'>
                        <img src = '/testbanner.png' id = 'zenithnadir_banner' className = 'portfolio_banner' />
                    </Link>
                </div>
            </div>

            <div className = "spacer"></div>
        </div>

        <PageFooter />
        </>
    );
};