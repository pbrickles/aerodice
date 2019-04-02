import React from "react";
import {useStateValue} from "../state/StateProvider";

import Dice from "./Dice";
import DiceButtons from "./DiceButtons";
import BrewContainer from "./BrewContainer";

const DiceContainer = props => {
  const [{results, inBrew, diceAnimating}] = useStateValue();
  return (
    <>
      {inBrew && (
        <div>
          <BrewContainer />
        </div>
      )}
      <div>
        {results && (
          <Dice
            results={results}
            animating={diceAnimating}
            shrink={inBrew ? true : false}
          />
        )}
        <DiceButtons />
      </div>
    </>
  );
};

export default DiceContainer;
