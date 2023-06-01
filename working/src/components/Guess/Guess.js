import React from "react";
import {range} from "../../utils";
import {checkGuess} from "../../game-helpers";

function Cell({letter, status}) {
    let cellClasses = 'cell' + (status ? ` ${status}` : '');
    return <span className={cellClasses}>{letter}</span>
}

function Guess({word, answer}) {
    const lettersArr = checkGuess(word, answer);

    return (
        <p className="guess">
            {range(0, 5, 1).map((index) => {

                return <Cell
                    letter={lettersArr ? lettersArr[index].letter : undefined}
                    status={lettersArr ? lettersArr[index].status : undefined}
                    key={index}
                />

            })}
        </p>
    );
}

export default Guess;
