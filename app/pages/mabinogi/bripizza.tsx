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
    const [currentSpot, setCurrentSpot] = useState('Click the appropriate button to begin.')
    var currentSpotIMG;
    const [nextSpot, setNextSpot] = useState('Click the appropriate button to begin.')
    var nextSpotIMG;

    //functions//
    async function beginSequenceOne() {
        var itsPizzaTime = true;
        var spotSequence = 1;
        console.log('PIZZA TIME!')

        while (itsPizzaTime) {
            //pizzaTimeSong();
            switch (spotSequence) {
                case 1:
                    console.log('One!');
                    spotSequence++;
                    setCurrentSpot('SOUTH');
                    setNextSpot('SOUTH');
                    break;
                case 2:
                    console.log('Two!');
                    spotSequence++;
                    setCurrentSpot('SOUTH');
                    setNextSpot('WEST');
                    break;
                case 3:
                    console.log('Three!');
                    spotSequence++;
                    setCurrentSpot('WEST');
                    setNextSpot('NORTH');
                    break;
                case 4:
                    console.log('Four!');
                    spotSequence++;
                    setCurrentSpot('NORTH');
                    setNextSpot('EAST');
                    break;
                case 5:
                    console.log('Five!');
                    spotSequence++;
                    setCurrentSpot('EAST');
                    setNextSpot('SOUTH');
                    break;
                case 6:
                    console.log('Six!');
                    spotSequence++;
                    setCurrentSpot('SOUTH');
                    setNextSpot('WEST');
                    break;
                case 7:
                    console.log('Seven!');
                    spotSequence++;
                    setCurrentSpot('WEST');
                    setNextSpot('NORTHWEST');
                    break;
                case 8:
                    console.log('Eight!');
                    spotSequence++;
                    setCurrentSpot('NORTHWEST');
                    setNextSpot('NORTH');
                    break;
                case 9:
                    console.log('Nine!');
                    spotSequence++;
                    setCurrentSpot('NORTH');
                    setNextSpot('NORTH');
                    break;
                case 10:
                    console.log('Ten!');
                    itsPizzaTime = false;
                    setCurrentSpot('NORTH');
                    setNextSpot('DONE!');
                    break;
                default: //how
                    console.log('...how');
            };
        };
        //stopPizzaTime();
        console.log('Pizza time is over.');
        setCurrentSpot('Click the appropriate button to begin.');
        setNextSpot('Click the appropriate button to begin.');
    };

    async function beginSequenceTwo() {

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
            <button onClick = {beginSequenceOne}> 55% Pizza </button>
            <button onClick = {beginSequenceTwo}> 15% Pizza </button>
            <button onClick={reset}> Reset Timer </button>

            <h2>CURRENT SPOT:</h2>
            <p>{currentSpot}</p>

            <h2>NEXT SPOT:</h2>
            <p>{nextSpot}</p>
		</div>
		</>
	);
}