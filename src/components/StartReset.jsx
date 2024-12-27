import '../styles/start-reset-btn.css'

function StartReset({handleStartStop, handleReset, isRunning}) {

    return (
        <>
            <section className="button-body">
                <button onClick={handleStartStop}>
                    {isRunning ? 'Stop' : 'Start'}
                </button>
                <button onClick={handleReset}>Reset</button>
            </section>
        </>
    )
}

export default StartReset