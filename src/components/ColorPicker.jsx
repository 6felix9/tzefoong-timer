import { useState, useEffect, useRef } from 'react';
import PropTypes from 'prop-types';

const colors = [
    { name: 'Light Gray', value: '#f3f4f6' },
    { name: 'Slate', value: '#64748b' },
    { name: 'Navy', value: '#1e293b' },
    { name: 'Forest', value: '#065f46' },
    { name: 'Burgundy', value: '#7f1d1d' },
    { name: 'Purple', value: '#581c87' },
    { name: 'Indigo', value: '#312e81' },
    { name: 'Charcoal', value: '#374151' },
    { name: 'Golden', value: '#d97706' },
    { name: 'Yellow', value: '#fbbf24' },
    { name: 'Lime', value: '#c2deb8' },
    { name: 'Emerald', value: '#059669' },
    { name: 'Teal', value: '#0d9488' },
    { name: 'Sky', value: '#0284c7' },
    { name: 'Pink', value: '#f2c4c7' },
    { name: 'Rose', value: '#e11d48' }
];

function ColorPicker({ onColorChange, currentColor }) {
    const [isOpen, setIsOpen] = useState(false);
    const dropdownRef = useRef(null);

    // Close dropdown when clicking outside
    useEffect(() => {
        function handleClickOutside(event) {
            if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
                setIsOpen(false);
            }
        }

        document.addEventListener('mousedown', handleClickOutside);
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, []);

    const handleColorSelect = (color) => {
        onColorChange(color.value);
        // Keep palette open - only close when clicking outside
    };

    return (
        <div className="relative" ref={dropdownRef}>
            <button
                onClick={() => setIsOpen(!isOpen)}
                className="
                    p-2 rounded-lg border border-gray-300 bg-white shadow-sm
                    hover:border-gray-400 hover:shadow-md
                    focus:outline-none focus:ring-2 focus:ring-gray-400 focus:ring-opacity-50
                    transition-all duration-200
                "
                aria-label="Change background color"
            >
                <svg 
                    className={`w-4 h-4 text-gray-600 transition-transform duration-200 ${isOpen ? 'rotate-180' : ''}`}
                    fill="none" 
                    stroke="currentColor" 
                    viewBox="0 0 24 24"
                >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
            </button>

            <div className={`
                absolute top-12 right-0 z-50
                bg-white border border-gray-200 rounded-lg shadow-lg
                p-3 min-w-[200px]
                transition-all duration-200 ease-out origin-top-right
                ${
                    isOpen 
                        ? 'opacity-100 scale-100 translate-y-0' 
                        : 'opacity-0 scale-95 -translate-y-1 pointer-events-none'
                }
            `}>
                    <div className="text-xs font-medium text-gray-500 mb-2">
                        Background Color
                    </div>
                    <div className="grid grid-cols-4 gap-2">
                        {colors.map((color) => (
                            <button
                                key={color.value}
                                onClick={() => handleColorSelect(color)}
                                className={`
                                    w-8 h-8 rounded-full border-2 transition-all duration-200
                                    hover:scale-110 focus:outline-none focus:scale-110
                                    ${currentColor === color.value 
                                        ? 'border-gray-800 ring-2 ring-gray-300' 
                                        : 'border-gray-300 hover:border-gray-400'
                                    }
                                `}
                                style={{ backgroundColor: color.value }}
                                title={color.name}
                                aria-label={`Set background to ${color.name}`}
                            />
                        ))}
                    </div>
                </div>
        </div>
    );
}

ColorPicker.propTypes = {
    onColorChange: PropTypes.func.isRequired,
    currentColor: PropTypes.string.isRequired
};

export default ColorPicker;