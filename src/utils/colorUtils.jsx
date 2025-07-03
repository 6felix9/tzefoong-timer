// Utility functions for color manipulation and analysis

/**
 * Determines if a color is light or dark based on its luminance
 * @param {string} color - Hex color string (e.g., '#ffffff' or '#000000')
 * @returns {boolean} - True if the color is light, false if dark
 */
export function isLightColor(color) {
    // Remove the # symbol if present
    const hex = color.replace('#', '');
    
    // Convert hex to RGB
    const r = parseInt(hex.substring(0, 2), 16);
    const g = parseInt(hex.substring(2, 4), 16);
    const b = parseInt(hex.substring(4, 6), 16);
    
    // Calculate luminance using the relative luminance formula
    // Values based on human perception of color brightness
    const luminance = (0.299 * r + 0.587 * g + 0.114 * b) / 255;
    
    // Return true if luminance is above 0.5 (light), false if below (dark)
    return luminance > 0.5;
}

/**
 * Gets the appropriate text color (light or dark) for a given background color
 * @param {string} backgroundColor - Hex color string for the background
 * @returns {string} - Either 'text-white' or 'text-gray-800' CSS class
 */
export function getTextColor(backgroundColor) {
    return isLightColor(backgroundColor) ? 'text-gray-800' : 'text-white';
}

/**
 * Gets the appropriate text color as a hex value for a given background color
 * @param {string} backgroundColor - Hex color string for the background
 * @returns {string} - Either '#ffffff' or '#1f2937' hex color
 */
export function getTextColorHex(backgroundColor) {
    return isLightColor(backgroundColor) ? '#1f2937' : '#ffffff';
}