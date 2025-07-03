import Timer from "../components/Timer"
import Stopwatch from "../components/Stopwatch"
import Toggle from "../components/Toggle"
import { useState, useEffect } from "react"
import { useParams } from 'react-router-dom';
import ColorPicker from "../components/ColorPicker";
import { getTextColor } from "../utils/colorUtils";

function HomePage() {
    const [toggle, setToggle] = useState('Timer');
    const { duration } = useParams();
    const [currentColor, setCurrentColor] = useState('#f3f4f6');
    
    // Load saved color from localStorage on mount
    useEffect(() => {
        const savedColor = localStorage.getItem('tzefoong-timer-background-color');
        if (savedColor) {
            setCurrentColor(savedColor);
        }
    }, []);
    
    const handleColorChange = (color) => {
        setCurrentColor(color);
        localStorage.setItem('tzefoong-timer-background-color', color);
    };
    
    return (
        <div className="min-h-screen flex flex-col items-center justify-center p-4 space-y-6 relative transition-colors duration-500 ease-in-out" style={{ backgroundColor: currentColor }}>
            <div className="absolute top-4 right-4">
                <ColorPicker currentColor={currentColor} onColorChange={handleColorChange} />
            </div>

            <h1 className={`text-6xl font-semibold text-center transition-colors duration-500 ease-in-out ${getTextColor(currentColor)}`}>
                Tze Foong&apos;s {toggle}
            </h1>

            <Toggle toggle={toggle} setToggle={setToggle} />
            
            {toggle === 'Stopwatch' ? <Stopwatch /> : <Timer duration={duration}/>}
        </div>
    )
}

export default HomePage