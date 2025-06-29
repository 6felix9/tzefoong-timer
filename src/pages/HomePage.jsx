import Timer from "../components/Timer"
import Stopwatch from "../components/Stopwatch"
import Toggle from "../components/Toggle"
import { useState } from "react"
import { useParams } from 'react-router-dom';

function HomePage() {
    const [toggle, setToggle] = useState('Timer');
    const { duration } = useParams();
    
    return (
        <div className="min-h-screen flex flex-col items-center justify-center p-4 space-y-6 relative bg-gray-100">
            <h1 className="text-6xl font-semibold text-gray-800 text-center">
                Tze Foong&apos;s {toggle}
            </h1>

            <Toggle toggle={toggle} setToggle={setToggle} />
            
            {toggle === 'Stopwatch' ? <Stopwatch /> : <Timer duration={duration}/>}
        </div>
    )
}

export default HomePage