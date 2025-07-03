import { useEffect, useState, useRef } from 'react';
import PropTypes from 'prop-types';

function BackgroundTransition({ newColor, isAnimating, onComplete }) {
    const [animationClass, setAnimationClass] = useState('');
    const timerRef = useRef(null);

    useEffect(() => {
        console.log('🔄 BackgroundTransition useEffect triggered:', { isAnimating, newColor });
        
        // Clear any existing timer
        if (timerRef.current) {
            clearTimeout(timerRef.current);
            timerRef.current = null;
        }

        if (isAnimating) {
            // Start the animation
            console.log('🔄 Starting animation with class: circle-expand');
            setAnimationClass('circle-expand');
            
            // Complete the animation after duration
            timerRef.current = setTimeout(() => {
                console.log('🔄 Animation timeout completed, calling onComplete');
                onComplete();
                setAnimationClass('');
                timerRef.current = null;
            }, 600); // Match CSS animation duration
        } else {
            // Reset immediately if not animating
            console.log('🔄 Not animating, resetting class');
            setAnimationClass('');
        }

        return () => {
            if (timerRef.current) {
                clearTimeout(timerRef.current);
                timerRef.current = null;
            }
        };
    }, [isAnimating, onComplete, newColor]); // Added newColor as dependency

    if (!isAnimating) {
        console.log('🔄 Not animating, returning null');
        return null;
    }

    console.log('🔄 Rendering BackgroundTransition with:', { animationClass, newColor });

    return (
        <div 
            className={`
                fixed inset-0
                ${animationClass}
            `}
            style={{ 
                backgroundColor: newColor,
                clipPath: 'circle(0% at calc(100% - 2rem) 2rem)',
                zIndex: -10
            }}
        />
    );
}

BackgroundTransition.propTypes = {
    newColor: PropTypes.string.isRequired,
    isAnimating: PropTypes.bool.isRequired,
    onComplete: PropTypes.func.isRequired
};

export default BackgroundTransition;