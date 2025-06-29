import { useState, useEffect, useCallback } from 'react';
import StartReset from '../components/StartReset';
import { parseDurationToSeconds } from '../utils/getTime';
import PropTypes from 'prop-types';

function Timer({ duration }) {
    const defaultTime = parseDurationToSeconds(duration);

    const [time, setTime] = useState(defaultTime);
    const [isRunning, setIsRunning] = useState(false);
    const [editing, setEditing] = useState(null);
    const [tempValues, setTempValues] = useState(["0", "0", ":", "0", "0", ":", "0", "0"]);
    const [prevValue, setPrevValue] = useState(0);
    const [flash, setFlash] = useState(false);

    const formatTime = (timeInSeconds) => {
        const hours = String(Math.floor(timeInSeconds / 3600)).padStart(2, '0');
        const minutes = String(Math.floor((timeInSeconds % 3600) / 60)).padStart(2, '0');
        const seconds = String(timeInSeconds % 60).padStart(2, '0');
        return `${hours}:${minutes}:${seconds}`;
    };

    function handleStartStop() {
        if (time !== 0) {
            setIsRunning(!isRunning);
        }
    }

    const handleStopFlash = useCallback(() => {
        setFlash(false);
        document.body.classList.remove('flash-red');
    }, []);

    const handleReset = useCallback(() => {
        setIsRunning(false);
        setEditing(null);
        setTime(0);
        handleStopFlash();
        setTempValues(["0", "0", ":", "0", "0", ":", "0", "0"]);
    }, [handleStopFlash]);

    useEffect(() => {
        let timerInterval;
        const formatted = formatTime(time).split(""); // Get formatted time as characters
        setTempValues(formatted);

        // Countdown Mode
        if (isRunning && time > 0) {
            timerInterval = setInterval(() => {
                setTime((prevTime) => Math.max(prevTime - 1, 0));
            }, 1000);
        }

        // When countdown hits 0, flash indefinitely
        if (time === 0 && isRunning) {
            setIsRunning(false); // Stop the countdown
            handleReset();
            setFlash(true);
            document.body.classList.add('flash-red');
        }

        return () => clearInterval(timerInterval);
    }, [isRunning, time, handleReset]);

    // Update the document title when the timer changes
    useEffect(() => {
        document.title = `${formatTime(time)}`;
    }, [time]);

    function handleDigitClick(index) {
        if (editing === index || isRunning || index === 2 || index === 5) {
            return;
        }

        setEditing(index);
        const updatedTempValues = [...tempValues];
        setPrevValue(updatedTempValues[index]);
        updatedTempValues[index] = "";
        setTempValues(updatedTempValues);
    }

    function handleInput(event, index) {
        const value = event.target.value.replace(/[^0-9]/g, "");
        const updatedTempValues = [...tempValues];
        updatedTempValues[index] = value;
        setTempValues(updatedTempValues);
    }

    function handleBlur(index) {
        const updatedTempValues = [...tempValues];

        if (!tempValues[index]) {
            updatedTempValues[index] = prevValue;
            setTempValues(updatedTempValues);
        }

        const hours = Number(updatedTempValues.slice(0, 2).join(""));
        const minutes = Number(updatedTempValues.slice(3, 5).join(""));
        const seconds = Number(updatedTempValues.slice(6, 8).join(""));
        const newTime = hours * 3600 + minutes * 60 + seconds;

        setEditing(null);
        setTime(newTime);
    }

    const formattedTime = formatTime(time).split("");
    const nonZeroIndex = formattedTime.findIndex((char) => char !== '0' && char !== ':');

    return (
        <div className="flex flex-col items-center space-y-4">
            <div className="relative">
                <div className="bg-white border border-gray-300 rounded-xl p-6 shadow-lg">
                    <div className="flex items-center justify-center space-x-3">
                        {formatTime(time).split("").map((char, index) => {
                            const isColon = char === ':';
                            const isActive = !flash && editing === null && index >= nonZeroIndex;
                            const isEditing = editing === index;
                            
                            return (
                                <div
                                    key={index}
                                    className={`
                                        flex items-center justify-center
                                        font-mono font-bold text-8xl
                                        transition-colors duration-200
                                        ${
                                            isColon 
                                                ? 'cursor-default px-3' 
                                                : `
                                                    cursor-pointer rounded-lg
                                                    h-28 w-20
                                                    bg-gray-50 border border-gray-200
                                                    hover:border-gray-400 hover:bg-gray-50
                                                    ${isEditing ? 'ring-2 ring-gray-500 bg-gray-50' : ''}
                                                `
                                        }
                                        ${
                                            flash 
                                                ? 'text-red-300' 
                                                : editing !== null && !isEditing
                                                ? 'text-gray-300'
                                                : isActive
                                                ? 'text-gray-800'
                                                : 'text-gray-400'
                                        }
                                    `}
                                    onClick={() => handleDigitClick(index)}
                                >
                                    {isEditing ? (
                                        <input
                                            type="text"
                                            value={tempValues[index]}
                                            onChange={(event) => handleInput(event, index)}
                                            onBlur={() => handleBlur(index)}
                                            maxLength={1}
                                            autoFocus
                                            className="w-full h-full bg-transparent text-center font-mono font-bold outline-none text-8xl text-gray-800"
                                        />
                                    ) : (
                                        char
                                    )}
                                </div>
                            );
                        })}
                    </div>
                    
                    {flash && (
                        <div className="
                            absolute inset-0 flex items-center justify-center
                            bg-gradient-to-br from-red-500 to-red-600
                            rounded-xl cursor-pointer
                            shadow-2xl border-4 border-red-400
                            animate-pulse
                        " onClick={handleStopFlash}>
                            <div className="text-center text-white">
                                <div className="text-5xl font-bold mb-3 drop-shadow-lg">
                                    ⏰ TIME&apos;S UP!
                                </div>
                                <div className="text-sm opacity-75">
                                    Click anywhere to dismiss
                                </div>
                            </div>
                        </div>
                    )}
                </div>
            </div>

            <StartReset
                handleStartStop={handleStartStop}
                handleReset={handleReset}
                isRunning={isRunning}
            />
        </div>
    );
}

Timer.propTypes = {
    duration: PropTypes.string
};

export default Timer;
