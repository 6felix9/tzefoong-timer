export function parseDurationToSeconds(duration) {
    if (!duration) {
        return 0;
    }

    const durationRegex = /(?:(\d+)h)?(?:(\d+)m)?(?:(\d+)s)?/;
    const match = duration.match(durationRegex);
  
    if (match) {
      const hours = match[1] ? parseInt(match[1], 10) : 0;
      const minutes = match[2] ? parseInt(match[2], 10) : 0;
      const seconds = match[3] ? parseInt(match[3], 10) : 0;
      return hours * 3600 + minutes * 60 + seconds;
    }
  
    return 0; // Default to 0 if no match
} 