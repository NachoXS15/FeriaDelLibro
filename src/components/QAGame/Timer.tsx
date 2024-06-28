import { useState, useEffect } from 'react';

const TimerBar = () => {
  const [progress, setProgress] = useState(100);
  const duration = 10000; // 10 seconds

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prevProgress) => {
        const newProgress = prevProgress - (100 / (duration / 10)); // Reduce progress more frequently
        return newProgress >= 0 ? newProgress : 0;
      });
    }, 10); // Update every 10ms for smoother animation

    return () => {
      clearInterval(interval);
    };
  }, []);

  return (
    <div className="progress-container">
      <div
        className="progress-bar"
        style={{ width: `${progress}%`, marginLeft: `${(100 - progress) / 2}%` }}
      ></div>
    </div>
  );
};

export default TimerBar;