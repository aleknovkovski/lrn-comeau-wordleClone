import React, {useState} from "react";

function GuessInput() {
    const [inputValue, setInputValue] = useState('');

    return (
        <form className="guess-input-wrapper">
            <label htmlFor="guess-input">Enter guess:</label>
            <input
                id="guess-input"
                type="text"
                value={inputValue}
                onChange={(event) => {
                    setInputValue(event.target.value.toUpperCase())
                }}
            />
        </form>
    );
}

export default GuessInput;
