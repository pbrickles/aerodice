import {diceOptions} from "../data/diceOptions";

export const rollDice = () => {
  let actions = [
    {step: 1, action: "Rinse the filter with hot water", data: null},
    {step: 20, action: "Press with consistent pressure", data: null},
  ];
  const results = diceOptions.map(die => {
    const {type, results} = die;
    const sides = results.length;
    const side = Math.floor(Math.random() * sides);
    switch (type) {
      case "Grind":
        actions.push({
          step: 3,
          action: `Grind your coffee to ${
            results[side] === "Your Choice"
              ? "the consistency of your choice"
              : "a " + results[side].toLowerCase() + " consistency."
          }`,
          data: null,
        });
        break;

      case "Water Temperature":
        const temp = die.temperature[side];
        actions.push({
          step: 0,
          action: `Heat your water to ${temp}.`,
          data: null,
        });
        break;
      case "Ratio":
        const coffeeWeight = die.weight[side];
        actions.push({
          step: 2,
          action:
            coffeeWeight === "Your Choice"
              ? `Weigh out your chosen amount of coffee.`
              : `Weigh out ${coffeeWeight} of coffee.`,
          data: null,
        });
        actions.push({
          step: 5,
          action: `Add the water to a total weight of ${
            die.water[side].weight
          }`,
          data: null,
        });
        if (die.water[side].dilute) {
          actions.push({
            step: 100,
            action: `Dilute the coffee to taste and share with a loved one!`,
            data: null,
          });
        }
        break;
      case "Method":
        const bloom = die.bloom[side];
        actions.push({
          step: 4,
          action: `Add the coffee to your ${die.position[side]} AeroPress`,
          data: null,
        });
        if (bloom.time > 0) {
          actions.push({
            step: 5,
            action: `Add ${
              bloom.water
            } of water and allow to bloom for ${bloom.time / 1000} seconds`,
            data: {
              time: bloom.time,
            },
          });
        }
        break;
      case "Stir":
        if (die.stir[side] !== "No stir") {
          actions.push({
            step: 8,
            action: `Stir ${
              die.stir[side] !== " Your Choice"
                ? die.stir[side]
                : "however you like!"
            }`,
            data: null,
          });
        }
        break;

      default:
        break;
    }
    return {
      type,
      result: results[side],
    };
  });

  const steps = actions.sort((a, b) => a.step - b.step);
  return {results, steps};
};
