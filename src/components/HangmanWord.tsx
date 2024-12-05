import "../App.css";

interface props {
  guessedLetters: string[];
  wordToGuess: string;
  reveal?: boolean;
}

const HangmanWord = ({
  guessedLetters,
  wordToGuess,
  reveal = false,
}: props) => {
  return (
    <div className="hangman-word">
      {wordToGuess.split("").map((letter, index) => (
        <span style={{ borderBottom: ".1em solid violet" }} key={index}>
          <span
            style={{
              visibility:
                guessedLetters.includes(letter) || reveal
                  ? "visible"
                  : "hidden",
              color:
                !guessedLetters.includes(letter) && reveal ? "red" : "black",
            }}
          >
            {letter}
          </span>
        </span>
      ))}
    </div>
  );
};

export default HangmanWord;
