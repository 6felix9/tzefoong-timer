import { useState, useEffect } from 'react';
import '../styles/timer.css';
import StartReset from '../components/StartReset';
import { parseDurationToSeconds } from '../utils/getTime';

function Timer({ duration }) {
    // Calculate default time outside the component logic
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
        if (time != 0) {
            setIsRunning(!isRunning);
        };
    }

    function handleReset() {
        setIsRunning(false);
        setEditing(null);
        setTime(0);
        setTempValues(["0", "0", ":", "0", "0", ":", "0", "0"]);
    }

    useEffect(() => {
        let timerInterval;
      
        // Countdown Mode
        if (isRunning && time > 0) {
            timerInterval = setInterval(() => {
                setTime((prevTime) => Math.max(prevTime - 1, 0));
            }, 1000);
        }
      
        // When countdown hits 0, flash indefinitely
        if (time === 0 && isRunning) {
        
            setIsRunning(false); // Stop the countdown
            setFlash(true);
            handleReset();
            document.body.classList.add('flash-red'); 
            // No setTimeout to remove the class, so it stays indefinitely
        }
      
            return () => clearInterval(timerInterval);
    }, [isRunning, time]);

    function handleDigitClick(index) {
        if (!isRunning && index != 2 && index != 5) {
            setEditing(index);
            const updatedTempValues = [...tempValues];
            setPrevValue(updatedTempValues[index]);
            updatedTempValues[index] = "";
            setTempValues(updatedTempValues);
        }
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

    function handleStopFlash() {
        setFlash(false);
        document.body.classList.remove('flash-red');
    }

    const formattedTime = formatTime(time).split(""); // Split time into characters
    const nonZeroIndex = formattedTime.findIndex((char) => char !== '0' && char !== ':'); // Find first active digit or colon

    return (
        <>
            <main className="timer-overlay">
                <div className="timer-body">
                    {formatTime(time).split("").map((char, index) => 
                    <div 
                        key={index}
                        onClick={() => handleDigitClick(index)}
                        style={{
                            color: (editing || index < nonZeroIndex) ? '#d4d4d4' : 'black', // Grey out until active
                        }}
                    >
                        {(editing === index) ? (
                        <input
                            type="text"
                            value={tempValues[index]}
                            onChange={(event) => handleInput(event, index)}
                            onBlur={() => handleBlur(index)}
                            maxLength={1}
                            autoFocus
                            style={{color: 'black'}}
                        />
                        ) : (
                            char
                        )}
                    </div> 
                    )}
                </div>

                {flash && (
                <div className="flash-overlay" onClick={handleStopFlash}>
                    <p>STOP</p>
                </div>
                )}
                
            </main>

            <StartReset 
                handleStartStop={handleStartStop} 
                handleReset={handleReset} 
                isRunning={isRunning}
            />
        </>
    )
}

export default Timer