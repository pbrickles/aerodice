import React, { useState } from 'react'
import {useStateValue} from "../state/StateProvider";

import {setupSteps} from "../helpers/setupSteps";

const BrewContainer = (props) => {
  const [{results}] = useStateValue();
  const [steps, setUpSteps] = useState(setupSteps(results));
  const [step, setStep] = useState(steps[0]);

  return (
    <div>
      {console.log("Steps", steps)}
      {console.log("FirstStep", step)}
    </div>
  )
}

export default BrewContainer;
