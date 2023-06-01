import React from 'react';

import {sample} from '../../utils';
import {WORDS} from '../../data';
import GuessInput from "../GuessInput";
import GuessesList from "../GuessesList";
import Banner from "../Banner";

// Pick a random word on every pageload.
const answer = sample(WORDS);
// To make debugging easier, we'll log the solution in the console.
console.info({answer});


function Game() {
    const[status, setStatus] = React.useState('playing');
    const [guesses, setGuesses] = React.useState([]);

    const handleNewGuess = (submittedGuess) => {
        setGuesses((prevGuesses) => [...prevGuesses, submittedGuess]);

        if (submittedGuess === answer) {
            setStatus('won');
        } else if (guesses.length >= 5) {
            setStatus('lost');
        }
    }

    return <>
        <GuessesList guesses={guesses} answer={answer}/>
        <GuessInput handleNewGuess={handleNewGuess}/>
        <Banner status={status} guesses={guesses.length} answer={answer}/>
    </>;
}

export default Game;
