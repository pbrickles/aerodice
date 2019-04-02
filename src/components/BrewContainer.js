import React, {useState} from "react";
import {useStateValue} from "../state/StateProvider";
import Timer from "./Timer";

const BrewContainer = props => {
  const [{results}] = useStateValue();
  const [step, setStep] = useState(0);

  return (
    <div>
      {step < results.steps.length ? (
        <>
          <p>{results.steps[step].action}</p>
          {results.steps[step].data && results.steps[step].data.time && (
            <Timer time={results.steps[step].data.time} />
          )}
          <button
            onClick={() => {
              setStep(step + 1);
            }}
          >
            Next Step
          </button>
        </>
      ) : (
        <p>Enjoy your coffee!</p>
      )}
    </div>
  );
};

export default BrewContainer;
