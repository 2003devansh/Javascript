import React, { useState, useRef } from 'react';

const App = () => {
  const [workTime, setWorkTime] = useState(25); // in minutes
  const [breakTime, setBreakTime] = useState(5); // in minutes
  const [timeLeft, setTimeLeft] = useState(25 * 60); // in seconds
  const [isRunning, setIsRunning] = useState(false);
  const [mode, setMode] = useState('work'); // "work" or "break"

  const intervalRef = useRef(null);

  const formatTime = (sec) => {
    const minutes = Math.floor(sec / 60).toString().padStart(2, '0');
    const seconds = Math.floor(sec % 60).toString().padStart(2, '0');
    return `${minutes}:${seconds}`;
  };

  const startTimer = () => {
    if (intervalRef.current !== null) return; // already running

    setIsRunning(true);

    intervalRef.current = setInterval(() => {
      setTimeLeft((prev) => {
        if (prev === 0) {
          clearInterval(intervalRef.current);
          intervalRef.current = null;

          const nextMode = mode === 'work' ? 'break' : 'work';
          const nextTime = nextMode === 'work' ? workTime * 60 : breakTime * 60;

          setMode(nextMode);
          setTimeLeft(nextTime);
          setIsRunning(false);
          return nextTime;
        }
        return prev - 1;
      });
    }, 1000);
  };

  const pauseTimer = () => {
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
      intervalRef.current = null;
      setIsRunning(false);
    }
  };

  const resetTimer = () => {
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
      intervalRef.current = null;
    }
    setIsRunning(false);
    setMode('work');
    setTimeLeft(workTime * 60);
  };

  return (
    <div style={{ textAlign: 'center', marginTop: '50px' }}>
      <h1>Pomodoro Clock</h1>

      <div style={{ marginBottom: '20px' }}>
        <p>Set Work Time (minutes)</p>
        <input
          type="number"
          min="1"
          value={workTime}
          onChange={(e) => {
            const val = Number(e.target.value);
            setWorkTime(val);
            if (mode === 'work') setTimeLeft(val * 60);
          }}
        />

        <p>Set Break Time (minutes)</p>
        <input
          type="number"
          min="1"
          value={breakTime}
          onChange={(e) => {
            const val = Number(e.target.value);
            setBreakTime(val);
            if (mode === 'break') setTimeLeft(val * 60);
          }}
        />
      </div>

      <h2>{mode === 'work' ? 'Work Time' : 'Break Time'}</h2>
      <h1 style={{ fontSize: '48px' }}>{formatTime(timeLeft)}</h1>

      <div className="btns" style={{ marginTop: '20px' }}>
        <button onClick={startTimer}>Start</button>
        <button onClick={pauseTimer}>Pause</button>
        <button onClick={resetTimer}>Reset</button>
      </div>
    </div>
  );
};

export default App;
