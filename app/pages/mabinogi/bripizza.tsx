import React, { useState, useEffect, useRef } from 'react';
import type { Route } from './+types/home';
import { Link } from 'react-router-dom';

import '../../../csssheets/bripizzastyle.css';

import PageHeader from '../../components/pageheader.tsx';
import '../../../csssheets/pageheader.css';
//import PageFooter from '../../components/pagefooter.tsx';
//import '../../../csssheets/pagefooter.css';

import pizzaTime from '../../../sounds/pizza-time-theme.mp3';
import beep from '../../../sounds/price-is-right-wheel-beep.mp3';

export function meta({ }: Route.MetaArgs) {
	return [
		{ title: "Stellar Sakura - Pizza Helper" },
		{ name: "description", content: "beep" },
	];
};

export default function BriPizza() {
    //constants and variables//
    const intervalReference = useRef(null);
    const [currentSequence, setCurrentSequence] = useState(0); //1 is 55%, 2 is 15%
    const [spotSequence, setSpotSequence] = useState(0);
    const [currentSpot, setCurrentSpot] = useState('Click the appropriate button to begin.')
    var currentSpotIMG;
    const [nextSpot, setNextSpot] = useState('Click the appropriate button to begin.')
    var nextSpotIMG;

    //useEffects//
    useEffect(() => {
        if (spotSequence > 0) {
            //console.log('Spot sequence is: ' + spotSequence);
            switch (spotSequence) {
                case 1:
                    //console.log('One!');
                    if (currentSequence == 1) {
                        setCurrentSpot('SOUTH');
                        //set current spot IMG
                        setNextSpot('SOUTH');
                        //set next spot IMG
                    } else if (currentSequence == 2) {
                        setCurrentSpot('NORTH');
                        //set current spot IMG
                        setNextSpot('SOUTHEAST');
                        //set next spot IMG
                    }
                    startTimer();
                    break;
                case 2:
                    //console.log('Two!');
                    if (currentSequence == 1) {
                        setCurrentSpot('SOUTH');
                        //set current spot IMG
                        setNextSpot('WEST');
                        //set next spot IMG
                    } else if (currentSequence == 2) {
                        setCurrentSpot('SOUTHEAST');
                        //set current spot IMG
                        setNextSpot('SOUTHWEST');
                        //set next spot IMG
                    }
                    break;
                case 3:
                    //console.log('Three!');
                    if (currentSequence == 1) {
                        setCurrentSpot('WEST');
                        //set current spot IMG
                        setNextSpot('NORTH');
                        //set next spot IMG
                    } else if (currentSequence == 2) {
                        setCurrentSpot('SOUTHWEST');
                        //set current spot IMG
                        setNextSpot('NORTH');
                        //set next spot IMG
                    }
                    break;
                case 4:
                    //console.log('Four!');
                    if (currentSequence == 1) {
                        setCurrentSpot('NORTH');
                        //set current spot IMG
                        setNextSpot('EAST');
                        //set next spot IMG
                    } else if (currentSequence == 2) {
                        setCurrentSpot('NORTH');
                        //set current spot IMG
                        setNextSpot('SOUTH');
                        //set next spot IMG
                    }
                    break;
                case 5:
                    //console.log('Five!');
                    if (currentSequence == 1) {
                        setCurrentSpot('EAST');
                        //set current spot IMG
                        setNextSpot('SOUTH');
                        //set next spot IMG
                    } else if (currentSequence == 2) {
                        setCurrentSpot('SOUTH');
                        //set current spot IMG
                        setNextSpot('NORTHEAST');
                        //set next spot IMG
                    }
                    break;
                case 6:
                    //console.log('Six!');
                    if (currentSequence == 1) {
                        setCurrentSpot('SOUTH');
                        //set current spot IMG
                        setNextSpot('EAST');
                        //set next spot IMG
                    } else if (currentSequence == 2) {
                        setCurrentSpot('NORTHEAST');
                        //set current spot IMG
                        setNextSpot('NORTH');
                        //set next spot IMG
                    }
                    break;
                case 7:
                    //console.log('Seven!');
                    if (currentSequence == 1) {
                        setCurrentSpot('EAST');
                        //set current spot IMG
                        setNextSpot('NORTHEAST');
                        //set next spot IMG
                    } else if (currentSequence == 2) {
                        setCurrentSpot('NORTH');
                        //set current spot IMG
                        setNextSpot('SOUTH');
                        //set next spot IMG
                    }
                    break;
                case 8:
                    //console.log('Eight!');
                    if (currentSequence == 1) {
                        setCurrentSpot('NORTHEAST');
                        //set current spot IMG
                        setNextSpot('NORTH');
                        //set next spot IMG
                    } else if (currentSequence == 2) {
                        setCurrentSpot('SOUTH');
                        //set current spot IMG
                        setNextSpot('WEST');
                        //set next spot IMG
                    }
                    break;
                case 9:
                    //console.log('Nine!');
                    if (currentSequence == 1) {
                        setCurrentSpot('NORTH');
                        //set current spot IMG
                        setNextSpot('NORTH');
                        //set next spot IMG
                    } else if (currentSequence == 2) {
                        setCurrentSpot('WEST');
                        //set current spot IMG
                        setNextSpot('NORTH');
                        //set next spot IMG
                    }
                    break;
                case 10:
                    //console.log('Ten!');
                    if (currentSequence == 1) {
                        setCurrentSpot('NORTH');
                        //set current spot IMG
                        setNextSpot('DONE!');
                        //set next spot IMG
                    } else if (currentSequence == 2) {
                        setCurrentSpot('NORTH');
                        //set current spot IMG
                        setNextSpot('DONE!');
                        //set next spot IMG
                    }
                    break;
                default:
                    //reset stuff
                    //console.log('Done!');
                    setCurrentSpot('Click the appropriate button to begin.');
                    setNextSpot('Click the appropriate button to begin.');
                    stopTimer();
                    break;
            };
        };
    }, [spotSequence]);

    //interval clean up on unmount
    useEffect(() => {
        return () => {
            if (intervalReference.current) {
                clearInterval(intervalReference.current);
            }
        };
    }, []);

    //functions//
    function startTimer() {
        console.log('Timer has started...');
        intervalReference.current = setInterval(() => {
            setSpotSequence(prevCount => prevCount + 1);
        }, 2500);
    };

    function stopTimer() {
        console.log('Timer has stopped...');
        if (intervalReference.current) {
            clearInterval(intervalReference.current);
            intervalReference.current = null;
        }
        setSpotSequence(0);
    }

	return ( //'HTML' code
		<>
        <PageHeader />

		<div>
			<h1>Bri Lieth Gate One: Pizza Time</h1>
			<p>
				rocks, dudes, and pizza hell yeah	
            </p>
            <Link to={{ pathname: 'https://di-wen25.github.io/Mabinogi-Bri-Leith-Practice-Tool/' }} target='_blank'>You can also directly practice using this site!</Link>
            <br />
            <br />
            <button onClick={() => {
                    console.log('Click! 55%');
                    setCurrentSequence(1);
                    setSpotSequence(1);
                }}>
                55% Pizza
            </button>
            <button onClick={() => {
                    console.log('Click! 15%');
                    setCurrentSequence(2);
                    setSpotSequence(1);
                }}>
                15% Pizza
            </button>
            <button onClick={stopTimer}> Reset Sequence </button>

            <h2>CURRENT SPOT:</h2>
            <p>{currentSpot}</p>

            <h2>NEXT SPOT:</h2>
            <p>{nextSpot}</p>
		</div>
		</>
	);
}