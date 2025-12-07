import React, { useState, useEffect } from 'react';
import type { Route } from './+types/home';
import { Link } from 'react-router-dom';
import { timer } from '../../util.tsx';

import '../../../csssheets/bripizzastyle.css';

import PageHeader from '../../components/pageheader.tsx';
import '../../../csssheets/pageheader.css';
//import PageFooter from '../../components/pagefooter.tsx';
//import '../../../csssheets/pagefooter.css';

import useSound from 'use-sound';
import pizzaTime from '../../../sounds/pizza-time-theme.mp3';
import beep from '../../../sounds/price-is-right-wheel-beep.mp3';

export function meta({ }: Route.MetaArgs) {
	return [
		{ title: "Stellar Sakura - Pizza Helper" },
		{ name: "description", content: "beep" },
	];
};

// fist pizza: ~1 sec setup (5:09 - 5:10), ~2 seconds until first spot starts filling (5:10 - 5:12),
// ~4 seconds for second, third, ~3 for the fourth, ~4 for fifth, sixth, ~3 for seventh... 

export default function BriPizza() {
    //sound constants//
    const [pizzaTimeSong, { stopPizzaTime }] = useSound(pizzaTime, {volume: 0.25,});
    const [beepSound] = useSound(beep);

    //constants and variables//
    const { start, pause, reset, isRunning, finished } = timer(3.5);
    const [currentSequence, setCurrentSequence] = useState(1); //1 is 55%, 2 is 15%
    const [spotSequence, setSpotSequence] = useState(1); //1 - 10
    const [currentSpot, setCurrentSpot] = useState('Click the appropriate button to begin.')
    var currentSpotIMG;
    const [nextSpot, setNextSpot] = useState('Click the appropriate button to begin.')
    var nextSpotIMG;

    //when timer hits the end and returns "true", increment a the 'state' -> a UseEffect hooked into the state
    //UseEffect + timer... so probably need to redo how this is implemented

    //useEffects//
    useEffect(() => {
        if (isRunning) {
            switch (spotSequence) {
                case 1:
                    console.log('One!');
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
                    break;
                case 2:
                    console.log('Two!');
                    beepSound();
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
                    console.log('Three!');
                    beepSound();
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
                    console.log('Four!');
                    beepSound();
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
                    console.log('Five!');
                    beepSound();
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
                    console.log('Six!');
                    beepSound();
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
                    console.log('Seven!');
                    beepSound();
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
                    console.log('Eight!');
                    beepSound();
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
                    console.log('Nine!');
                    beepSound();
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
                    console.log('Ten!');
                    beepSound();
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
                default: //how
                    console.log('...how');
                    break;
            };
        };
    }, [spotSequence]);

    //functions//
    async function pizzaTimeSequence() {
        //pizzaTimeSong();
        console.log('PIZZA TIME!')
        var itsPizzaTime = true;

        while (itsPizzaTime) {
            console.log('Pizza time is happening.');
            if (finished) {
                console.log('Pizza time finished!');
                if (spotSequence != 10) {
                    setSpotSequence(prevCount => prevCount + 1);
                } else {
                    itsPizzaTime = false;
                    setSpotSequence(1);
                }
                
            } else if (!isRunning) {
                console.log('Start pizza time.');
                start;
            }
        };
        //stopPizzaTime();
        console.log('Pizza time is over.');
        setCurrentSpot('Click the appropriate button to begin.');
        setNextSpot('Click the appropriate button to begin.');
    };

    function resetSequence() {
        reset;
        setSpotSequence(1);
    };

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
                    pizzaTimeSequence();
                    setCurrentSequence(1);
                }}>
                55% Pizza
            </button>
            <button onClick={() => {
                    pizzaTimeSequence();
                    setCurrentSequence(2);
                }}>
                15% Pizza
            </button>
            <button onClick={resetSequence}> Reset Sequence </button>

            <h2>CURRENT SPOT:</h2>
            <p>{currentSpot}</p>

            <h2>NEXT SPOT:</h2>
            <p>{nextSpot}</p>
		</div>
		</>
	);
}