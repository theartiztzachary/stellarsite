import type { Route } from "./+types/home";
import '../../csssheets/homestyle.css';
import React from 'react';
import { Link } from 'react-router-dom';

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Stellar Sakura - Home" },
    { name: "description", content: "Welcome to React Router!" },
  ];
}

export default function Home() {
  return (
		<>
        {/* beginning of head section */}

        {/* end of head section */}

        {/* beginning of body section */}

            {/* begining of header section */}{" "}
            <div className = "header_section">
                <div className = "title_links">
                    <div className = "title_section">
                        <h1>Stellar Sakura</h1>
                    </div>

                    <div className = "navlinks">
                        {/* Home */}
                        <div>
                            <Link to = '/'>
                                <button id = "home_button"> Home </button>
                            </Link>
                        </div>

                        {/* Blog */}
                        <div>
                            <Link to = "/blog">
                                <button id = "blog_button"> Blog </button>
                            </Link>
                        </div>

                        {/* Stories */}
                        <div className = "dropdown">
                            <button className = "dropdown_button"> Stories </button>
                            <div className = "dropdown_content">
                                <Link to = '/stories/crescendo/overview'> Crescendo </Link>
                            </div>
                        </div>

                        {/* Zenith and Nadir */}{" "}
                        <div className = "dropdown">
                        <button className = "dropdown_button"> Zenith &amp; Nadir </button>
                            <div className = "dropdown_content">
                                <Link to = '/zenithnadir/overview'> Overview </Link>
                            </div>
                        </div>

                        {/* Warframe */}{" "}
                        <div className = "dropdown">
                        <button className = "dropdown_button"> Warframe </button>
                            <div className = "dropdown_content">
                                <Link to = '/warframe/tracker'> Tracker </Link>
                            </div>
                        </div>

                        {/* Mabinogi */}{" "}
                        <div className = "dropdown">
                        <button className = "dropdown_button"> Mabinogi </button>
                            <div className = "dropdown_content">
                                <Link to = '/mabinogi/tracker'> Tracker </Link>
                            </div>
                        </div>

                        {/* Misc */}
                        <div className = "dropdown">
                        <button className = "dropdown_button"> Misc </button>
                            <div className = "dropdown_content">
                                <Link to = '/misc/wordletool'> Wordle Tool </Link>
                            </div>
                        </div>

                    </div>
                </div>

                <div className = "login_area">
                    <p> blep </p>
                    {/* eventual goal will have people using Google's auth to login to their google account to access their drive
			            for object storage */}
                    {/* light background dark text vs dark background light text */}
                </div>

            </div>
            {/* ending of header section */}

            {/* beginning of page section */}{" "}
            <div className = "page_section">

                <div className = "main_section">
                    <p> beep </p>
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
            {/* ending of page section */}{" "}

            {/* beginnig of footer section */}{" "} 
            <div className = "footer_section">
   
            </div>
            {/* ending of footer section */}

        {/* end of body section */}
        </>

	    );
};




