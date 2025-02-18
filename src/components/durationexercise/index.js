import React, { useState, useEffect } from "react";

function DurationExercise({ name }) {
  const [time, setTime] = useState(0);
  const [running, setRunning] = useState(false);

  useEffect(() => {
    let timer;
    if (running) {
      timer = setInterval(() => setTime((t) => t + 1), 1000);
    } else {
      clearInterval(timer);
    }
    return () => clearInterval(timer);
  }, [running]);

  return (
    <div>
      <h2>{name}</h2>
      <p>Time: {String(Math.floor(time / 60)).padStart(2, '0')}:{String(time % 60).padStart(2, '0')}</p>
      <button onClick={() => setRunning(!running)}>{running ? "Stop" : "Start"}</button>
      <button onClick={() => { setRunning(false); setTime(0); }}>Reset</button>
    </div>
  );
}

export default DurationExercise;