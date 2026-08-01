import { Link } from 'react-router-dom';

const PageHeader = () => {
    return(
        <div className = "header_section">
            <div className = "title_links">
                <div className = "title_section">
                    <h1>Sakura Fox Fyre Dreams</h1>
                    <img src = '../../../images/eepysff.png' id = "dreams_logo" />
                </div>

                <div className = "navlinks">
                    {/* Home */}
                    <div>
                        <Link to = '/'>
                            <button id = "home_button"> Home </button>
                        </Link>
                    </div>

                    {/* Blog */}
                    {/*
                    <div>
                        <Link to = "/blog">
                            <button id = "blog_button"> Blog </button>
                        </Link>
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

                    {/* Portfolio */}
                    <div className = "dropdown">
                        <Link to = '/portfolio'>
                            <button className = "dropdown_button" id = "portfolio_link"> Portfolio </button>
                        </Link>
                        <div className = "dropdown_content">
                            <Link to = '/portfolio/gamejams/overview' id = "gamejams_link"> Game Jams </Link>
                            <Link to = '/portfolio/artfight2026' id = "artfight_link"> Last ArtFight </Link>
                            <Link to = '/zenithnadir/overview' id = "znoverview_link"> Zenith and Nadir </Link>
                        </div>
                    </div>

                    {/* Game Tools */}
                    {/*
                    <div className = "dropdpown">
                        <button className = "dropdown_button" id = "gametools_button"> Game Tools </button>
                        <div className = "dropdown_content">
                            <Link to = '/gametools/bripizza'> Bri G1 Pizza </Link>
                            <Link to = '/gametools/mabitracker'> Mabi Tracker </Link>
                            <Link to = '/gametools/wftracker'> Warframe Tracker </Link>
                            <Link to = '/gametools/hsrstatcalc'> HSR Stat Calculator </link>
                        </div>
                    </div>
                    */}

                    {/* Shop */}
                    {/* <div>
                        <Link to = '/shop'>
                            <button id = "shop"> Shop </button>
                        </Link>
                    </div> */}

                    {/* Misc */}
                    <div className = "dropdown">
                        <button className = "dropdown_button"> Misc </button>
                        <div className = "dropdown_content">
                            <Link to = '/misc/wordletool' id = "wordletool_link"> Wordle Tool </Link> 
                        </div>
                    </div>

                    {/* External Links */}
                    <div className = "dropdown">
                        <button className = "dropdown_button"> External Links </button>
                        <div className = "dropdown_content">
                            <Link to = {{ pathname: 'https://www.instagram.com/sakurafoxfyre'}} target = '_blank' id = "instagram_link">
                                Instagram
                            </Link>
                            {/* <Link to = {{ pathname: 'https://www.youtube.com/@sakurafoxfyre'}} target = '_blank' id = "youtube_link">
                                YouTube
                            </Link> */}
                            {/* <Link to = {{ pathname: 'bluesky'}} target = '_blank' id = "bluesky_link">
                                Bluesky
                            </Link> */}
                            {/*<Link to = {{ pathname: 'itch.io'}} target = '_blank' id = "itchio_link">
                                Itch.io
                            </Link>*/}
                            {/*<Link to = {{ pathname: 'tiktok'}} target = '_blank' id = "tiktok_link">
                                TikTok
                            </Link>*/}
                            {/*<Link to = {{ pathname: 'twitch'}} target = '_blank' id = "twitch_link">
                                Twitch
                            </Link>*/}
                            {/*<Link to = {{ pathname: 'redbubble'}} target = '_blank' id = "redbubble_link">
                                Redbubble
                            </Link>*/}
                            {/*<Link to = {{ pathname: 'https://artfight.net/~sakurafoxfyre'}} target = '_blank' id = "artfight_link">
                                ArtFight
                            </Link>*/}
                        </div>
                    </div>

                </div>
            </div>

            <div className = "login_area">
                <p> </p>
                {/* eventual goal will have people using Google's auth to login to their google account to access their drive
			        for object storage */}
                {/* light background dark text vs dark background light text */}
             </div>

        </div>
    );
};

export default PageHeader;

