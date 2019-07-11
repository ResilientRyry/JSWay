//Answer 1 start

// TODO: create the character object here
const aurora = {
  name: "Aurora",
  health: 150,
  strength: 25,
  xp: 0,

  // Return the character description
  describe() {
    return `${this.name} has ${this.health} health points and ${this
      .strength} as strength. ${this.name} also has ${this.xp} experience points`;
  }
};
// Aurora is harmed by an arrow
aurora.health -= 20;

// Aurora equips a strength necklace
aurora.strength += 10;

// Aurora learn a new skill
aurora.xp += 15;

document.querySelector('#one').innerHTML = aurora.describe();
console.log(aurora.describe());
//Answer 1 end
//Answer 2 start
// TODO: create the dog object here
const dog = {
  name: 'Clifford',
  species: 'pitbull<3',
  size: '120lbs',

  bark() {
    return 'Yeerrrr gtfoh opp!!'
  }
}
document.querySelector('#twoA').innerHTML = `${dog.name} is a ${dog.species} dog measuring ${dog.size}`;
document.querySelector('#twoB').innerHTML = `Look, a cat! ${dog.name} barks: ${dog.bark()}`;

console.log(`${dog.name} is a ${dog.species} dog measuring ${dog.size}`);
console.log(`Look, a cat! ${dog.name} barks: ${dog.bark()}`);
//Answer 2 end
//Answer 3 start
document.querySelector('#run').addEventListener('click', ()=>{
  const r = Number(prompt("Enter the circle radius:"));

  // TODO: create the circle object here
  const circle = {
    circumference (){
      let circumference = 2 * Math.PI * r
      document.querySelector('#threeA').innerHTML = `Your circumference is ${circumference}`
      return circumference
    },
    area(){
      let area = Math.PI * (r ** 2)
      document.querySelector('#threeB').innerHTML = `Your area is ${area}`
      return area
    }
  }

  console.log(`Its circumference is ${circle.circumference()}`);
  console.log(`Its area is ${circle.area()}`);
})
//Answer 3 end
//Answer 4 start

const account = {
  name: 'Alex',
  balance: 0,
  num: 0,

  getNum() {
    this.num = Number(prompt("What would you like to do today? Deposit? (ex. 100) Withdrawal? (ex. -100)"))
  },

  credit(num){
    this.balance += num
    return this.balance
  },
  describe(){
    document.querySelector('#four').innerHTML = `Hello ${this.name} your account balance, now ${this.balance}, has been been changed by ${this.num}`;

    return (`Hello ${this.name} your account balance, now ${this.balance}, has been been changed by ${this.num} transaction`);
  }
}

document.querySelector('#check').addEventListener('click', ()=>{
  account.getNum();
  account.credit(account.num);
  console.log(account.describe());
});
//Answer 4 end
