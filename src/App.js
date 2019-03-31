import React from "react";
import {StateProvider} from "./state/StateProvider";
import "./App.scss";
import DiceContainer from "./components/DiceContainer";

const App = () => {
  const initialState = {
    results: [],
    diceAnimating: false,
    inBrew: false,
  };


  const reducer = (state, action) => {
    switch (action.type) {
      case "rollDice":
        return {
          ...state,
          results: action.newResults,
          diceAnimating: true,
        };
      case "stopRollingDice":
        return {
          ...state,
          diceAnimating: action.animationStatus
        }
      case "setBrewStatus":
        return {
          ...state,
          inBrew: action.inBrew,
        };
      default:
        return state;
    }
  };

  return (
    <StateProvider initialState={initialState} reducer={reducer}>
      <div className="App">
        <header className="App-header">
          <h1>AeroDice</h1>
          <p>Make great Aeropress coffee, without thinking!</p>
        </header>
        <main className="App-main">
          <DiceContainer />
        </main>
        <footer className="App-footer">
          <p>
            Make by{" "}
            <a
              href="https://github.com/pbrickles"
              target="_blank"
              rel="noopener noreferrer"
              className="App-link"
            >
              PB
            </a>
          </p>
          <p>
            Inspired by{" "}
            <a
              href="https://jimseven.com/2017/12/06/coffee-brewing-dice/"
              target="_blank"
              rel="noopener noreferrer"
              className="App-link"
            >
              James Hoffman's awesome Aeropress brewing dice
            </a>
          </p>
        </footer>
      </div>
    </StateProvider>
  );
};

export default App;
