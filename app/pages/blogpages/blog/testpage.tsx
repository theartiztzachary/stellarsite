import React from 'react';
import type { Route } from './+types/home';

import '../../../../csssheets/bloghomestyle.css';

import PageHeader from '../../../components/pageheader.tsx';
import '../../../../csssheets/pageheader.css';
//import PageFooter from '../../components/pagefooter.tsx';
//import '../../../csssheets/pagefooter.css';
import BlogHeader from '../../../components/blogheader.tsx';
import '../../../../csssheets/blogheaderstyle.css';

export function meta({}: Route.MetaArgs) {
    return [
        { title: "Stellar Sakura - Blog" },
        {name: "description", content: "beep" },
    ];
};

//tags//
export const name = 'Test Page';
export const tags = ['test'];
export const id = 'testpage';
export const routelink = '/blog/testpage';
export const description = 'Test description.'

export default function TestPage() {

//beginning of "HTML" code//
  return (
      <>
      <PageHeader />
      <BlogHeader />

      <div className = "page_section">
        <h1>this is a test page</h1>
        <p>:)</p>
      </div>

      {/* footer goes here */}
      </>
  );
}