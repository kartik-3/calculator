/* Global Variables */
let res = document.querySelector("#result");
let operation = "";
let first_number = 0,
  second_number = 0,
  equal_clicked = false,
  operator_clicked = false,
  multiple_operations = false;

/* Number Query Selectors */
const num1 = document.querySelector("#num1");
const num2 = document.querySelector("#num2");
const num3 = document.querySelector("#num3");
const num4 = document.querySelector("#num4");
const num5 = document.querySelector("#num5");
const num6 = document.querySelector("#num6");
const num7 = document.querySelector("#num7");
const num8 = document.querySelector("#num8");
const num9 = document.querySelector("#num9");
const num0 = document.querySelector("#num0");
const dec = document.querySelector("#dec");

/* Function  Query Selectors */
const add = document.querySelector("#add");
const sub = document.querySelector("#sub");
const mul = document.querySelector("#mul");
const div = document.querySelector("#div");
const mod = document.querySelector("#mod");
const clr = document.querySelector("#clr");
const del = document.querySelector("#del");
const equal = document.querySelector("#equal");

/* Digit press event listeners */
num1.addEventListener("click", function (event) {
  if (equal_clicked) {
    clear();
    equal_clicked = false;
  }
  if (operator_clicked) {
    clear();
    operator_clicked = false;
  }
  display("1");
});

num2.addEventListener("click", function (event) {
  if (equal_clicked) {
    clear();
    equal_clicked = false;
  }
  if (operator_clicked) {
    clear();
    operator_clicked = false;
  }
  display("2");
});

num3.addEventListener("click", function (event) {
  if (equal_clicked) {
    clear();
    equal_clicked = false;
  }
  if (operator_clicked) {
    clear();
    operator_clicked = false;
  }
  display("3");
});

num4.addEventListener("click", function (event) {
  if (equal_clicked) {
    clear();
    equal_clicked = false;
  }
  if (operator_clicked) {
    clear();
    operator_clicked = false;
  }
  display("4");
});

num5.addEventListener("click", function (event) {
  if (equal_clicked) {
    clear();
    equal_clicked = false;
  }
  if (operator_clicked) {
    clear();
    operator_clicked = false;
  }
  display("5");
});

num6.addEventListener("click", function (event) {
  if (equal_clicked) {
    clear();
    equal_clicked = false;
  }
  if (operator_clicked) {
    clear();
    operator_clicked = false;
  }
  display("6");
});

num7.addEventListener("click", function (event) {
  if (equal_clicked) {
    clear();
    equal_clicked = false;
  }
  if (operator_clicked) {
    clear();
    operator_clicked = false;
  }
  display("7");
});

num8.addEventListener("click", function (event) {
  if (equal_clicked) {
    clear();
    equal_clicked = false;
  }
  if (operator_clicked) {
    clear();
    operator_clicked = false;
  }
  display("8");
});

num9.addEventListener("click", function (event) {
  if (equal_clicked) {
    clear();
    equal_clicked = false;
  }
  if (operator_clicked) {
    clear();
    operator_clicked = false;
  }
  display("9");
});

num0.addEventListener("click", function (event) {
  if (equal_clicked) {
    clear();
    equal_clicked = false;
  }
  if (operator_clicked) {
    clear();
    operator_clicked = false;
  }
  display("0");
});

dec.addEventListener("click", function (event) {
  if (equal_clicked) {
    clear();
    equal_clicked = false;
  }
  if (operator_clicked) {
    clear();
    operator_clicked = false;
  }
  display(".");
});

/* Operations */
add.addEventListener("click", function () {
  if (multiple_operations) {
    let temp_num = evaluate(first_number, res.value);
    first_number = temp_num;
    multiple_operations = false;
  } else {
    first_number = res.value;
  }
  operation = "+";
  operator_clicked = true;
  multiple_operations = true;
});

sub.addEventListener("click", function () {
  if (multiple_operations) {
    let temp_num = evaluate(first_number, res.value);
    first_number = temp_num;
    multiple_operations = false;
  } else {
    first_number = res.value;
  }
  operation = "-";
  operator_clicked = true;
  multiple_operations = true;
});

mul.addEventListener("click", function () {
  if (multiple_operations) {
    let temp_num = evaluate(first_number, res.value);
    first_number = temp_num;
    multiple_operations = false;
  } else {
    first_number = res.value;
  }
  operation = "*";
  operator_clicked = true;
  multiple_operations = true;
});

div.addEventListener("click", function () {
  if (multiple_operations) {
    let temp_num = evaluate(first_number, res.value);
    first_number = temp_num;
    multiple_operations = false;
  } else {
    first_number = res.value;
  }
  operation = "/";
  operator_clicked = true;
  multiple_operations = true;
});

mod.addEventListener("click", function () {
  if (multiple_operations) {
    let temp_num = evaluate(first_number, res.value);
    first_number = temp_num;
    multiple_operations = false;
  } else {
    first_number = res.value;
  }
  operation = "%";
  operator_clicked = true;
  multiple_operations = true;
});

/* Special operations */
equal.addEventListener("click", function () {
  res.value = evaluate(first_number, res.value);
});

clr.addEventListener("click", function () {
  clear();
});

function clear() {
  res.value = "0";
}

del.addEventListener("click", function () {
    let curr_val = res.value;
    res.value = curr_val.slice(0,-1);
})

/* Display Function */
function display(num) {
  if (res.value == "0") {
    if (num == ".") {
      res.value += num;
    } else {
      res.value = num;
    }
  } else {
    res.value += num;
  }
}

/* Evaluate function */
function evaluate(n1, n2) {
  equal_clicked = true;
  let answer = 0;
  const f = parseFloat(n1);
  const s = parseFloat(n2);
  switch (operation) {
    case "+":
      answer = f + s;
      break;
    case "-":
      answer = f - s;
      break;
    case "*":
      answer = f * s;
      break;
    case "/":
      answer = f / s;
      break;
    case "%":
      answer = Math.floor(f % s);
      break;
    default:
      answer = res.value;
      break;
  }
  operation = "";
  return answer;
}
