import React, {useState} from "react";

function GuessInput({handleNewGuess, enabled}) {
    const [inputValue, setInputValue] = useState('');

    function submitHandler(event) {
        event.preventDefault();
        handleNewGuess(inputValue);
        setInputValue('')
        console.log(inputValue);
    }

    return (
        <form className="guess-input-wrapper" onSubmit={(event) => submitHandler(event)}>
            <label htmlFor="guess-input">Enter guess:</label>
            <input
                id="guess-input"
                type="text"
                value={inputValue}
                disabled={!enabled}
                pattern=".{5,5}"
                title="Please enter exactly 5 characters" required
                onChange={(event) => {
                    setInputValue(event.target.value.toUpperCase())
                }}
            />
        </form>
    );
}

export default GuessInput;
