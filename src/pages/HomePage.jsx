import "../styles/home-page.css"
import Timer from "../components/Timer"
import Toggle from "../components/Toggle"
import { useState } from "react"

function HomePage() {

    const [toggle, setToggle] = useState('right');
    const [func, setFunc] = useState('timer');
    
    return (
        <>

            <section className="homepage-title">
                <div>Tze Foong's {toggle == 'left' ? 'Stopwatch' : 'Timer'}</div>
            </section>

            <Toggle toggle={toggle} setToggle={setToggle} setFunc={setFunc}/>

            <Timer func={func} />
        </>
        
    )
}

export default HomePage