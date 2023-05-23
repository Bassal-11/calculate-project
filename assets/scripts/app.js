const defaultResult = 0;
let currentResult = defaultResult;
let logEntires = [];

//input valued form user
function getUserName() {
  return userInput.value;
}
// function output number result
function greatAndWriteOutput(operation, numberBeforeCalc, calNumber) {
  const calculationDescriptions = `  ${numberBeforeCalc} ${operation}   ${calNumber}`;
  outputResult(currentResult, calculationDescriptions);
}

function writeToLog(operationIdentifier, prevResult, numberInput, Result) {
  const logEntry = {
    operation: operationIdentifier,
    prevResult: prevResult,
    number: numberInput,
    Result: Result,
  };
  logEntires.push(logEntry);
  console.log(logEntires);
}

//condition operation
function calculateResult(calculationType) {
  const enteredNumber = getUserName();

  if (
    calculationType !== "ADD" &&
    calculationType !== "subtract" &&
    calculationType !== "multiply" &&
    calculationType !== "divide"||
    !enteredNumber
  ) {
    return;
  }
  const instilNumber = currentResult;
  let mathOperator;
  if (calculationType === "ADD") {
    currentResult += +enteredNumber;
    mathOperator = "+";
  } else if (calculationType === "subtract") {
    currentResult -= +enteredNumber;
    mathOperator = "-";
  } else if (calculationType === "multiply") {
    currentResult *= +enteredNumber;
    mathOperator = "*";
  } else {
    currentResult /= +enteredNumber;
    mathOperator = "/";
  }
  console.log("this", enteredNumber, instilNumber);
  greatAndWriteOutput(mathOperator, instilNumber, enteredNumber);
  writeToLog(calculationType, instilNumber, enteredNumber, currentResult);
}

//operator

function add() {
  calculateResult("ADD");
}
function subtract() {
  calculateResult("subtract");
}
function multiply() {
  calculateResult("multiply");
}
function divide() {
  calculateResult("divide");
}
//buttons

addBtn.addEventListener("click", add);
subtractBtn.addEventListener("click", subtract);
multiplyBtn.addEventListener("click", multiply);
divideBtn.addEventListener("click", divide);

// currentResult = add(9100, 800);;
//template literals
// culactionResult = `( ${defaultResult} +20)+8*3/2-1`;

// outputResult(currentResult, culactionResult);
