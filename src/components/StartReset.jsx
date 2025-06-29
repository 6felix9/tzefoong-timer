import PropTypes from 'prop-types';

function StartReset({handleStartStop, handleReset, isRunning}) {
    return (
        <div className="flex justify-center gap-4 mt-4">
            <button 
                onClick={handleStartStop}
                className={`
                    px-8 py-3 font-semibold rounded-xl transition-all duration-200
                    border-2 shadow-md hover:shadow-lg transform hover:-translate-y-0.5
                    focus:outline-none focus:ring-2 focus:ring-opacity-50
                    ${
                        isRunning 
                            ? 'bg-red-50 border-red-200 text-red-700 hover:bg-red-100 hover:border-red-300 focus:ring-red-200'
                            : 'bg-green-50 border-green-200 text-green-700 hover:bg-green-100 hover:border-green-300 focus:ring-green-200'
                    }
                `}
            >
                {isRunning ? 'Stop' : 'Start'}
            </button>
            
            <button 
                onClick={handleReset}
                className="
                    px-8 py-3 font-semibold rounded-xl transition-all duration-200
                    bg-gray-50 border-2 border-gray-200 text-gray-700
                    hover:bg-gray-100 hover:border-gray-300 shadow-md hover:shadow-lg
                    transform hover:-translate-y-0.5
                    focus:outline-none focus:ring-2 focus:ring-gray-200 focus:ring-opacity-50
                "
            >
                Reset
            </button>
        </div>
    )
}

StartReset.propTypes = {
    handleStartStop: PropTypes.func.isRequired,
    handleReset: PropTypes.func.isRequired,
    isRunning: PropTypes.bool.isRequired
};

export default StartReset