import React, { useState } from "react";
import "../components/WodConnect.css";

const WordConnect = () => {
  const wordList = ["apple", "banana", "grape", "orange", "melon"];
  const [currentWord, setCurrentWord] = useState(
    wordList[Math.floor(Math.random() * wordList.length)]
  );
  const [shuffledWord, setShuffledWord] = useState(shuffleWord(currentWord));
  const [userInput, setUserInput] = useState("");
  const [message, setMessage] = useState("");

  function shuffleWord(word) {
    return word.split("").sort(() => Math.random() - 0.5).join("");
  }

  const checkAnswer = () => {
    if (userInput.toLowerCase() === currentWord) {
      setMessage("Correct! Well done!");
    } else {
      setMessage("Oops! Try again.");
    }
  };

  const resetGame = () => {
    const newWord = wordList[Math.floor(Math.random() * wordList.length)];
    setCurrentWord(newWord);
    setShuffledWord(shuffleWord(newWord));
    setUserInput("");
    setMessage("");
  };

  return (
    <div className="word-connect">
      <p>Unscramble the word:</p>
      <h2>{shuffledWord}</h2>
      <input
        type="text"
        value={userInput}
        onChange={(e) => setUserInput(e.target.value)}
        placeholder="Your answer"
      />
      <div className="buttons">
        <button onClick={checkAnswer}>Submit</button>
        <button onClick={resetGame}>Next Word</button>
      </div>
      {message && <p className="message">{message}</p>}
    </div>
  );
};

export default WordConnect;
