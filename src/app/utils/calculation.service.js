import {parseInputs} from "./inputs-formatter";
import {inputsAreValid} from "./validating-inputs";
export class CalculationService {
  constructor() {
    this.numberOneInput = document.getElementById("numberOne");
    this.numberTwoInput = document.getElementById("numberTwo");
    this.resultDiv = document.getElementById("result");
  }
  getValues() {
    return [this.numberOneInput.value, this.numberTwoInput.value];
  }
  calculations(operation) {
    const inputs = this.getValues();
    const parsedInputs = parseInputs(...inputs);
    if (inputsAreValid(...parsedInputs)) {
      const [numA, numB] = parsedInputs;
      switch (operation) {
        case "add":
          this.resultDiv.innerText = numA + numB;
          break;
        case "sub":
          this.resultDiv.innerText = numA - numB;
          break;
        case "mul":
          this.resultDiv.innerText = numA * numB;
          break;
        case "div":
          this.resultDiv.innerText = numA / numB;
          break;
        default:
          break;
      }
    } else {
      this.resultDiv.innerText = "";
      errorService.handleAdditionError(inputs, parsedInputs);
    }
  };
}
