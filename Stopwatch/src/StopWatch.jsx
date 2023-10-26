import React, { useState, useEffect } from 'react';

function Stopwatch() {
  const [time, setTime] = useState({ seconds: 0, minutes: 0, hours: 0 });
  const [isRunning, setIsRunning] = useState(false);

  useEffect(() => {
    let intervalId;

    if (isRunning) {
      intervalId = setInterval(() => {
        setTime((prevTime) => {
          const newSeconds = prevTime.seconds + 1;
          const newMinutes = prevTime.minutes + (newSeconds === 60 ? 1 : 0);
          const newHours = prevTime.hours + (newMinutes === 60 ? 1 : 0);

          return {
            seconds: newSeconds === 60 ? 0 : newSeconds,
            minutes: newMinutes === 60 ? 0 : newMinutes,
            hours: newHours,
          };
        });
      }, 1000); // Update every 1 second (1000 milliseconds)
    } else {
      clearInterval(intervalId);
    }

    return () => {
      clearInterval(intervalId); // Cleanup the interval on unmount
    };
  }, [isRunning]);

  const start = () => {
    setIsRunning(true);
  };

  const stop = () => {
    setIsRunning(false);
  };

  const reset = () => {
    setIsRunning(false);
    setTime({ seconds: 0, minutes: 0, hours: 0 });
  };

  // Format time values with leading zeros
  const formattedSeconds = String(time.seconds).padStart(2, '0');
  const formattedMinutes = String(time.minutes).padStart(2, '0');
  const formattedHours = String(time.hours).padStart(2, '0');

  return (
    <div className="text-center mt-8">
      <div className="text-3xl mb-4">
        {formattedHours}:{formattedMinutes}:{formattedSeconds}
      </div>
      <div className="space-x-4">
        <button
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
          onClick={start}
        >
          Start
        </button>
        <button
          className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded"
          onClick={stop}
        >
          Stop
        </button>
        <button
          className="bg-gray-500 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded"
          onClick={reset}
        >
          Reset
        </button>
      </div>
    </div>
  );
}

export default Stopwatch;
