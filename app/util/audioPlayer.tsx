import { useRef, useEffect } from 'react';

export const audioPlayer = (audioSource) => {
    const soundRef = useRef();
    var hasLoaded = false;

    useEffect(() => {
        if (!hasLoaded) {
            soundRef.current = new Audio(audioSource);
            soundRef.current.volume = 0.5; //default half volume
        };
    }, []);

    const playSound = () => {
        soundRef.current.play();
    };

    const pauseSound = () => {
        soundRef.current.pause();
    };

    const stopSound = () => {
        soundRef.current.pause();
        soundRef.current.currentTime = 0;
    };

    const setVolume = (volume) => {
        soundRef.current.volume = volume;
    };

    return {
        playSound,
        pauseSound,
        stopSound,
        setVolume,
    };
};