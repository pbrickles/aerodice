export const reducer = (state, action) => {
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
