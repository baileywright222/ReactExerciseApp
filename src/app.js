import React, { useState } from "react";
import RepetitionExercise from "./components/Repetitionexercise";
import DurationExercise from "./components/durationexercise";
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
        </div>
      ) : selectedExercise === "repetition" ? (
        <RepetitionExercise name="Push-Ups" />
      ) : (
        <DurationExercise name="Running" />
      )}
    </div>
  );
}

export default App;