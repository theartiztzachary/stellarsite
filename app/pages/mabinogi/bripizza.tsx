//eventually add user volume controls xd

import React, { useState, useEffect, useRef } from 'react';
import type { Route } from './+types/home';
import { Link } from 'react-router-dom';

import '../../../csssheets/bripizzastyle.css';

import PageHeader from '../../components/pageheader.tsx';
import '../../../csssheets/pageheader.css';
//import PageFooter from '../../components/pagefooter.tsx';
//import '../../../csssheets/pagefooter.css';

import { audioPlayer } from '../../util/audioPlayer.tsx';
import pizzaTime from '../../../sounds/pizza-time-theme.mp3';
import beep from '../../../sounds/price-is-right-wheel-beep.mp3';

import briPizzaLegend from '../../../images/bripizza/bripizzalegend.png';
import briPizza11 from '../../../images/bripizza/bripizza11.png';
import briPizza12 from '../../../images/bripizza/bripizza12.png';
import briPizza13 from '../../../images/bripizza/bripizza13.png';
import briPizza14 from '../../../images/bripizza/bripizza14.png';
import briPizza15 from '../../../images/bripizza/bripizza15.png';
import briPizza16 from '../../../images/bripizza/bripizza16.png';
import briPizza17 from '../../../images/bripizza/bripizza17.png';
import briPizza18 from '../../../images/bripizza/bripizza18.png';
import briPizza19 from '../../../images/bripizza/bripizza19.png';
import briPizza110 from '../../../images/bripizza/bripizza110.png';
import briPizza21 from '../../../images/bripizza/bripizza21.png';
import briPizza22 from '../../../images/bripizza/bripizza22.png';
import briPizza23 from '../../../images/bripizza/bripizza23.png';
import briPizza24 from '../../../images/bripizza/bripizza24.png';
import briPizza25 from '../../../images/bripizza/bripizza25.png';
import briPizza26 from '../../../images/bripizza/bripizza26.png';
import briPizza27 from '../../../images/bripizza/bripizza27.png';
import briPizza28 from '../../../images/bripizza/bripizza28.png';
import briPizza29 from '../../../images/bripizza/bripizza29.png';
import briPizza210 from '../../../images/bripizza/bripizza210.png';

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
    const [currentSpotIMG, setCurrentSpotIMG] = useState(null);
    const [nextSpot, setNextSpot] = useState('Click the appropriate button to begin.')
    const [nextSpotIMG, setNextSpotIMG] = useState(null);
    const { playSound: playPizzaTime, stopSound: stopPizzaTime, setVolume: setPizzaTimeVolume } = audioPlayer(pizzaTime);
    const { playSound: playBeep } = audioPlayer(beep);

    //useEffects//
    useEffect(() => {
        if (spotSequence > 0) {
            //console.log('Spot sequence is: ' + spotSequence);
            switch (spotSequence) {
                case 1:
                    //console.log('One!');
                    if (currentSequence == 1) {
                        setCurrentSpot('SOUTH');
                        setCurrentSpotIMG(briPizza11);
                        setNextSpot('SOUTH');
                        setNextSpotIMG(briPizza12);
                    } else if (currentSequence == 2) {
                        setCurrentSpot('NORTH');
                        setCurrentSpotIMG(briPizza21);
                        setNextSpot('SOUTHEAST');
                        setNextSpotIMG(briPizza22);
                    }
                    startTimer();
                    break;
                case 2:
                    //console.log('Two!');
                    playBeep();
                    if (currentSequence == 1) {
                        setCurrentSpot('SOUTH');
                        setCurrentSpotIMG(briPizza12);
                        setNextSpot('WEST');
                        setNextSpotIMG(briPizza13);
                    } else if (currentSequence == 2) {
                        setCurrentSpot('SOUTHEAST');
                        setCurrentSpotIMG(briPizza22);
                        setNextSpot('SOUTHWEST');
                        setNextSpotIMG(briPizza23);
                    }
                    break;
                case 3:
                    //console.log('Three!');
                    playBeep();
                    if (currentSequence == 1) {
                        setCurrentSpot('WEST');
                        setCurrentSpotIMG(briPizza13);
                        setNextSpot('NORTH');
                        setNextSpotIMG(briPizza14)
                    } else if (currentSequence == 2) {
                        setCurrentSpot('SOUTHWEST');
                        setCurrentSpotIMG(briPizza23);
                        setNextSpot('NORTH');
                        setNextSpotIMG(briPizza24);
                    }
                    break;
                case 4:
                    //console.log('Four!');
                    playBeep();
                    if (currentSequence == 1) {
                        setCurrentSpot('NORTH');
                        setCurrentSpotIMG(briPizza14);
                        setNextSpot('EAST');
                        setNextSpotIMG(briPizza15);
                    } else if (currentSequence == 2) {
                        setCurrentSpot('NORTH');
                        setCurrentSpotIMG(briPizza24);
                        setNextSpot('SOUTH');
                        setNextSpotIMG(briPizza25);
                    }
                    break;
                case 5:
                    //console.log('Five!');
                    playBeep();
                    if (currentSequence == 1) {
                        setCurrentSpot('EAST');
                        setCurrentSpotIMG(briPizza15);
                        setNextSpot('SOUTH');
                        setNextSpotIMG(briPizza16);
                    } else if (currentSequence == 2) {
                        setCurrentSpot('SOUTH');
                        setCurrentSpotIMG(briPizza25);
                        setNextSpot('NORTHEAST');
                        setNextSpotIMG(briPizza26);
                    }
                    break;
                case 6:
                    //console.log('Six!');
                    playBeep();
                    if (currentSequence == 1) {
                        setCurrentSpot('SOUTH');
                        setCurrentSpotIMG(briPizza16);
                        setNextSpot('EAST');
                        setNextSpotIMG(briPizza17);
                    } else if (currentSequence == 2) {
                        setCurrentSpot('NORTHEAST');
                        setCurrentSpotIMG(briPizza26);
                        setNextSpot('NORTH');
                        setNextSpotIMG(briPizza27);
                    }
                    break;
                case 7:
                    //console.log('Seven!');
                    playBeep();
                    if (currentSequence == 1) {
                        setCurrentSpot('EAST');
                        setCurrentSpotIMG(briPizza17);
                        setNextSpot('NORTHEAST');
                        setNextSpotIMG(briPizza18);
                    } else if (currentSequence == 2) {
                        setCurrentSpot('NORTH');
                        setCurrentSpotIMG(briPizza27)
                        setNextSpot('SOUTH');
                        setNextSpotIMG(briPizza28);
                    }
                    break;
                case 8:
                    //console.log('Eight!');
                    playBeep();
                    if (currentSequence == 1) {
                        setCurrentSpot('NORTHEAST');
                        setCurrentSpotIMG(briPizza18);
                        setNextSpot('NORTH');
                        setNextSpotIMG(briPizza19);
                    } else if (currentSequence == 2) {
                        setCurrentSpot('SOUTH');
                        setCurrentSpotIMG(briPizza28);
                        setNextSpot('WEST');
                        setNextSpotIMG(briPizza29);
                    }
                    break;
                case 9:
                    //console.log('Nine!');
                    playBeep();
                    if (currentSequence == 1) {
                        setCurrentSpot('NORTH');
                        setCurrentSpotIMG(briPizza19);
                        setNextSpot('NORTH');
                        setNextSpotIMG(briPizza110);
                    } else if (currentSequence == 2) {
                        setCurrentSpot('WEST');
                        setCurrentSpotIMG(briPizza29);
                        setNextSpot('NORTH');
                        setNextSpotIMG(briPizza210);
                    }
                    break;
                case 10:
                    //console.log('Ten!');
                    playBeep();
                    if (currentSequence == 1) {
                        setCurrentSpot('NORTH');
                        setCurrentSpotIMG(briPizza110);
                        setNextSpot('DONE!');
                        setNextSpotIMG(null);
                    } else if (currentSequence == 2) {
                        setCurrentSpot('NORTH');
                        setCurrentSpotIMG(briPizza210);
                        setNextSpot('DONE!');
                        setNextSpotIMG(null);
                    }
                    break;
                default:
                    //reset stuff
                    //console.log('Done!');
                    setCurrentSpot('Click the appropriate button to begin.');
                    setCurrentSpotIMG(null);
                    setNextSpot('Click the appropriate button to begin.');
                    setNextSpotIMG(null);
                    stopTimer();
                    break;
            };
        };
    }, [spotSequence]);

    //interval clean up on unmount
    useEffect(() => {
        //console.log('This should also happen on mount yea?');
        setPizzaTimeVolume(.02);
        return () => {
            if (intervalReference.current) {
                clearInterval(intervalReference.current);
            }
        };
    }, []);

    //functions//
    function startTimer() {
        //console.log('Timer has started...');
        playPizzaTime();
        intervalReference.current = setInterval(() => {
            setSpotSequence(prevCount => prevCount + 1);
        }, 2500);
    };

    function stopTimer() {
        //console.log('Timer has stopped...');
        stopPizzaTime();
        if (intervalReference.current) {
            clearInterval(intervalReference.current);
            intervalReference.current = null;
        }
        setSpotSequence(15);
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
                    //console.log('Click! 55%');
                    setCurrentSequence(1);
                    setSpotSequence(1);
                }}>
                55% Pizza
            </button>
            <button onClick={() => {
                    //console.log('Click! 15%');
                    setCurrentSequence(2);
                    setSpotSequence(1);
                }}>
                15% Pizza
            </button>
            <button onClick={stopTimer}> Reset Sequence </button>

            <br />
            <br />
            <img src={briPizzaLegend} />

            <div id = 'spot_tracker'>
                <div id = 'current_spot' className = 'tracker_div'>
                    <h2>CURRENT SPOT:</h2>
                    <p>{currentSpot}</p>
                    <img src = {currentSpotIMG} />
                </div>

                <div id = 'next_spot' className = 'tracker_div'>
                    <h2>NEXT SPOT:</h2>
                    <p>{nextSpot}</p>
                    <img src = {nextSpotIMG} />
                </div>
            </div>
		</div>
		</>
	);
}