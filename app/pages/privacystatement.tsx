import React from 'react';
import type { Route } from "./+types/home";

import '../../csssheets/homestyle.css';

import PageHeader from '../components/pageheader.tsx';
import '../../csssheets/pageheader.css';
//import PageFooter from '../components/pagefooter.tsx';
//import '../../csssheets/pagefooter.css';

export function meta({}: Route.MetaArgs) {
    return [
        { title: "Stellar Sakura - Privacy Statement" },
        { name: "description", content: "beep" },
    ];
};

export default function PrivacyStatement() {
    return(
        <>
            <PageHeader />
            <h2>Privacy Statement</h2>
            <p>For now, please see Google's privacy statement. The only information we currently save is your email to store and access information
            for the tracker tools.</p>
        </>
    );
};