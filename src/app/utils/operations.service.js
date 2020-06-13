class OperationService {
  constructor() {
    this.addValuesButton = document.getElementById("addValues");
    this.subValuesButton = document.getElementById("subValues");
    this.mulValuesButton = document.getElementById("mulValues");
    this.divValuesButton = document.getElementById("divValues");
  }
  clickToAdd(fn) {
    this.addValuesButton.addEventListener("click", fn);
  }
  clickToSubtract(fn) {
    this.subValuesButton.addEventListener("click", fn);
  }
  clicktoMultiply(fn) {
    this.mulValuesButton.addEventListener("click", fn);
  }
  clickToDivide(fn) {
    this.divValuesButton.addEventListener("click", fn);
  }
}
