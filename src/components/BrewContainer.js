import React, {useEffect, useState} from "react";
import {useStateValue} from "../state/StateProvider";
import Timer from "./Timer";
import BrewStep from "./BrewStep";

const BrewContainer = () => {
  const [{results, brewStep}, dispatch] = useStateValue();
  const [bloomStep, setBloomStep] = useState(false);
  const [waterMessage, setWaterMessage] = useState("");

  const calculateWater = () => {
    const bloomData = results.steps.filter(step => step.type === "Bloom");
    const waterData = results.steps.filter(step => step.type === "AddWater");
    const totalWater = waterData[0].data.totalWater
      ? waterData[0].data.totalWater
      : undefined;

    if (bloomData.length > 0 && totalWater) {
      const newWater = totalWater - bloomData[0].data.water;
      setBloomStep(true);
      setWaterMessage(`Add the remaining ${newWater}g of water`);
    }
  };

  useEffect(
    () => {
      if (brewStep === 0) {
        calculateWater();
      }

      if (brewStep > results.steps.length) {
        dispatch({
          type: "resetBrew",
        });
      }
    },
    [brewStep],
  );

  return (
    <div>
      {brewStep < results.steps.length ? (
        <>
          {bloomStep && results.steps[brewStep].type === "AddWater" ? (
            <BrewStep action={waterMessage} />
          ) : (
            <BrewStep action={results.steps[brewStep].action} />
          )}

          {results.steps[brewStep].data &&
            results.steps[brewStep].data.time && (
              <Timer time={results.steps[brewStep].data.time} />
            )}
          
        </>
      ) : (
        <p>Enjoy your coffee!</p>
      )}
    </div>
  );
};

export default BrewContainer;
