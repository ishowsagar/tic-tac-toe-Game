import Board from "./Board";
import { useReducer, useEffect } from "react";
import { useReward } from "react-rewards";
import cacluateWinner from "../utils/helper";

// *inline styles */
const infoStyles = {
  width: "200px",
  margin: "0px auto",
};

const buttonStyle = {
  width: "100%",
  marginBlockStart: "7px",
  backgroundColor: "white",
  cursor: "pointer",
  fontSize: "1.7rem",
  padding: "2px 4px",
  borderRadius: "4px",
  border: "none",
  color: "black",
};

const headerStyle = {
  textAlign: "center",
  color: "Purple",
  fontWeight: "bold",
};

export default function Game() {
  const { reward } = useReward("rewardId", "confetti", {
    angle: 90, // Direction
    elementCount: 1000, // Number of particles
    spread: 900, // How wide
    startVelocity: 55, // How fast
    lifetime: 150, // Duration
  });

  // state management just like usState mutlies
  const [state, dispatch] = useReducer(
    //  todo - cases for each update
    (state, action) => {
      switch (action.type) {
        case "handleClick": {
          return { ...state, board: action.board, xIsNext: action.xIsNext };
        }
        // reset game all moves back to new game
        case "Render_New_Game": {
          return { ...state, board: action.board, xIsNext: false };
        }
        default: {
          return state;
        }
      }
    },
    {
      board: Array(9).fill(null),
      xIsNext: false,
    }
  );

  // ! pull props after they are defined above
  const { board, xIsNext } = state;
  const winner = cacluateWinner(board);

  // show confetti and effects only when winner is declared
  useEffect(() => {
    console.log("Winner detected:", winner);
    if (winner) {
      console.log("Triggering confetti!");
      reward(); // 🎉 Fires confetti!
    }
  }, [winner, reward]);

  function handleClick(index) {
    const virtualBoard = [...board];
    // if user has clicked occupied space or has game won --> no more clicks
    if (winner || virtualBoard[index]) {
      return;
    }

    // fillin in X or O when user clicks
    // ! accesing element of board that user would click
    // ? access el of board has this index because --> user clicks --> onCLick --> grabs index from it
    // * --> fetch that index --> assign new value to button

    virtualBoard[index] = xIsNext ? "X" : "O";
    // when user clicks this component --> dispatch this object up to reducer --> update the states accordingly
    dispatch({ type: "handleClick", board: virtualBoard, xIsNext: !xIsNext });
  }
  function jumpTo() {
    return;
  }
  function renderMoves() {
    return (
      <button
        style={buttonStyle}
        onClick={() => {
          dispatch({ type: "Render_New_Game", board: Array(9).fill(null) });
        }}
      >
        Start Game
      </button>
    );
  }
  return (
    <>
      <h1 style={headerStyle}>
        <span id="rewardId" />
        Tic Tac Toe🤹
      </h1>
      <Board squares={board} onClick={handleClick} />
      <div style={infoStyles}>
        <p style={{ fontWeight: "bold" }}>
          {winner
            ? "winner :" + winner
            : "Next player : " + (xIsNext ? "X" : "O")}
        </p>
        {renderMoves()}
      </div>
    </>
  );
}
