import { useState, useEffect } from 'react'
import StartReset from '../components/StartReset'


function Stopwatch() {

    const [time, setTime] = useState(0);
    const [isRunning, setIsRunning] = useState(false);

    const formatTime = (timeInSeconds) => {
        const hours = String(Math.floor(timeInSeconds / 3600)).padStart(2, '0');
        const minutes = String(Math.floor((timeInSeconds % 3600) / 60)).padStart(2, '0');
        const seconds = String(timeInSeconds % 60).padStart(2, '0');
        return `${hours}:${minutes}:${seconds}`;
    };

    function handleStartStop() {
        setIsRunning(!isRunning);
    }

    function handleReset() {
        setIsRunning(false);
        setTime(0);
    }

    useEffect(() => {
        let timerInterval;
      
        // Stopwatch Mode
        if (isRunning) {
            timerInterval = setInterval(() => {
                setTime((prevTime) => prevTime + 1);
            }, 1000);
        }

            return () => clearInterval(timerInterval);
    }, [isRunning]);

    return (
        <>
            <main className="timer-overlay">
                <div className="timer-body">
                    {formatTime(time).split("").map((num, index) => 
                    <div key={index}>
                        {num}
                    </div> 
                    )}
                </div>
            </main>

            <StartReset 
                handleStartStop={handleStartStop} 
                handleReset={handleReset} 
                isRunning={isRunning}
            />
        </>
    )
}

export default Stopwatch