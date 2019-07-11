//Answer 1
let str = prompt('Word me please...')

document.querySelector('#one').innerHTML = "\n <p>" + str.length + "\n </p>" + "\n <p>" + str.toLowerCase() + "\n </p>" + "\n <p>" + str.toUpperCase() + "\n </p>"

//Answer 2
const vowel = ['a', 'e', 'i', 'o', 'u'];
let vowels = 0

for (let i = 0; i < str.length; i++) {
  for (var j = 0; j < vowel.length; j++) {
    if (str[i].toLowerCase() === vowel[j]) {
      vowels ++
      console.log(vowels);
    }
  }
}
document.querySelector('#two').innerHTML = vowels

//Answer 3
document.querySelector('#three').innerHTML = str.split("").reverse().join("")

//Answer 4
if (str.toUpperCase() === str.toUpperCase().split("").reverse().join("")) {
  document.querySelector('#four').innerHTML = 'Is a Palindrome'
}else {
  document.querySelector('#four').innerHTML = 'Is not a Palindrome'
}
