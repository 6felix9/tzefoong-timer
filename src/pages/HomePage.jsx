import "../styles/home-page.css"
import Timer from "../components/Timer"
import Stopwatch from "../components/Stopwatch"
import Toggle from "../components/Toggle"
import { useState } from "react"

function HomePage() {

    const [toggle, setToggle] = useState('Timer');
    
    return (
        <>

            <section className="homepage-title">
                <div>Tze Foong's {toggle}</div>
            </section>

            <Toggle toggle={toggle} setToggle={setToggle} />

            {toggle == 'Stopwatch' ? <Stopwatch /> : <Timer />}

        </>
        
    )
}

export default HomePage