
// TODO: call sayHello() and show its result
document.querySelector('#hi').addEventListener('click', function sayHello(firstName, lastName) {
  // TODO: ask user for first and last name
  firstName = prompt('What is Your first name?');
  lastName = prompt('What is Your last name?');
  // Say hello to the user
  const message = `Hello, ${firstName} ${lastName}!`;
  document.querySelector('#one').innerHTML = message;
  return message;
});
// ANSWER 1 END

// ANSWER 2 START

// Square the given number x
function square1(x) {
  // TODO: complete the function code
  x *= x
  return x
}

// Square the given number x
const square2 = x => x *= x// TODO: complete the function code

// TODO: update the program so that it shows the square of every number between 0 and 10
document.querySelector('#update').addEventListener('click', ()=>{

  for (var i = 0; i <= 10; i++) {
    x = square2(i);

    let p = document.createElement("p");
    let text = document.createTextNode(`${i} squared is ${x}`);
    let element = document.querySelector("#two");

    p.appendChild(text);
    element.appendChild(p);

    x = square2(i);
    }
});
// ANSWER 2 END

// ANSWER 3 START
// TODO: write the min() function
  document.querySelector('#min').addEventListener('click', ()=>{
    function min(a,b){
      if (a > b){
        document.querySelector('#three').innerHTML = 'check console'
        return b
      }else {
        document.querySelector('#three').innerHTML = 'check console'
        return a
      }
    }
    // min(4.5, 5)
    console.log('min:',min(4.5, 5)); // Must show 4.5
    console.log('min:',min(19, 9));  // Must show 9
    console.log('min:',min(1, 1));   // Must show 1
  })

// ANSWER 3 END
// ANSWER 4 START
  document.querySelector('#calc').addEventListener('click', ()=>{
    let num;

    function calculate(num1,exp,num2){
      document.querySelector('#four').innerHTML = 'Check console'
      if (exp === "+") {
        return num = num1 + num2
      }else if (exp === "-") {
        return num = num1 - num2
      }else if (exp === "*") {
        return num = num1 * num2
      }
      else if (exp === "/") {
        return num = num1 / num2
      }else {
        alert('Must use +, -, *, or /')
      }
    }

    // TODO: complete program

    console.log(calculate(4, "+", 6));  // Must show 10
    console.log(calculate(4, "-", 6));  // Must show -2
    console.log(calculate(2, "*", 0));  // Must show 0
    console.log(calculate(12, "/", 0)); // Must show Infinity
  })
// ANSWER 4 END
// ANSWER 5 START

  document.querySelector('#circ').addEventListener('click', () => {
    let rad = Number(document.querySelector('#radius').value)
    let circumference = 2 * Math.PI * rad
    document.querySelector('#fiveA').innerHTML = `Your circumference is ${circumference}`
  });
  document.querySelector('#area').addEventListener('click', () => {
    let rad = Number(document.querySelector('#radius').value)
    let area = Math.PI * (rad ** 2)
    document.querySelector('#fiveB').innerHTML = `Your area is ${area}`
  });
// console.log(2 ** 3); // 8: 2 * 2 * 2
// ANSWER 5 END
