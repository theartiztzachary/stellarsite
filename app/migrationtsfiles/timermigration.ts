import { useState, useEffect } from 'react';

function timer(seconds: number) {
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