import React from "react";
import {useStateValue} from "../state/StateProvider";

import Dice from "./Dice";
import DiceButtons from "./DiceButtons";

const DiceContainer = props => {
  const [{results}] = useStateValue();
  return (
    <div>
      {results && <Dice results={results} />}
      <DiceButtons />
    </div>
  );
};

export default DiceContainer;
