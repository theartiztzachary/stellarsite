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

                <div className = "dropdown">
                    <Link to = "/zenithnatir/storiesoverview">
                        <button className = "dropdown_button" id = "stories_link"> Stories </button>
                    </Link>
                    <div className = "dropdown_content">

                    </div>
                </div>

                <div>
                    <Link to = '/zenithnadir/tebithmap'>
                        <button id = 'world_map_button'> World Map </button>
                    </Link>
                </div>

                <div>
                    <Link to = '/zenithnnadir/floraandfauna'>
                        <button id = 'floraandfauna_button'> Flora and Fauna </button>
                    </Link>
                </div>

                <div>
                    <Link to = '/zenithnnadir/charactersearch'>
                        <button id = 'characters_button'> Characters </button>
                    </Link>
                </div>          

            </div>
        </div>
    );
};

export default ZNNHeader;