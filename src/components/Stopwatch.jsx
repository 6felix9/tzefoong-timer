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

    useEffect(() => {
        document.title = `${formatTime(time)}`;
    }, [time]);

    const formattedTime = formatTime(time).split('');
    const nonZeroIndex = formattedTime.findIndex((char) => char !== '0' && char !== ':');
    
    return (
        <div className="flex flex-col items-center space-y-4">
            <div className="relative">
                <div className="bg-white border border-gray-300 rounded-xl p-6 shadow-lg">
                    <div className="flex items-center justify-center space-x-3">
                        {formatTime(time).split("").map((char, index) => {
                            const isColon = char === ':';
                            const isActive = index >= nonZeroIndex;
                            
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
                                                    rounded-lg h-28 w-20
                                                    bg-gray-50 border border-gray-200
                                                    ${isRunning ? 'border-green-400 bg-green-50' : ''}
                                                `
                                        }
                                        ${
                                            isActive
                                                ? `text-gray-800 ${isRunning ? 'animate-pulse' : ''}` 
                                                : 'text-gray-400'
                                        }
                                    `}
                                >
                                    {char}
                                </div>
                            );
                        })}
                    </div>
                    
                    {isRunning && (
                        <div className="absolute top-4 right-4">
                            <div className="flex items-center gap-2 px-3 py-1 bg-green-500 text-white rounded-full text-xs font-medium">
                                <div className="w-2 h-2 bg-white rounded-full animate-pulse"></div>
                                <span>RUNNING</span>
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
    )
}

export default Stopwatch