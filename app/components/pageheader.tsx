//need to better align navigation links with the center of the window at some point but it's working for now so
//getting 'Cross-Origin-Opener-Policy policy would block the window.closed call.' error when logging in... the flow appears to be working fine, need more research

import React, { useState, useEffect } from 'react';
import ReactDom from 'react-dom';
import axios from 'axios';
import { Link } from 'react-router-dom';
import { useGoogleLogin, googleLogout, GoogleOAuthProvider } from '@react-oauth/google';

//consts and variables//

//functions//

//internal components
const LoginApp = () => {
    const [currentProfile, setCurrentProfile] = useState(); 

    const [currentUser, setCurrentUser] = useState();

    const verifyUser = (jtwCode) => {
        //import.meta.env.VITE_REACT_APP_BACKEND_URI/googleauth/verifytoken/jtwCode
    }

    const userLogin = useGoogleLogin({
        onSuccess: response => {
            verifyUser(response.code);
        },
        flow: 'auth-code',
    });

    const userLogout = () => {
        googleLogout;
        //some other cleanup
    }

    return(
        <div>
            {currentUser.access_token ? (
                <div className = 'is_logged_in'>
                    <p>Logged In As: {}</p>
                    <button onClick = {userLogout}> Log Out </button>
                </div>
            ) : (
                <div className = 'to_log_in'>
                    <p>Log In with Google Auth</p>
                    <button onClick = {userLogin}> Log In </button>
                </div>
            )}
            <Link to = '/privacystatement'> Privacy Statement </Link>
        </div>
    ); //end of LoginApp return
}; //end of LoginApp component

//pageHeaer export//
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
                            <Link to = '/stories/copper_eye/overview'> Copper Eye </Link>
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
                    <div className = "dropdown">
                        <button className = "dropdown_button"> Mabinogi </button>
                        <div className = "dropdown_content">
                            {/* <Link to = '/mabinogi/tracker'> Tracker </Link> */}
                            <Link to = '/mabinogi/bripizza'> Bri G1 Pizza </Link>
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
                <GoogleOAuthProvider clientId = {import.meta.env.VITE_REACT_APP_GOOGLE_AUTH_CLIENT_ID}>
                    <React.StrictMode>
                        <LoginApp />
                    </React.StrictMode>
                </GoogleOAuthProvider>
             </div>

        </div>
    );
};

export default PageHeader;

