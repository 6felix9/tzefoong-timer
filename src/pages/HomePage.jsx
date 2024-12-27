import "../styles/home-page.css"
import Timer from "../components/Timer"
import Stopwatch from "../components/Stopwatch"
import Toggle from "../components/Toggle"
import { useEffect, useState } from "react"
import { useParams } from 'react-router-dom';

function HomePage() {

    const [toggle, setToggle] = useState('Timer');
    const { duration } = useParams();
    
    return (
        <>

            <section className="homepage-title">
                <div>Tze Foong's {toggle}</div>
            </section>

            <Toggle toggle={toggle} setToggle={setToggle} />

            {toggle == 'Stopwatch' ? <Stopwatch /> : <Timer duration={duration}/>}

        </>
        
    )
}

export default HomePage