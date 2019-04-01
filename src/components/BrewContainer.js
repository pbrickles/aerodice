import React, { useState } from 'react'
import {useStateValue} from "../state/StateProvider";

const BrewContainer = (props) => {
  const [{results}] = useStateValue();
  const [step, setStep] = useState(0);

  return (
    <div>
      Brew Container
    </div>
  )
}

export default BrewContainer;
