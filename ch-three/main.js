function tomorrow(){
let day = prompt('Want to know what\'s tomorrow? Tell me, what\'s today?');
switch (day) {
  case 'Monday':
    day = 'Tuesday'
    break;
  case 'Tuesday':
    day = 'Wednesday'
    break;
  case 'Wednesday':
    day = 'Thursday'
    break;
  case 'Thursday':
    day = 'Friday'
    break;
  case 'Friday':
    day = 'Saturday'
    break;
  case 'Saturday':
    day = 'Sunday'
    break;
  case 'Sunday':
    day = 'Monday'
    break;
  case 'tomorrow':
    day = 'never'
    break;
  case '':
    day = 'NOT A DATE'
    break;
  default:
    day = 'You have to say a weekday (ex. Monday, Tuesday, etc.)'
}
document.getElementById('one').innerHTML = `Tomorrow will be ${day}`;
}

document.getElementById('tomorrow').onclick = function() {tomorrow()}


function compare(a, b){
   a = Number(document.getElementById('numOne').value);
   b = Number(document.getElementById('numTwo').value);

  if (a > b) {
    document.getElementById('two').innerHTML =`${a} is greater than ${b}`
  }else if(b > a){
    document.getElementById('two').innerHTML =`${b} is greater than ${a}`
  }else{
    document.getElementById('two').innerHTML =`${a} is equal to ${b}`
  }
}

document.getElementById('compare').onclick = function() {compare()}

// let nb1 = Number(prompt('Enter nb1:'));
// let nb2 = Number(prompt('Enter nb2:'));
// let nb3 = Number(prompt('Enter nb3:'));
// if (nb1 > nb2) {
// nb1 = nb3 * 2;
// } else {
// nb1++;
// if (nb2 > nb3) {
// nb1 += nb3 * 3;
// } else {
// nb1 = 0;
// nb3 = nb3 * 2 + nb2;
// }
// }
// console.log(nb1, nb2, nb3);


function month(){
let month = document.getElementById('month').value;
switch (month) {
  case '4' :
    case '6' :
      case '9' :
        case '11':
    days = 30
    break;
  case '1' :
    case '3' :
      case '5' :
        case '7' :
          case '8' :
            case '10' :
              case '12':
    days = 31
    break;
  default:
    days = 28
}
if (month === '1') {
  monName = 'January';
} else if (month === '2') {
   monName = 'Febuary';
} else if (month === '3') {
   monName = 'March';
} else if (month === '4') {
   monName = 'April';
} else if (month === '5') {
   monName = 'May';
}else if (month === '6') {
   monName = 'June';
}else if (month === '7') {
   monName = 'July';
}else if (month === '8') {
   monName = 'August';
}else if (month === '9') {
   monName = 'September';
}else if (month === '10') {
   monName = 'October';
}else if (month === '11') {
   monName = 'November';
}else if (month === '12') {
   monName = 'December';
}
document.getElementById('four').innerHTML = `${monName} has ${days} days.`;
}

document.getElementById('month').onclick = function() {month()}

function nextSec(){
  let hour = prompt('How many hours?');
  let min = prompt('How many minutes?');
  let sec = prompt('How many seconds?');
  let userTime = `${hour}hr:${min}min:${sec}sec`;
  sec ++;

  if (sec > 59){
    sec = 0;
    min ++;
  }
  if (min > 59){
    min = 0;
    hour ++;
  }
  document.getElementById('userEntrie').innerHTML = `Your entered time was ${userTime}`;
  document.getElementById('five').innerHTML = `Next second time is ${hour}hr:${min}min:${sec}sec`;
};

document.getElementById('nextSec').onclick = function() {nextSec()}
