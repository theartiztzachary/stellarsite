import { Link } from 'react-router-dom';

const ZNNHeader = () => {
    return(
        <div className = 'znnheader'>
            <div className = 'znnnavlinks'>
                <div>
                    <Link to = '/zenithnadir/overview'>
                        <button id = 'znnhome_button'> Z&N Home </button>
                    </Link>
                </div>

                <div className = "znndropdown">
                    <Link to = "/zenithnadir/stories/overview">
                        <button className = "dropdown_button" id = "stories_link"> Stories </button>
                    </Link>
                    <div className = "znndropdown_content">
                        <Link to = '/zenithnadir/stories/thezenithtree' id = 'thezenithtree_link'> The Zenith Tree </Link>
                    </div>
                </div>

                <div>
                    <Link to = '/zenithnadir/tebithmap'>
                        <button id = 'world_map_button'> World Map </button>
                    </Link>
                </div>

                <div>
                    <Link to = '/zenithnadir/floraandfauna'>
                        <button id = 'floraandfauna_button'> Flora and Fauna </button>
                    </Link>
                </div>

                <div>
                    <Link to = '/zenithnadir/charactersearch'>
                        <button id = 'characters_button'> Characters </button>
                    </Link>
                </div>          

            </div>
        </div>
    );
};

export default ZNNHeader;