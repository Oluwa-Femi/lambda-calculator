import React, { useState } from "react";

//import any components needed
import NumberButton from './NumberButton'
//Import your array data to from the provided data file
import { numbers } from "../../../data.js";

const Numbers = (props) => {

const [buttonNumbers, setButtonNumbers] = useState(numbers);
  // STEP 2 - add the imported data to state
  console.log(buttonNumbers);
  return (
    <div>
      {/* STEP 3 - Use .map() to iterate over your array data and return a button
       component matching the name on the provided file. Pass
       it any props needed by the child component*/}
       <div className="numbers">
    {buttonNumbers.map(number => {
    return <NumberButton key={number} 
                          text={number} 
                          addNumber={props.addNumber} />;
    })}
    </div>
    </div>
  );
};

export default Numbers; 