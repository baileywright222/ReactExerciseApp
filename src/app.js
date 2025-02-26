import React, { useState } from "react";
import RepetitionExercise from "./components/Repetitionexercise";
import DurationExercise from "./components/durationexercise";
import RunningExercise from "./components/RunningExercise";
import "./App.css";

function App() {
  const [selectedExercise, setSelectedExercise] = useState(null);

  return (
    <div className="App">
      {!selectedExercise ? (
        <div>
          <h1>Exercise Tracker</h1>
          <button onClick={() => setSelectedExercise("repetition")}>Repetition Exercise</button>
          <button onClick={() => setSelectedExercise("duration")}>Duration Exercise</button>
          <button onClick={() => setSelectedExercise("running")}>Running Exercise</button>
        </div>
      ) : selectedExercise === "repetition" ? (
        <RepetitionExercise name="Push-Ups" />
      ) : selectedExercise === "duration" ? (
        <DurationExercise name="Running" />
      ) : (
        <RunningExercise />
      )}
    </div>
  );
}

export default App;