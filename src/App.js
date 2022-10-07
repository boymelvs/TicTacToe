import React, { useState, useEffect } from "react";
import Boards from "./components/Boards";
import "./styles/css/styles.css";

function App() {
   const [squareValue, setSquareValue] = useState(Array(9).fill(null));
   const [isX, setIsX] = useState(true);
   const [status, setStatus] = useState({ isWin: false, player: "X" });

   useEffect(() => {
      const checkWinner = () => {
         const winningPatterns = [
            [0, 4, 8],
            [6, 4, 2],
            [0, 1, 2],
            [3, 4, 5],
            [6, 7, 8],
            [0, 3, 6],
            [1, 4, 7],
            [2, 5, 8],
         ];

         for (let item of winningPatterns) {
            const [x, y, z] = item;
            if (squareValue[x] && squareValue[x] === squareValue[y] && squareValue[x] === squareValue[z]) {
               setStatus({ ...status, isWin: true, player: squareValue[x] });
            }
         }
      };

      if (!status.isWin) {
         checkWinner();
      }
   }, [squareValue, status]);

   const handleClick = (e, idx) => {
      e.preventDefault();

      if (status.isWin || squareValue[idx]) {
         return;
      }

      squareValue[idx] = isX ? "X" : "O";
      setSquareValue([...squareValue]);
      setStatus({ ...status, isWin: false, player: !isX ? "X" : "O" });
      setIsX(!isX);
   };

   const playAgain = () => {
      setSquareValue(Array(9).fill(null));
      setIsX(true);
      setStatus({ isWin: false, player: "X" });
   };

   return (
      <>
         <div className="App">
            <h1>Tic Tac Toe</h1>

            <Boards squareValue={squareValue} handleClick={handleClick} />

            <h2 className="status">{!squareValue.includes(null) ? "It's a Draw!" : status.isWin ? `"${status.player}" has won!` : `${status.player}'s turn!`}</h2>

            <input type="button" value="Play Again!" className="playAgainBtn" onClick={playAgain} />
         </div>
         <div className="codeBy">
            <span>Written & Coded by </span>
            <a href="https://github.com/boymelvs" target="_blank" rel="noreferrer noopener">
               <span>boymelvs</span>
            </a>
         </div>
      </>
   );
}

export default App;
