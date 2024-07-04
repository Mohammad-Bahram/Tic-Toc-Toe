import React from "react";
const Square = ({ value, onSquareClick }) => {
  return (
    <div
      className="w-full h-full bg-slate-200 text-[50px] text-center leading-[95px] "
      onClick={onSquareClick}
    >
      {value}
    </div>
  );
};
export default Square;
