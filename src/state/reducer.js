export const reducer = (state, action) => {
  let brewStep = null;
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
        diceAnimating: action.animationStatus,
      };
    case "setBrewStatus":
      return {
        ...state,
        inBrew: action.inBrew,
      };
    case "advanceBrewStep":
      brewStep = state.brewStep + 1;
      return {
        ...state,
        brewStep,
      };
    case "retreatBrewStep":
      brewStep = state.brewStep > 0 ? state.brewStep - 1 : 0;
      return {
        ...state,
        brewStep,
      };
    case "resetBrew":
      return {
        ...state,
        brewStep: 0,
      };
    case "resetApp":
      return {
        ...state,
        inBrew: false,
        results: [],
        brewStep: 0,
        water: 0,
      };
    default:
      return state;
  }
};
