import React, { useState } from "react";

function RunningExercise() {
  const [laps, setLaps] = useState([]);
  const [time, setTime] = useState(0);
  const [running, setRunning] = useState(false);

  React.useEffect(() => {
    let timer;
    if (running) {
      timer = setInterval(() => setTime((t) => t + 1), 1000);
    } else {
      clearInterval(timer);
    }
    return () => clearInterval(timer);
  }, [running]);

  const recordLap = () => {
    setLaps([...laps, time]);
  };

  return (
    <div>
      <h2>Running Exercise</h2>
      <p>Time: {String(Math.floor(time / 60)).padStart(2, '0')}:{String(time % 60).padStart(2, '0')}</p>
      <button onClick={() => setRunning(!running)}>
        {running ? "Stop" : "Start"}
      </button>
      <button onClick={() => { setRunning(false); setTime(0); setLaps([]); }}>
        Reset
      </button>
      <button onClick={recordLap}>Record Lap</button>
      <h3>Laps:</h3>
      <ul>
        {laps.map((lap, index) => (
          <li key={index}>
            Lap {index + 1}: {String(Math.floor(lap / 60)).padStart(2, '0')}:{String(lap % 60).padStart(2, '0')}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default RunningExercise;