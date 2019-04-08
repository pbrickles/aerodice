import React, {useState, useEffect} from "react";
import classnames from "classnames";
import {useStateValue} from "../state/StateProvider";
import {rollDice} from "../helpers/rollDice";

const DiceButtons = () => {
  const [
    {results, inBrew, diceAnimating, brewStep},
    dispatch,
  ] = useStateValue();
  const [showBrewButton, setShowBrewButton] = useState(false);
  const [showRollButton, setShowRollButton] = useState(false);

  useEffect(() => {
    if (!inBrew && results.results && !diceAnimating) {
      setShowBrewButton(true);
    } else {
      setShowBrewButton(false);
    }
    if (!diceAnimating) {
      setShowRollButton(true);
    } else {
      setShowRollButton(false);
    }
  }, [diceAnimating]);
  return (
    <div className="Dice-button-container">
      {inBrew && brewStep < results.steps.length && (
        <>
          <button
            className="App-button App-button--negative"
            onClick={() =>
              dispatch({
                type: "setBrewStatus",
                inBrew: !inBrew,
              })
            }
          >
            Stop Brew
          </button>

          <button
            onClick={() => {
              dispatch({
                type: "advanceBrewStep",
              });
            }}
            className="App-button App-button--positive"
          >
            Next Step
          </button>
        </>
      )}

      {inBrew && brewStep === results.steps.length && (
        <button
          onClick={() => {
            dispatch({
              type: "resetApp",
            });
            setShowBrewButton(false);
            setShowRollButton(true);
          }}
          className="App-button"
        >
          Reset
        </button>
      )}
      {!inBrew && showRollButton && (
        <button
          className={classnames([
            "App-button",
            results.results ? "App-button--secondary" : undefined,
          ])}
          onClick={() => {
            dispatch({
              type: "rollDice",
              newResults: rollDice(),
            });
            setTimeout(() => {
              dispatch({
                type: "stopRollingDice",
                animationStatus: false,
              });
            }, 1500);
          }}
        >
          {results.results ? "Roll Again" : "Roll Dice"}
        </button>
      )}
      {showBrewButton && !inBrew && (
        <button
          className="App-button App-button--positive"
          onClick={() => {
            dispatch({
              type: "setBrewStatus",
              inBrew: !inBrew,
            });
            dispatch({
              type: "resetBrew",
            });
          }}
        >
          Start Brew
        </button>
      )}
    </div>
  );
};

export default DiceButtons;
