export const diceOptions = [
  {
    type: "Grind",
    results: [
      "Your Choice",
      "Fine",
      "Medium Fine",
      "Medium",
      "Very Fine",
      "Coarse",
    ],
  },
  {
    type: "Water Temperature",
    results: [
      "Your Choice",
      "75°C | 167°F",
      "80°C | 176°F",
      "85°C | 185°F",
      "90°C | 194°F",
      "95°C | 203°F",
    ],
  },
  {
    type: "Ratio",
    results: [
      "Your Choice",
      "12g Coffee to 200g Water",
      "15g Coffee to 200g Water",
      "15g Coffee to 250g Water",
      "24g Coffee to 200g Water (Dilute to share)",
      "30g Coffee to 200g Water (Dilute to share)",
    ],
  },
  {
    type: "Method",
    results: [
      "Upright | No Bloom",
      "Upright | 30s Bloom | 30g Water",
      "Upright | 30s Bloom | 60g Water",
      "Inverted | No Bloom",
      "Inverted | 30s Bloom | 30g Water",
      "Inverted | 30s Bloom | 60g Water",
    ],
  },
  {
    type: "Stir",
    results: [
      "Your Choice",
      "No stir",
      "N-S-E-W, before pressing",
      "1x, clockwise before pressing",
      "2x, clockwise before pressing",
      "1x clockwise, 1x anti-clockwise, before pressing",
    ],
  },
];

export const rollDice = () => {
  const results = diceOptions.map(die => {
    const {type, results} = die;
    const sides = results.length;
    const side = Math.floor(Math.random() * sides);
    return {
      type,
      result: results[side],
    };
  });
  return results;
};
