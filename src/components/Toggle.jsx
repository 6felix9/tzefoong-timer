import '../styles/toggle.css';

function Toggle({toggle, setToggle}) {

    function handleClick(newToggle) {
        setToggle(newToggle);
    }

    return (
        <>
            <section className="toggle">
                <div
                    className={`toggle-box ${toggle === 'Timer' ? 'right-active' : ''}`}
                >
                    <button
                        className={`toggle-button ${toggle === 'Stopwatch' ? 'active' : ''}`}
                        onClick={() => handleClick('Stopwatch')}
                    >
                        Stopwatch
                    </button>
                    <button
                        className={`toggle-button ${toggle === 'Timer' ? 'active' : ''}`}
                        onClick={() => handleClick('Timer')}
                    >
                        Timer
                    </button>
                </div>
            </section>
        </>
    );
}

export default Toggle;
