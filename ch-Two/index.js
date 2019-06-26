function name(){
  const name = prompt('What is your full name?');

  document.getElementById("one").innerHTML = `User name is ${name}`;
}
document.getElementById("getName").onclick = function() {name()};

function predict(){
  let a = 2
  a -= 1;
  a++;
  let b = 8;
  b += 2;
  const c = a + b * b;
  const d = a * b + b;
  const e = a * (b + b);
  const f = a * b / a;
  const g = b / a * a;
console.log(a, b, c, d, e, f, g);
}
predict();

function vat(){
  let price = Number(prompt('How much is your service in USD? (ex. 105)'));
  let rate = price + price*.206

  document.getElementById("three").innerHTML = `Total: ${rate}`;
}
document.getElementById("getRate").onclick = function() {vat()};

function degree(){
  let celcius = Number(prompt('How many degrees? (ex. 20)'));
  let fahrenheit = celcius * 9/5 + 32;

  document.getElementById("four").innerHTML = `Degrees: ${fahrenheit}`;
}
document.getElementById("getDegree").onclick = function() {degree()};

function variables(){
  let number1 = 5;
  let number2 = 3;
  let number3 = number1
  number1 = number2;
  number2 = number3;


  console.log(number1); // Should show 3
  console.log(number2); // Should show 5</p>
  document.getElementById("five").innerHTML = ` ${variables}`;
}
variables()
