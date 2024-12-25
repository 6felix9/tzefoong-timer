import '../styles/toggle.css';

function Toggle({toggle, setToggle, setFunc}) {

    function handleClick(newToggle) {
        setToggle(newToggle);
        setFunc(newToggle == 'left' ? 'stopwatch' : 'timer');
    }

    return (
        <>
            <section className="toggle">
                <div
                    className={`toggle-box ${toggle === 'right' ? 'right-active' : ''}`}
                >
                    <button
                        className={`toggle-button ${toggle === 'left' ? 'active' : ''}`}
                        onClick={() => handleClick('left')}
                    >
                        Stopwatch
                    </button>
                    <button
                        className={`toggle-button ${toggle === 'right' ? 'active' : ''}`}
                        onClick={() => handleClick('right')}
                    >
                        Timer
                    </button>
                </div>
            </section>
        </>
    );
}

export default Toggle;
