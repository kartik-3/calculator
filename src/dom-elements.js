const charset = document.createElement("meta");
charset.setAttribute("charset", "UTF-8");
document.head.appendChild(charset);

const name = document.createElement("meta");
name.setAttribute("name", "viewport");
name.setAttribute("content", "width=device-width, initial-scale=1.0");
document.head.appendChild(name);

const title = document.createElement("title");
title.innerText = "Calculator";
document.head.appendChild(title);

const stylesheet = document.createElement("link");
stylesheet.setAttribute("rel", "stylesheet");
stylesheet.setAttribute("href", "./css/style.css");
document.head.appendChild(stylesheet);

const font_stylesheet = document.createElement("link");
font_stylesheet.setAttribute("rel", "stylesheet");
font_stylesheet.setAttribute(
  "href",
  "https://fonts.googleapis.com/css2?family=Roboto&display=swap"
);
document.head.appendChild(font_stylesheet);

const calc_form = document.createElement("form");
calc_form.setAttribute("method", "POST");
calc_form.setAttribute("id", "calc-form");
document.body.appendChild(calc_form);

const result = document.createElement("input");
result.setAttribute("type", "text");
result.setAttribute("value", "0");
result.setAttribute("id", "result");
result.classList.add("result");
calc_form.appendChild(result);

const num1 = document.createElement("button");
num1.setAttribute("type", "button");
num1.setAttribute("id", "num1");
num1.classList.add("num");
num1.innerText = "1";
calc_form.appendChild(num1);

const num2 = document.createElement("button");
num2.setAttribute("type", "button");
num2.setAttribute("id", "num2");
num2.classList.add("num");
num2.innerText = "2";
calc_form.appendChild(num2);

const num3 = document.createElement("button");
num3.setAttribute("type", "button");
num3.setAttribute("id", "num3");
num3.classList.add("num");
num3.innerText = "3";
calc_form.appendChild(num3);

const add = document.createElement("button");
add.setAttribute("type", "button");
add.setAttribute("id", "add");
add.classList.add("op");
add.innerText = "+";
calc_form.appendChild(add);

const br1 = document.createElement("br");
calc_form.appendChild(br1);

const num4 = document.createElement("button");
num4.setAttribute("type", "button");
num4.setAttribute("id", "num4");
num4.classList.add("num");
num4.innerText = "4";
calc_form.appendChild(num4);

const num5 = document.createElement("button");
num5.setAttribute("type", "button");
num5.setAttribute("id", "num5");
num5.classList.add("num");
num5.innerText = "5";
calc_form.appendChild(num5);

const num6 = document.createElement("button");
num6.setAttribute("type", "button");
num6.setAttribute("id", "num6");
num6.classList.add("num");
num6.innerText = "6";
calc_form.appendChild(num6);

const sub = document.createElement("button");
sub.setAttribute("type", "button");
sub.setAttribute("id", "sub");
sub.classList.add("op");
sub.innerText = "-";
calc_form.appendChild(sub);

const br2 = document.createElement("br");
calc_form.appendChild(br2);

const num7 = document.createElement("button");
num7.setAttribute("type", "button");
num7.setAttribute("id", "num7");
num7.classList.add("num");
num7.innerText = "7";
calc_form.appendChild(num7);

const num8 = document.createElement("button");
num8.setAttribute("type", "button");
num8.setAttribute("id", "num8");
num8.classList.add("num");
num8.innerText = "8";
calc_form.appendChild(num8);

const num9 = document.createElement("button");
num9.setAttribute("type", "button");
num9.setAttribute("id", "num9");
num9.classList.add("num");
num9.innerText = "9";
calc_form.appendChild(num9);

const mul = document.createElement("button");
mul.setAttribute("type", "button");
mul.setAttribute("id", "mul");
mul.classList.add("op");
mul.innerHTML = "&times";
calc_form.appendChild(mul);

const br3 = document.createElement("br");
calc_form.appendChild(br3);

const dec = document.createElement("button");
dec.setAttribute("type", "button");
dec.setAttribute("id", "dec");
dec.classList.add("dec");
dec.innerText = ".";
calc_form.appendChild(dec);

const num0 = document.createElement("button");
num0.setAttribute("type", "button");
num0.setAttribute("id", "num0");
num0.classList.add("num");
num0.innerText = "0";
calc_form.appendChild(num0);

const clr = document.createElement("button");
clr.setAttribute("type", "button");
clr.setAttribute("id", "clr");
clr.classList.add("clear");
clr.innerText = "C";
calc_form.appendChild(clr);

const div = document.createElement("button");
div.setAttribute("type", "button");
div.setAttribute("id", "div");
div.classList.add("op");
div.innerText = "÷";
calc_form.appendChild(div);

const br4 = document.createElement("br");
calc_form.appendChild(br4);

const equal = document.createElement("button");
equal.setAttribute("type", "button");
equal.setAttribute("id", "equal");
equal.classList.add("equal");
equal.innerText = "=";
calc_form.appendChild(equal);

const del = document.createElement("button");
del.setAttribute("type", "button");
del.setAttribute("id", "del");
del.classList.add("del");
del.innerText = "DEL";
calc_form.appendChild(del);

const mod = document.createElement("button");
mod.setAttribute("type", "button");
mod.setAttribute("id", "mod");
mod.classList.add("op");
mod.innerText = "%";
calc_form.appendChild(mod);
