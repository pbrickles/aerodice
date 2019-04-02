import React from "react";
import {useStateValue} from "../state/StateProvider";

import Dice from "./Dice";
import DiceButtons from "./DiceButtons";
import BrewContainer from "./BrewContainer";

const DiceContainer = props => {
  const [{results, inBrew, diceAnimating}] = useStateValue();
  console.log(results)
  return (
    <div>
      {results && !inBrew && <Dice results={results} animating={diceAnimating} />}
      {inBrew && <BrewContainer />}
      <DiceButtons />
    </div>
  );
};

export default DiceContainer;
