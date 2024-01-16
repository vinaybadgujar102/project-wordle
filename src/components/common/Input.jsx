import React from "react";

const Input = ({ name, label, onChange, placeholder, value, error }) => {
  const [input, setInput] = React.useState("");

  const handleSumbit = (e) => {
    e.preventDefault();
    if (input.length !== 5) {
      return;
    }
    console.log({ input });

    setInput("");
  };

  return (
    <form onSubmit={handleSumbit} className="guess-input-wrapper">
      <label htmlFor="guess-input">Enter guess:</label>
      <input
        required
        pattern="[a-zA-Z]{5}"
        title="5 letter word"
        maxLength={5}
        id="guess-input"
        type="text"
        value={input}
        onChange={(e) => {
          const nextInput = e.target.value.toUpperCase();
          setInput(nextInput);
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

export default Input;
