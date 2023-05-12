const defaultResult = 0;
let currentResult = defaultResult;
let logEntires = [];

console.log(typeof([]));
//input valued form user
function getUserName() {
  return parseInt(userInput.value);
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

function add() {
  const enteredNumber = getUserName();
  const instilNumber = currentResult;
  currentResult += +enteredNumber;
  greatAndWriteOutput("+", instilNumber, enteredNumber);
  writeToLog('add', instilNumber, enteredNumber,currentResult);
}
function subtract() {
  const enteredNumber = getUserName();
  currentResult -= +enteredNumber;
  const instilNumber = currentResult;

  greatAndWriteOutput("-", instilNumber, enteredNumber);
  writeToLog('subtract', instilNumber, enteredNumber,currentResult);

}
function multiply() {
  const enteredNumber = getUserName();
  const instilNumber = currentResult;

  currentResult *= currentResult + enteredNumber;
  greatAndWriteOutput("*", instilNumber, enteredNumber);
  writeToLog('multiply', instilNumber, enteredNumber,currentResult);

}
function divide() {
  const instilNumber = currentResult;

  const enteredNumber = getUserName();
  currentResult /= currentResult / +enteredNumber;
  greatAndWriteOutput("/", instilNumber, enteredNumber);
  writeToLog('divide', instilNumber, enteredNumber,currentResult);

}

addBtn.addEventListener("click", add);
subtractBtn.addEventListener("click", subtract);
multiplyBtn.addEventListener("click", multiply);
divideBtn.addEventListener("click", divide);

// currentResult = add(9100, 800);;
//template literals
// culactionResult = `( ${defaultResult} +20)+8*3/2-1`;

// outputResult(currentResult, culactionResult);
