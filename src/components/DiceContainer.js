import React from "react";
import {useStateValue} from "../state/StateProvider";

import Dice from "./Dice";
import DiceButtons from "./DiceButtons";
import BrewContainer from "./BrewContainer";

const DiceContainer = props => {
  const [{results, inBrew}] = useStateValue();
  return (
    <div>
      {results && !inBrew && <Dice results={results} />}
      {inBrew && <BrewContainer />}
      <DiceButtons />
    </div>
  );
};

export default DiceContainer;
