import React from "react";

const NumberButton = (props) => {
  const {buttonContent} = props;
  return (
    <>
      {/* Display a button element rendering the data being passed down from the parent container on props */}
    </>
    <button className="numButton">{buttonContent}</button>
  );
};
export default NumberButton;