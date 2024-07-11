import { useState, useEffect } from 'react';

const TimerBar = () => {
  const [progress, setProgress] = useState(100);
  const duration = 15000;

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prevProgress) => {
        const newProgress = prevProgress - (100 / (duration / 10));
        return newProgress >= 0 ? newProgress : 0;
      });
    }, 10);

    return () => {
      clearInterval(interval);
    };
  }, []);

  return (
    <div className="progress-container">
      <div
        className="progress-bar"
        style={{ width: `${progress}%`, marginLeft: `${(100 - progress) / 2}%`, backgroundColor: `${progress < 30 ? '#F26B76' : '#00695c'}` }}
      ></div>
    </div>
  );
};

export default TimerBar;