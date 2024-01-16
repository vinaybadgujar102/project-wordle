import React from "react";

const GuessResults = ({ guesses }) => {
    return (
        <div className="guess-results">
            {guesses.map(({value, id}) => (
                <p key={id} className="guess">{value}</p>
            ))}
        </div>
    )
}

export default GuessResults