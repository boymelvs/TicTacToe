import React from "react";
import Square from "./Square";

const Boards = ({ squareValue, handleClick }) => {
   const showSquare = (i) => {
      return <Square value={squareValue[i]} onClick={(e) => handleClick(e, i)} />;
   };

   return (
      <div className="squareContainer">
         {showSquare(0)}
         {showSquare(1)}
         {showSquare(2)}
         {showSquare(3)}
         {showSquare(4)}
         {showSquare(5)}
         {showSquare(6)}
         {showSquare(7)}
         {showSquare(8)}
      </div>
   );
};

export default Boards;
