import React from 'react';
import type { Route } from './+types/home';

import '../../../csssheets/bloghomestyle.css';

import PageHeader from '../../components/pageheader.tsx';
import '../../../csssheets/pageheader.css';
//import PageFooter from '../../components/pagefooter.tsx';
//import '../../../csssheets/pagefooter.css';
import BlogHeader from '../../components/blogheader.tsx';
import '../../../csssheets/blogheaderstyle.css';

export function meta({}: Route.MetaArgs) {
    return [
        { title: "Stellar Sakura - Blog" },
        {name: "description", content: "beep" },
    ];
};

export default function BlogHome() {


//beginning of "HTML" code//
  return (
      <>
      <PageHeader />
      <br/>
      <BlogHeader />

      <div className = "page_section">
        <h1>main blog page</h1>
        <p>:)</p>
      </div>

      {/* footer goes here */}
      </>
  );
}
