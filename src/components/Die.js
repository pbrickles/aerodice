import React from "react";
import {useStateValue} from "../state/StateProvider";

import "./Die.scss";

const Die = ({result, faces}) => {
  const [{diceAnimating}] = useStateValue();
  const sides = ["back", "right", "left", "top", "bottom"];

  return (
    <div className="dice-container">
      <div className={diceAnimating ? "animating dice" : "dice"}>
        <div className="front">
          <span>{result}</span>
        </div>
        {faces.map((face, i) => (
          <div key={`diceFace_${i}`} className={sides[i]}>
            <span>{face}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Die;
