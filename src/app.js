const numberOneInput = document.getElementById("numberOne");
const numberTwoInput = document.getElementById("numberTwo");
const addValuesButton = document.getElementById("addValues");
const subValuesButton = document.getElementById("subValues");
const mulValuesButton = document.getElementById("mulValues");
const divValuesButton = document.getElementById("divValues");
const resultDiv = document.getElementById("result");
const errorBox = document.getElementById("error");

const parseInputs = (...input) => {
  return input.map(str => parseInt(str));
};

const inputsAreValid = (...input) => {
  return input.every(num => typeof num === "number" && !isNaN(num));
};

const handleAdditionError = (inputs, numbers) => {
  const fullMessage = inputs.reduce((message, str, index) => {
    if (inputsAreValid(numbers[index])) {
      return message + "";
    } else {
      return message + `${str} is not a number. `;
    }
  }, "Please enter two valid numbers! ");

  errorBox.classList.remove("invisible");
  errorBox.innerText = fullMessage;
};

const hideErrors = () => {
  errorBox.classList.add("invisible");
};
const calculations=(operation)=>{
  hideErrors();
  const inputs = [numberOneInput.value, numberTwoInput.value];
  const parsedInputs = parseInputs(...inputs);
  if (inputsAreValid(...parsedInputs)) {
    const [numA, numB] = parsedInputs;
    switch(operation){
      case "add":
        resultDiv.innerText = numA + numB;
        break;
        case "sub":
          resultDiv.innerText = numA - numB;
          break;
          case "mul":
          resultDiv.innerText = numA * numB;
          break;
          case "div":
          resultDiv.innerText = numA / numB;
          break;
          default:
            break;
    }
    
  } else {
    resultDiv.innerText = "";
    handleAdditionError(inputs, parsedInputs);
  }
}

hideErrors();
addValuesButton.addEventListener("click", () => calculations("add"));
subValuesButton.addEventListener("click", () => calculations("sub"));
mulValuesButton.addEventListener("click", () => calculations("mul"));
divValuesButton.addEventListener("click", () => calculations("div"));