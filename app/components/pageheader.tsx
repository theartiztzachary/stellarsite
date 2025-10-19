import React from 'react';
import { Link } from 'react-router-dom';

const PageHeader = () => {
    return(
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
                    {/*
                    <div className = "dropdown">
                        <button className = "dropdown_button"> Stories </button>
                        <div className = "dropdown_content">
                            <Link to = '/stories/crescendo/overview'> Crescendo </Link>
                        </div>
                    </div>
                    */}

                    {/* Zenith and Nadir */}
                    {/*
                    <div className = "dropdown">
                        <button className = "dropdown_button"> Zenith &amp; Nadir </button>
                        <div className = "dropdown_content">
                            <Link to = '/zenithnadir/overview'> Overview </Link>
                        </div>
                    </div>
                    */}

                    {/* Warframe */}
                    {/*
                    <div className = "dropdown">
                    <button className = "dropdown_button"> Warframe </button>
                        <div className = "dropdown_content">
                            <Link to = '/warframe/tracker'> Tracker </Link>
                        </div>
                    </div>
                    */}

                    {/* Mabinogi */}
                    {/*
                    <div className = "dropdown">
                        <button className = "dropdown_button"> Mabinogi </button>
                        <div className = "dropdown_content">
                            <Link to = '/mabinogi/tracker'> Tracker </Link>
                        </div>
                    </div>
                    /*}

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
                <p> TBD </p>
                {/* eventual goal will have people using Google's auth to login to their google account to access their drive
			        for object storage */}
                {/* light background dark text vs dark background light text */}
             </div>

        </div>
    );
};

export default PageHeader;

