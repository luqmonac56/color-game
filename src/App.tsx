

import { useState, useEffect } from "react";
import "./App.css";

const colors: string[] = ["red", "blue", "green", "yellow", "orange", "purple"];

const ColorGuessingGame = () => {
  const [targetColor, setTargetColor] = useState<string>("");
  const [gameStatus, setGameStatus] = useState<string>("");
  const [score, setScore] = useState<number>(0);
  const [animationClass, setAnimationClass] = useState<string>("");

  const initGame = () => {
    const randomColor = colors[Math.floor(Math.random() * colors.length)];
    setTargetColor(randomColor);
    setGameStatus("");
    setAnimationClass("");
  };

  useEffect(() => {
    initGame();
  }, []);

 
  const handleColorClick = (color: string) => {
    if (color === targetColor) {
      setGameStatus(`🎉 Correct! The color was ${targetColor}! 🎯`);
      setScore((prevScore) => prevScore + 1);
      setAnimationClass("correct-animation");
    } else {
      setGameStatus(`❌ Wrong! The color was ${targetColor}! Keep trying! 💪`);
      setAnimationClass("wrong-animation");
    }

    setTimeout(() => {
      initGame();
    }, 1500);
  };

  const handleNewGame = () => {
    initGame();
  };

  return (
    <div className="game-container">
      <h2 data-testid="gameInstructions">Guess the correct color!</h2>

      <div
        data-testid="colorBox"
        className={`color-box ${animationClass}`}
        style={{ backgroundColor: targetColor }}
      ></div>

      <div className="options-container">
        {colors.map((color, index) => (
          <button
            key={index}
            data-testid="colorOption"
            className="color-button"
            style={{ backgroundColor: color }}
            onClick={() => handleColorClick(color)}
          ></button>
        ))}
      </div>

      <div data-testid="gameStatus" className="game-status">
        {gameStatus}
      </div>

      <div data-testid="score" className="score">
        Score: {score} 🏆
      </div>

      <button
        data-testid="newGameButton"
        className="new-game-button"
        onClick={handleNewGame}
      >
        New Game 🔄
      </button>
    </div>
  );
};

export default ColorGuessingGame;
