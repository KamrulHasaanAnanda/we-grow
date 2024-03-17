import React from 'react';

function MusicSlider({ duration, currentTime, setCurrentTime, audioRef }) {
    // Improved time formatting function to handle edge cases and ensure consistent output
    const formatTime = (seconds) => {
        let roundedSeconds = Math.round(seconds);
        const minutes = Math.floor(roundedSeconds / 60);
        const remainingSeconds = roundedSeconds % 60;
        return `${minutes}:${remainingSeconds < 10 ? '0' : ''}${remainingSeconds}`;
    };

    // Handle slider change more effectively
    const handleSliderChange = (e) => {
        const time = parseFloat(e.target.value);
        audioRef.current.currentTime = time;
        setCurrentTime(time);
    };

    return (
        <div className=" hidden sm:flex items-center space-x-2">
            <div className="text-sm text-gray-600">
                {formatTime(currentTime)}
            </div>
            <input
                type="range"
                value={currentTime}
                onChange={handleSliderChange}
                min="0"
                max={duration}
                step="0.01" // Allows for finer control over the slider position
                className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer dark:bg-gray-700"
                style={{
                    backgroundImage: 'linear-gradient(to right, #3B82F6 0%, #3B82F6 ' + (currentTime / duration) * 100 + '%, #e5e7eb ' + (currentTime / duration) * 100 + '%, #e5e7eb 100%)'
                }}
            />
            <div className="text-sm text-gray-600">
                {formatTime(duration)}
            </div>
        </div>
    );
}

export default MusicSlider;
