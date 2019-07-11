let musketeers = ['Athos', 'Porthos', 'Aramis'];
let one = document.querySelector('#one')

for (let i = 0; i < musketeers.length; i++) {
    console.log("for:",
        musketeers[i]);
}
musketeers.unshift("D'Artagnan") //adds to front of array

musketeers.forEach(musk => {
    console.log("forEach:",
        musk);

})

musketeers.pop() // removes end of array

for (const musk of musketeers) {
    console.log("for-of:", musk);

}
one.innerHTML = "Final results: " + musketeers + ", check console for other loop results"

//Answer 2
const values = [3, 11, 7, 2, 9, 10];
let sum = 0;

for (const value of values) {
    sum += value;
}
document.querySelector("#two").innerHTML = sum

//Answer 3
let num = 0;

for (let i = 0; i < values.length; i++) {
    if (values[i] > num) {
        num = values[i];
    }
}
document.querySelector("#three").innerHTML = num;

//Answer 4
document.querySelector('#start').addEventListener('click', ()=>{
  let myArr = [];
  let word = prompt("Give me a word...say stop when finished");

  myArr.push(word)
  
  do { // do this until while is met or truthy
    word = prompt("Give me a word...say stop when finished");

    myArr.push(word)
  if (word.toLowerCase() === "stop") {
    myArr.pop() //remove stop from array
    document.querySelector('#four').innerHTML = myArr
  }
  }while (word.toLowerCase() !== "stop");

});
