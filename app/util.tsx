import { useState, useEffect } from 'react';

export function isNumericString(string: string): boolean { //returns TRUE if it is a number, and FALSE if it is not
	if (typeof string !== 'string' || string.trim() === '') {
		return false; //given input is not a string or empty string
	}

	const num = Number(string); //attempts to convert the string to a number

	return !isNaN(num) && isFinite(num); //checks if the conversion was successful and a finite number
};

export function timer(seconds: number) {
    const [time, setTime] = useState(0);
    const [isRunning, setIsRunning] = useState(false);
    const [finished, setFinished] = useState(false);

    useEffect(() => {
        let timerId;
        if (isRunning) {
            timerId = setInterval(() => {
                setTime(prevTime => prevTime + 0.5);
            }, 500);
        }
        if (time >= seconds) {
            setFinished(true);
            setIsRunning(false);
        }
        return () => clearInterval(timerId);
    }, [isRunning, 500]);

    const start = () => setIsRunning(true);
    const pause = () => setIsRunning(false);
    const reset = () => {
        setIsRunning(false);
        setFinished(false);
        setTime(0);
    };

    return { start, pause, reset, isRunning, finished };
};