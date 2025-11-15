# Tic Tac Toe Game 🎮

A classic Tic Tac Toe game built with React, featuring confetti celebrations when you win!

## Features

- ✨ Interactive 3x3 game board
- 🎉 Confetti effect on winning
- 🔄 Game reset functionality
- 📱 Clean, responsive design
- ⚡ Built with Vite + React

## Technologies Used

- React (Hooks: `useReducer`, `useEffect`)
- react-rewards (for confetti animations)
- Vite (for fast development)

## Installation

```bash
npm install
```

## Run the Game

```bash
npm run dev
```

## How to Play

1. Click on any empty square to place your mark (X or O)
2. Players alternate turns
3. First player to get 3 in a row wins!
4. Click "Start Game" to reset and play again

## Project Structure

```
src/
├── components/
│   ├── Game.jsx      # Main game logic with useReducer
│   ├── Board.jsx     # Game board grid
│   └── Square.jsx    # Individual square button
└── utils/
    └── helper.js     # Winner calculation logic
```

Enjoy the game! 🎯
