import {CalculationService} from "./utils/calculation.service";
import {ErrorService} from "./utils/error.service";
import {OperationService} from "./utils/operations.service"
import "../main.css"
const operationService = new OperationService();
const errorService = new ErrorService();
const calculationService = new CalculationService();

const execute = (errorService, operationService, calculationService) => {
  errorService.hideErrors();
  operationService.clickToAdd(() => {
    errorService.hideErrors();
    calculationService.calculations("add");
  });
  operationService.clickToSubtract(() => {
    errorService.hideErrors();
    calculationService.calculations("sub");
  });
  operationService.clicktoMultiply(() => {
    errorService.hideErrors();
    calculationService.calculations("mul");
  });
  operationService.clickToDivide(() => {
    errorService.hideErrors();
    calculationService.calculations("div");
  });
};
execute(errorService, operationService, calculationService);
