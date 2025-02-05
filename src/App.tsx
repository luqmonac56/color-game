import { useState, useEffect } from "react";
import "./App.css";

// Predefined set of colors
const colors = ["red", "blue", "green", "yellow", "orange", "purple"];

const ColorGuessingGame = () => {
  // State for target color, game status, score, and animation class for visual effects
  const [targetColor, setTargetColor] = useState("");
  const [gameStatus, setGameStatus] = useState("");
  const [score, setScore] = useState(0);
  const [animationClass, setAnimationClass] = useState("");

  // Initialize a new round
  const initGame = () => {
    // Randomly pick a target color from the colors array
    const randomColor = colors[Math.floor(Math.random() * colors.length)];
    setTargetColor(randomColor);
    setGameStatus("");
    setAnimationClass("");
  };

  // Initialize game on component mount
  useEffect(() => {
    initGame();
  }, []);

  // Handle a color option click
  const handleColorClick = (color) => {
    if (color === targetColor) {
      setGameStatus("Correct!");
      setScore((prevScore) => prevScore + 1);
      setAnimationClass("correct-animation");
    } else {
      setGameStatus("Wrong! Try again.");
      setAnimationClass("wrong-animation");
    }
  };

  // Reset for a new round
  const handleNewGame = () => {
    initGame();
  };

  return (
    <div className="game-container">
      {/* Game Instructions */}
      <h2 data-testid="gameInstructions">Guess the correct color!</h2>

      {/* Target Color Display */}
      <div
        data-testid="colorBox"
        className={`color-box ${animationClass}`}
        style={{ backgroundColor: targetColor }}
      ></div>

      {/* Color Options */}
      <div className="options-container">
        {colors.map((color, index) => (
          <button
            key={index}
            data-testid="colorOption"
            className="color-button"
            style={{ backgroundColor: color }}
            onClick={() => handleColorClick(color)}
          >
            {/* The button shows only the color, no text is needed */}
          </button>
        ))}
      </div>

      {/* Game Status Message */}
      <div data-testid="gameStatus" className="game-status">
        {gameStatus}
      </div>

      {/* Score Counter */}
      <div data-testid="score" className="score">
        Score: {score}
      </div>

      {/* New Game Button */}
      <button
        data-testid="newGameButton"
        className="new-game-button"
        onClick={handleNewGame}
      >
        New Game
      </button>
    </div>
  );
};

export default ColorGuessingGame;
