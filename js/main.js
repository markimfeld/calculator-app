const DEFAULT_THEME = "default-theme";
const SECOND_THEME = "second-theme";
const THIRD_THEME = "third-theme";

const LEFT_TOGGLE = "btn-toggle-left";
const RIGHT_TOGGLE = "btn-toggle-right";

const btnSwitchTheme = document.getElementById("btn-switch-theme");
const container = document.getElementById("container");

let currentTheme = localStorage.getItem("theme");

console.log(currentTheme);

if (currentTheme !== null) {
  if (currentTheme === DEFAULT_THEME) {
    btnSwitchTheme.classList.add(LEFT_TOGGLE);
  } else if (currentTheme === SECOND_THEME) {
    btnSwitchTheme.classList.remove(LEFT_TOGGLE);
  } else {
    btnSwitchTheme.classList.add(RIGHT_TOGGLE);
  }
  container.classList.add(currentTheme);
} else {
  container.classList.add(DEFAULT_THEME);
  localStorage.setItem("theme", DEFAULT_THEME);
}

btnSwitchTheme.addEventListener("click", () => {
  currentTheme = localStorage.getItem("theme");

  if (currentTheme === DEFAULT_THEME) {
    container.classList.replace(DEFAULT_THEME, SECOND_THEME);
    btnSwitchTheme.classList.remove(LEFT_TOGGLE);
    localStorage.setItem("theme", SECOND_THEME);
  } else if (currentTheme === SECOND_THEME) {
    container.classList.replace(SECOND_THEME, THIRD_THEME);
    btnSwitchTheme.classList.add(RIGHT_TOGGLE);
    localStorage.setItem("theme", THIRD_THEME);
  } else {
    container.classList.replace(THIRD_THEME, DEFAULT_THEME);
    btnSwitchTheme.classList.replace(RIGHT_TOGGLE, LEFT_TOGGLE);
    localStorage.setItem("theme", DEFAULT_THEME);
  }
});

const display = document.getElementById("display");

let firstGroup = 0;
let secondGroup = 0;

let currentOperator = "";

const btnSeven = document.getElementById("btn7");
btnSeven.addEventListener("click", () => {
  if (display.innerHTML !== "0") {
    display.innerHTML += "7";
  } else {
    display.innerHTML = "7";
  }
});

const btnEight = document.getElementById("btn8");
btnEight.addEventListener("click", () => {
  if (display.innerHTML !== "0") {
    display.innerHTML += "8";
  } else {
    display.innerHTML = "8";
  }
});

const btnNine = document.getElementById("btn9");
btnNine.addEventListener("click", () => {
  if (display.innerHTML !== "0") {
    display.innerHTML += "9";
  } else {
    display.innerHTML = "9";
  }
});

const btnFour = document.getElementById("btn4");
btnFour.addEventListener("click", () => {
  if (display.innerHTML !== "0") {
    display.innerHTML += "4";
  } else {
    display.innerHTML = "4";
  }
});

const btnFive = document.getElementById("btn5");
btnFive.addEventListener("click", () => {
  if (display.innerHTML !== "0") {
    display.innerHTML += "5";
  } else {
    display.innerHTML = "5";
  }
});

const btnSix = document.getElementById("btn6");
btnSix.addEventListener("click", () => {
  if (display.innerHTML !== "0") {
    display.innerHTML += "6";
  } else {
    display.innerHTML = "6";
  }
});

const btnOne = document.getElementById("btn1");
btnOne.addEventListener("click", () => {
  if (display.innerHTML !== "0") {
    display.innerHTML += "1";
  } else {
    display.innerHTML = "1";
  }
});

const btnTwo = document.getElementById("btn2");
btnTwo.addEventListener("click", () => {
  if (display.innerHTML !== "0") {
    display.innerHTML += "2";
  } else {
    display.innerHTML = "2";
  }
});

const btnThird = document.getElementById("btn3");
btnThird.addEventListener("click", () => {
  if (display.innerHTML !== "0") {
    display.innerHTML += "3";
  } else {
    display.innerHTML = "3";
  }
});

const btnZero = document.getElementById("btn0");
btnZero.addEventListener("click", () => {
  if (display.innerHTML !== "0") {
    display.innerHTML += "0";
  } else {
    display.innerHTML = "0";
  }
});

const btnDecimal = document.getElementById("btnDecimal");
btnDecimal.addEventListener("click", () => {
  if (display.innerHTML !== "0") {
    display.innerHTML += ".";
  } else {
    display.innerHTML = ".";
  }
});

const btnDelete = document.getElementById("btnDel");
btnDelete.addEventListener("click", () => {
  display.innerHTML = display.innerHTML.substring(
    0,
    display.innerHTML.length - 1
  );
  if (display.innerHTML.length === 0) {
    display.innerHTML = "0";
  }
});

const btnReset = document.getElementById("btnReset");
btnReset.addEventListener("click", () => {
  display.innerHTML = "0";
});

const btnSum = document.getElementById("btnSum");
btnSum.addEventListener("click", () => {
  firstGroup = parseInt(display.innerHTML);
  display.innerHTML = "0";
  currentOperator = "+";
});

const btnSub = document.getElementById("btnSub");
btnSub.addEventListener("click", () => {
  firstGroup = parseInt(display.innerHTML);
  display.innerHTML = "0";
  currentOperator = "-";
});

const btnMul = document.getElementById("btnMul");
btnMul.addEventListener("click", () => {
  firstGroup = parseInt(display.innerHTML);
  display.innerHTML = "0";
  currentOperator = "*";
});

const btnDiv = document.getElementById("btnDiv");
btnDiv.addEventListener("click", () => {
  firstGroup = parseInt(display.innerHTML);
  display.innerHTML = "0";
  currentOperator = "/";
});

const btnEqual = document.getElementById("btnEqual");
btnEqual.addEventListener("click", () => {
  secondGroup = parseInt(display.innerHTML);

  if (currentOperator === "+") {
    display.innerHTML = firstGroup + secondGroup;
  } else if (currentOperator === "-") {
    display.innerHTML = firstGroup - secondGroup;
  } else if (currentOperator === "*") {
    display.innerHTML = firstGroup * secondGroup;
  } else if (currentOperator === "/") {
    if (secondGroup === 0) {
      alert("Division por cero no permitido!");
      display.innerHTML = 0;
    } else {
      display.innerHTML = firstGroup / secondGroup;
    }
  }
});
