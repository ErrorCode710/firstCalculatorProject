const num1 = document.querySelector("#numberButton1");
const num2 = document.querySelector("#numberButton2");
const num3 = document.querySelector("#numberButton3");
const num4 = document.querySelector("#numberButton4");
const num5 = document.querySelector("#numberButton5");
const num6 = document.querySelector("#numberButton6");
const num7 = document.querySelector("#numberButton7");
const num8 = document.querySelector("#numberButton8");
const num9 = document.querySelector("#numberButton9");
const num0 = document.querySelector("#numberButton0");

const add = document.querySelector("#addButton");
const subtract = document.querySelector("#subtractButton");
const multiply = document.querySelector("#multiplyButton");
const divide = document.querySelector("#divideButton");
const calculate = document.querySelector("#equalButton");
const display = document.querySelector("#display");
const clear = document.querySelector("#resetButton");
const backSpace = document.querySelector("#backSpaceButton");
const result = document.querySelector("#totalCalculation");

const appearanceButton = document.querySelector("#appearanceMode");
const section = document.querySelectorAll(".section");
const button = document.querySelectorAll(".button-appearance");
const allElements = document.querySelectorAll("*");
const imgElement = appearanceButton.querySelector("img");

num1.addEventListener("click", () => appendDisplay(1));
num2.addEventListener("click", () => appendDisplay(2));
num3.addEventListener("click", () => appendDisplay(3));
num4.addEventListener("click", () => appendDisplay(4));
num5.addEventListener("click", () => appendDisplay(5));
num6.addEventListener("click", () => appendDisplay(6));
num7.addEventListener("click", () => appendDisplay(7));
num8.addEventListener("click", () => appendDisplay(8));
num9.addEventListener("click", () => appendDisplay(9));
num0.addEventListener("click", () => appendDisplay(0));

appearanceButton.addEventListener("click", () => lightmode());

add.addEventListener("click", () => appendDisplay("+"));
subtract.addEventListener("click", () => appendDisplay("-"));
multiply.addEventListener("click", () => appendDisplay("*"));
divide.addEventListener("click", () => appendDisplay("/"));
backSpace.addEventListener("click", () => removeLastCharacter());
clear.addEventListener("click", () => clearDisplay());
calculate.addEventListener("click", () => calculation());

const operators = ["+", "-", "*", "/", "%", "=", ".", "Enter"];

function appendDisplay(input) {
  if (!isNaN(input) || operators.includes(input)) {
    if (display.innerText === "0" && !operators.includes(input)) {
      display.innerText = input;
    } else {
      display.innerText += input;
    }
  }

  return input;
}
function clearDisplay() {
  display.innerText = "0";
  result.innerText = "0";
  currentContent = "";
}
function removeLastCharacter() {
  currentContent = currentContent.slice(0, -1);
  display.innerText = currentContent.length > 0 ? currentContent : "0";
}

document.addEventListener("keydown", (event) => {
  const allowedKeys = `0123456789+-*/%=.`;
  if (allowedKeys.includes(event.key)) {
    appendDisplay(event.key);
  } else if (event.key === "Backspace") {
    removeLastCharacter();
  } else if (event.key === "Enter") {
    event.preventDefault(); // Prevent default behavior like form submission
    calculation();
  }
});

function calculation() {
  const expression = display.innerText;
  result.innerText = evaluateExpression(expression);
}

function evaluateExpression(expression) {
  try {
    const result = new Function("return " + expression)();
    return result;
  } catch (error) {
    return "Error";
  }
}

function lightmode() {
  document.body.style.backgroundColor = "white";

  const sections = document.querySelectorAll(".section");
  sections.forEach((section) => {
    section.style.backgroundColor = "var(--clr-1)";
  });

  const buttons = document.querySelectorAll(".button-appearance");
  buttons.forEach((button) => {
    button.style.backgroundColor = "var(--clr-1)";
  });
  allElements.forEach((element) => {
    if (element !== equalButton && element !== clear) {
      element.style.color = "var(--primary-color)";
    }
  });
}

function darkmode() {
  document.body.style.backgroundColor = "var(--primary-color)";

  const sections = document.querySelectorAll(".section");
  sections.forEach((section) => {
    section.style.backgroundColor = "var(--secondary-color)";
  });

  const buttons = document.querySelectorAll(".button-appearance");
  buttons.forEach((button) => {
    button.style.backgroundColor = "var(--tertiary-color)";
  });
  allElements.forEach((element) => {
    if (element !== equalButton && element !== clear) {
      element.style.color = "white";
    }
  });
}

let isLightMode = false;
console.log(isLightMode);

function toggleMode() {
  if (isLightMode) {
    darkmode();

    imgElement.src = "img/Group_58.png";
  } else {
    lightmode();

    imgElement.src = "img/Vector.png";
  }

  isLightMode = !isLightMode;
}

appearanceButton.addEventListener("click", toggleMode);
const maxLength = 24;
let currentContent = "";

function appendDisplay(input) {
  if (!isNaN(input) || operators.includes(input)) {
    if (currentContent.length >= maxLength) {
      currentContent = currentContent.slice(input.length);
    }

    currentContent += input;
    display.innerText = currentContent;
  }
}
