//Answer 1
// TODO: define the Dog class here
class Dog {
  constructor(name, species, size) {
    this.name = name;
    this.species = species;
    this.size = size;
  }

  bark(){
    if (this.size > 60) {
      return "Grrr! Grrr!"
    }else {
      return "Woof! Woof!"
    }
  }
}

const fang = new Dog("Fang", "boarhound", 75);
document.querySelector('#oneA').innerHTML = `<p> ${fang.name} is a ${fang.species} dog measuring ${fang.size} </p> \n <p> Look, a cat! ${fang.name} barks: ${fang.bark()} </p>`
// console.log(`${fang.name} is a ${fang.species} dog measuring ${fang.size}`);
// console.log(`Look, a cat! ${fang.name} barks: ${fang.bark()}`);

const snowy = new Dog("Snowy", "terrier", 22);
document.querySelector('#oneB').innerHTML = `<p> ${snowy.name} is a ${snowy.species} dog measuring ${snowy.size} </p> \n <p> Look, a cat! ${snowy.name} barks: ${snowy.bark()} </p>`
// console.log(`${snowy.name} is a ${snowy.species} dog measuring ${snowy.size}`);
// console.log(`Look, a cat! ${snowy.name} barks: ${snowy.bark()}`);

//Answer 2
class Character {
  constructor(name, health, strength) {
    this.name = name;
    this.health = health;
    this.strength = strength;
    this.xp = 0; // XP is always zero for new characters
    this.inventory = {
      gold: 10,
      key: 1
    }
  }
  // Attack a target
  attack(target) {
    if (this.health > 0) {
      const damage = this.strength;
      console.log(
        `${this.name} attacks ${target.name} and causes ${damage} damage points`
      );
      target.health -= damage;
      if (target.health > 0) {
        console.log(`${target.name} has ${target.health} health points left`);
      } else {
        target.health = 0;
        const bonusXP = 10;
        console.log(
          `${this
            .name} eliminated ${target.name} and wins ${bonusXP} experience points`
        );
        this.xp += bonusXP;
        this.inventory.gold += target.inventory.gold;
        this.inventory.key += target.inventory.key;
      }
    } else {
      console.log(`${this.name} can't attack (they've been eliminated)`);
    }
  }
  // Return the character description
  describe() {
    return `${this.name} has ${this.health} health points, ${this
      .strength} as strength and ${this.xp} XP points. ${this.name} has ${this.inventory.gold} gold pieces and ${this.inventory.key} key(s)`;
  }
}

const aurora = new Character("Aurora", 150, 25);
const glacius = new Character("Glacius", 130, 30);

console.log("Welcome to the adventure! Here are our heroes:");
console.log(aurora.describe());
console.log(glacius.describe());

const monster = new Character("Spike", 40, 20);
console.log("A wild monster has appeared: it's named " + monster.name);

monster.attack(aurora);
monster.attack(glacius);
aurora.attack(monster);
glacius.attack(monster);

console.log(aurora.describe());
console.log(glacius.describe());

//Answer 3
class Account {
  constructor(name) {
    this.name = name;
    this.balance = 0
  }
  credit(amount){
    return this.balance += amount
  }
  describe(){
    return `owner: ${this.name}, balance: ${this.balance}`
  }
}
let sean = new Account('Sean');
let brad = new Account('Brad');
let george = new Account('George');
sean.credit(1000);
brad.credit(1000);
george.credit(1000);
document.querySelector('#three'). innerHTML = sean.describe() + "\n <p>" + brad.describe()
+"</p>" + "\n <p>" +  george.describe() +"</p>"
