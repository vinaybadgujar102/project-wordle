import React from "react";

const GuessInput = ({ handleSubmitGuess, gameStatus }) => {
  const [tentativeGuess, setTentativeGuess] = React.useState("");

  const handleSumbit = (e) => {
    e.preventDefault();
    if (tentativeGuess.length !== 5) {
      alert("Please enter a 5 letter word");
      return;
    }
    handleSubmitGuess(tentativeGuess);

    setTentativeGuess("");
  };

  return (
    <form onSubmit={handleSumbit} className="guess-input-wrapper">
      <label htmlFor="guess-input">Enter guess:</label>
      <input
        required
        disabled={gameStatus !== "running"}
        pattern="[a-zA-Z]{5}"
        title="5 letter word"
        maxLength={5}
        id="guess-input"
        type="text"
        value={tentativeGuess}
        onChange={(e) => {
          const nextInput = e.target.value.toUpperCase();
          setTentativeGuess(nextInput);
        }}
        onKeyDown={(e) => {
          if (e.key === "Enter") {
            handleSumbit(e);
          }
        }}
      />
    </form>
  );
};

export default GuessInput;
