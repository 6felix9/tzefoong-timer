import { useState, useEffect } from 'react'
import '../styles/timer.css'

function Timer({func}) {

    const [time, setTime] = useState(0);
    const [isRunning, setIsRunning] = useState(false);
    const [editing, setEditing] = useState(null);
    const [tempValues, setTempValues] = useState(["0", "0", ":", "0", "0", ":", "0", "0"]);
    const [prevValue, setPrevValue] = useState(0);
    const [flash, setFlash] = useState(false);

    function handleStartStop() {
        setIsRunning(!isRunning);
    }

    function handleReset() {
        setIsRunning(false);
        setEditing(null);
        setTime(0);
        setTempValues(["0", "0", ":", "0", "0", ":", "0", "0"]);
    }

    useEffect(() => {
        let timerInterval;
      
        // Stopwatch Mode
        if (func === 'stopwatch' && isRunning) {
            timerInterval = setInterval(() => {
                setTime((prevTime) => prevTime + 1);
            }, 1000);
        }
      
        // Countdown Mode
        if (func === 'timer' && isRunning && time > 0) {
            timerInterval = setInterval(() => {
                setTime((prevTime) => Math.max(prevTime - 1, 0));
            }, 1000);
        }
      
        // When countdown hits 0, flash indefinitely
        if (func === 'timer' && time === 0 && isRunning) {
        
            setIsRunning(false); // Stop the countdown
            setFlash(true);
            document.body.classList.add('flash-red'); 
            // No setTimeout to remove the class, so it stays indefinitely
        }
      
            return () => clearInterval(timerInterval);
    }, [isRunning, func, time]);
      
      
    

    const formatTime = (timeInSeconds) => {
        const hours = String(Math.floor(timeInSeconds / 3600)).padStart(2, '0');
        const minutes = String(Math.floor((timeInSeconds % 3600) / 60)).padStart(2, '0');
        const seconds = String(timeInSeconds % 60).padStart(2, '0');
        return `${hours}:${minutes}:${seconds}`;
    };

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

    return (
        <>
            <main className="timer-overlay">
                <div className="timer-body">
                    {formatTime(time).split("").map((num, index) => 
                    <div 
                        key={index}
                        onClick={() => handleDigitClick(index)}
                    >
                        {(editing === index && func === 'timer') ? (
                        <input
                            type="text"
                            value={tempValues[index]}
                            onChange={(event) => handleInput(event, index)}
                            onBlur={() => handleBlur(index)}
                            maxLength={1}
                            autoFocus
                        />
                        ) : (
                            num
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

            <section className="button-body">
                <button onClick={handleStartStop}>
                    {isRunning ? 'Stop' : 'Start'}
                </button>
                <button onClick={handleReset}>Reset</button>
            </section>
        </>
    )
}

export default Timer