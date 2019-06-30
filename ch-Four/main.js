function carousel(){
  let plus = document.querySelector('.increase');
  let minus = document.querySelector('.decrease');

  plus.addEventListener('click', increase);
  minus.addEventListener('click', decrease);

  function increase(){
    if (turn <=9) {
      turn ++;
      document.getElementById('oneA').innerHTML = `You are on turn number ${turn}`;
    }else {
      alert('This is the end.')
    }
  };
  function decrease(){
    if (turn >=2 ) {
      turn --;
      document.getElementById('oneA').innerHTML = `You are on turn number ${turn}`;
    }else {
      alert('This is the beginning.')
    }
  }

  for (var turn = 1; turn <= 10; turn++) {
    console.log(turn);
    document.getElementById('oneA').innerHTML = `You are on turn number ${turn}`;
  }


};
document.getElementById('begin').addEventListener('click', carousel);

let start = document.getElementById('submit');

function carousel2(){
  let plus = document.querySelector('.increase2');
  let minus = document.querySelector('.decrease2');
  let turn2 = 1;
  let hold = 1;
  let num = document.getElementById('car2').value;

  plus.addEventListener('click', increase);
  minus.addEventListener('click', decrease);

  while (turn2 <= num) {
      document.getElementById('oneB').innerHTML = `You are on turn number ${hold}`;
      turn2 ++;
  };
  function increase(){
    if (hold < turn2 - 1) {
        hold ++;
        document.getElementById('oneB').innerHTML = `You are on turn number ${hold}`;
      }else {
        alert('This is the end.')
      }
  };
  function decrease(){
    if (hold > 1) {
      hold --;
      document.getElementById('oneB').innerHTML = `You are on turn number ${hold}`;
    }else {
      alert('This is the beginning.')
    }
  }

};
start.addEventListener('click', carousel2);
// Answer 2
function ans2(){
let num = document.getElementById('userNum').value

for (let i = num; i <= 10; i++) {

if (i % 2 === 0) {

console.log(`${i} is even`);

}else{

console.log(`${i} is odd`);

}

}
}
document.getElementById('userNum').addEventListener('change', ans2);
// Answer 3

function ans3(){
  let num = document.getElementById('userNum2').value

  if (num <= 100 && num >= 50) {
    document.getElementById('three').innerHTML = `Your number is ${num}`;
  }else {
    while (num > 100 || num < 50) {
      num = prompt('Try again.');
      document.getElementById('three').innerHTML = `Your number is ${num}`;
    }
  }
}
document.getElementById('userNum2').addEventListener('change', ans3);
// Answer 4

function ans4(){
  let num = document.getElementById('userNum3').value; //users given value
  let table = [];

  for (var i = 0; i <= 12; i++) {
    let mult = num * i;
    let para = document.createElement("p");
    let node = document.createTextNode(`${i} x ${mult}`);
    para.appendChild(node);
    let element = document.getElementById("four");
    element.appendChild(para);

  }
}
document.getElementById('userNum3').addEventListener('change', ans4);
// Answer 5

function ans5(){
  let questions = ['Have you ever been to Detroit?', 'Do you like sports?', 'Do you have a pet?', 'Are you a parent?', 'Can you add 1 + 1?', 'Have you looked at the sky today?', 'Are you hungry?', 'Are you happy?', 'Are we friends?']
  for (var i = 0; i < questions.length; i++) {
   let answer = prompt(questions[i]).toLowerCase();
   i++
   if (answer == 'yes' || answer == 'no') {
     document.getElementById('five').innerHTML = `AH OH! Your answer was ' ${answer.toUpperCase()} '. You lost :( Try Again!`;
     return answer
   }
   console.log(answer);
  }
}
document.querySelector('#yOrN').addEventListener('click', ans5);
// Answer 6

function ans6(){
  let num = document.querySelector('#fbNum').value

  for (var i = 1; i <= num; i++) {
    let p = document.createElement("p");
    let text = document.createTextNode(`${i}`);
    let element = document.getElementById("six");

    if (i % 3 === 0 && i % 5 === 0) {
      console.log('FIZZ BUZZ');
    }else if (i % 5 === 0) {
      console.log('BUZZ');
    }else if (i % 3 === 0) {
      console.log('FIZZ');
    }else {
      console.log(i);
    }
    p.appendChild(text);
    element.appendChild(p);
  }
}
document.querySelector('#fizzbuzz').addEventListener('click', ans6);
