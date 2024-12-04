import { useState } from "react";
import words from "./wordList.json";
import "./App.css";
import HangmanScaffold from "./components/HangmanScaffold";
import HangmanWord from "./components/HangmanWord";
import Keyboard from "./components/Keyboard";

function App() {
  // STATES //
  const [wordToGuess, setWordToGuess] = useState(() => {
    return words[Math.floor(Math.random() * words.length)];
  });
  const [guessedLetters, setGuessedLetters] = useState<string[]>([]);

  return (
    <div className="root">
      <p className="hangman-title">Hangman Mania</p>
      <p className="win-lose">Lose? Win?</p>
      <HangmanScaffold />
      <HangmanWord />
      <div style={{ alignSelf: "stretch" }}>
        <Keyboard />
      </div>
    </div>
  );
}

export default App;
