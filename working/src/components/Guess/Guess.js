import React from "react";
import {range} from "../../utils";

function Guess({word}) {
    const cellsMarkup = range(0, 5, 1).map((index) => {
        return <span className="cell" key={index}>{word?.[index]}</span>
    });

    return (
        <p className="guess">
            {cellsMarkup}
        </p>
    );
}

export default Guess;
