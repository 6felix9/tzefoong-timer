import PropTypes from 'prop-types';

function Toggle({toggle, setToggle}) {
    function handleClick(newToggle) {
        setToggle(newToggle);
    }

    return (
        <div className="flex justify-center">
            <div className="relative flex bg-gray-200 rounded-lg p-1">
                <div 
                    className={`
                        absolute top-1 bottom-1 left-1 w-32 bg-gray-700 rounded-md
                        transition-transform duration-300 ease-out
                        ${toggle === 'Timer' ? 'translate-x-full' : 'translate-x-0'}
                    `}
                />
                
                <button
                    className={`
                        relative z-10 px-6 py-2 font-medium rounded-md transition-colors duration-200
                        w-32 text-sm
                        ${
                            toggle === 'Stopwatch' 
                                ? 'text-white' 
                                : 'text-gray-600 hover:text-gray-800'
                        }
                    `}
                    onClick={() => handleClick('Stopwatch')}
                >
                    Stopwatch
                </button>
                
                <button
                    className={`
                        relative z-10 px-6 py-2 font-medium rounded-md transition-colors duration-200
                        w-32 text-sm
                        ${
                            toggle === 'Timer' 
                                ? 'text-white' 
                                : 'text-gray-600 hover:text-gray-800'
                        }
                    `}
                    onClick={() => handleClick('Timer')}
                >
                    Timer
                </button>
            </div>
        </div>
    );
}

Toggle.propTypes = {
    toggle: PropTypes.string.isRequired,
    setToggle: PropTypes.func.isRequired
};

export default Toggle;
