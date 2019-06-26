function presentation(){
  const first = 'Ryan';
  const last = 'French';

  document.getElementById("one").innerHTML = `My name is ${first} ${last}`;
}
presentation();

function minCalc(){
  const div = 6/3;
  const mult = 6*3;
  const sum = 6+3;
  const sub = 6-3;

  document.getElementById("two").innerHTML = `6 + 3 = ${sum}, 6 - 3 = ${sub}, 6 x 3 = ${mult},6 / 3 = ${div}`;
}
minCalc();

function pred(){
  console.log(4 + 5);
  console.log("4 + 5"); 
  console.log("4" + "5");
}
pred()
