import React, { useState } from 'react';
import './App.css';

function App() {

  const [number, setNumber] = useState("");
  const [error, setError] = useState(false);
  const [result, setResult] = useState("");

  function changeNumber(event) {
    console.log(event.target.value);
    setNumber(event.target.value);
  }

  function calculateDecimal(myArray) {
    let result = 0
    var i;
    for (i = myArray.length - 1; i >= 0; i--) {
        let power = myArray.length - 1 - i;
        if (myArray[i] == 1) {
            result += Math.pow(2, power)    
        }
    }
    return result;
}


function convertBinaryToDecimal(myNumber) {
    let myArray = myNumber.split('')
    myArray = myArray.map(number => parseInt(number))
    for (var i = 0; i < myArray.length; i++) {
        if (myArray[i] !== 0 && myArray[i] !== 1) {
          setError(true);
            return false;
        }
    }
    let result = calculateDecimal(myArray)
    return result;

}

  function convertDecimal() {
    let result = convertBinaryToDecimal(number);
    if (result != false) {
      if (error == true) {
        setError(false);
      }
      setResult(result);
    }
  }

  return (
    <div className="App">
      <label htmlFor="binary"> Enter your binary number: </label>
      <input type="text" name="binary" onChange={changeNumber} value={number} />
      <button className="submit" onClick={convertDecimal}> Submit </button>
      <label htmlFor="result"> This is the decimal number: </label>
      <input type="text" className="result" name="result" value={result} readOnly={true} disabled={true} />
      {error && <div className="error">
        Invalid number! Only 1s and 0s allowed in input!
      </div>
      }
    </div>
  );
}

export default App;
