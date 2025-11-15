export default function cacluateWinner(square) {
    //* conditons that will fetch winner --> numbers are indexes
  const lines = [
      // todo - loop thru each conditon to check --> if matches --> winner

    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];

  //! looping and destructuring array to loop for each index too
  for (let i = 0; i < lines.length; i++) {
    const [a, b, c] = lines[i];

    if (square[a] && square[a] === square[b] && square[a]===square[c]) {
        return square[a]
    }
  }
  return null
}

const square = [
    
    null, null, null, 
    "X", "X", "X", 
    null, null, null
];

console.log(cacluateWinner(square))