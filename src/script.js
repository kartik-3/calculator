/* Global Variables */

let operation = "";
let first_number = 0,
  second_number = 0,
  equal_clicked = false,
  operator_clicked = false,
  multiple_operations = false;

/* Number Query Selectors */

const $num1 = document.querySelector("#num1");
const $num2 = document.querySelector("#num2");
const $num3 = document.querySelector("#num3");
const $num4 = document.querySelector("#num4");
const $num5 = document.querySelector("#num5");
const $num6 = document.querySelector("#num6");
const $num7 = document.querySelector("#num7");
const $num8 = document.querySelector("#num8");
const $num9 = document.querySelector("#num9");
const $num0 = document.querySelector("#num0");
const $dec = document.querySelector("#dec");

/* Function  Query Selectors */

const $add = document.querySelector("#add");
const $sub = document.querySelector("#sub");
const $mul = document.querySelector("#mul");
const $div = document.querySelector("#div");
const $mod = document.querySelector("#mod");
const $clr = document.querySelector("#clr");
const $del = document.querySelector("#del");
const $equal = document.querySelector("#equal");
let $res = document.querySelector("#result");

/* Number Key Press function */

function number_fun(num) {
  if (equal_clicked) {
    clear();
    equal_clicked = false;
  }
  if (operator_clicked) {
    clear();
    operator_clicked = false;
  }
  display(num);
}

/* Operation Key Press Function */

function operation_fun(op) {
  if (multiple_operations) {
    let temp_num = evaluate(first_number, $res.value);
    first_number = temp_num;
    multiple_operations = false;
  } else {
    first_number = $res.value;
  }
  operation = op;
  operator_clicked = true;
  multiple_operations = true;
  highlight_operation(operation, true);
}

/* Clear Key Press Function */

function clear() {
  $res.value = "0";
}

/* Character Delete Key Press Function */

function delete_char() {
  let curr_val = $res.value;
  $res.value = curr_val.slice(0, -1);
}

/* Display Function */

function display(num) {
  if ($res.value == "0") {
    if (num == ".") {
      $res.value += num;
    } else {
      $res.value = num;
    }
  } else {
    $res.value += num;
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
      answer = $res.value;
      break;
  }
  highlight_operation(operation, false);
  return answer;
}

/* Change Operation Key Highlight Function */

function highlight_operation(op, val) {
  if (val) {
    switch (op) {
      case "+":
        add.classList.add("highlighted-operation");
        break;
      case "-":
        sub.classList.add("highlighted-operation");
        break;
      case "*":
        mul.classList.add("highlighted-operation");
        break;
      case "/":
        div.classList.add("highlighted-operation");
        break;
      case "%":
        mod.classList.add("highlighted-operation");
        break;
    }
  } else if (!val) {
    switch (op) {
      case "+":
        add.classList.remove("highlighted-operation");
        break;
      case "-":
        sub.classList.remove("highlighted-operation");
        break;
      case "*":
        mul.classList.remove("highlighted-operation");
        break;
      case "/":
        div.classList.remove("highlighted-operation");
        break;
      case "%":
        mod.classList.remove("highlighted-operation");
        break;
    }
    operation = "";
  }
}

/* Keyboard Press Function */

function key_press(event) {
  let key = event.which;
  let operation_keys = [42, 43, 45, 47, 37];
  if ((key >= 48 && key <= 57) || key == 46) {
    number_fun(String.fromCharCode(key));
    delete_char();
  } else if (operation_keys.includes(key)) {
    operation_fun(String.fromCharCode(key));
    event.preventDefault();
  } else if (key == 61 || key == 13) {
    $res.value = evaluate(first_number, $res.value);
    event.preventDefault();
  } else {
    console.warn("Enter a number or an operation");
    event.preventDefault();
  }
}

/* Digit Press Event listeners */

$num1.addEventListener("click", function () {
  number_fun("1");
});

$num2.addEventListener("click", function () {
  number_fun("2");
});

$num3.addEventListener("click", function () {
  number_fun("3");
});

$num4.addEventListener("click", function () {
  number_fun("4");
});

$num5.addEventListener("click", function () {
  number_fun("5");
});

$num6.addEventListener("click", function () {
  number_fun("6");
});

$num7.addEventListener("click", function () {
  number_fun("7");
});

$num8.addEventListener("click", function () {
  number_fun("8");
});

$num9.addEventListener("click", function () {
  number_fun("9");
});

$num0.addEventListener("click", function () {
  number_fun("0");
});

$dec.addEventListener("click", function () {
  number_fun(".");
});

/* Operations Press Event Listeners */

$add.addEventListener("click", function () {
  operation_fun("+");
});

$sub.addEventListener("click", function () {
  operation_fun("-");
});

$mul.addEventListener("click", function () {
  operation_fun("*");
});

$div.addEventListener("click", function () {
  operation_fun("/");
});

$mod.addEventListener("click", function () {
  operation_fun("%");
});

/* Special Operation Event Listeners */

$equal.addEventListener("click", function () {
  $res.value = evaluate(first_number, $res.value);
});

$clr.addEventListener("click", function () {
  clear();
});

$del.addEventListener("click", function () {
  delete_char();
});

$res.addEventListener("keypress", function (event) {
  key_press(event);
});
