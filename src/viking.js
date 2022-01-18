// Soldier
class Soldier {
  constructor(health,strength){
    this.life = health;
    this.power = strength;

    //attack,receiveDamage
  }
  attack(){
    return this.power
  }
  receiveDamage(damage){
  this.life -= damage
  }
}

// Viking
class Viking extends Soldier {
  constructor(name,health,strength){
    super(health,strength)
    this.name = name;
  }
  receiveDamage(damage){
    this.life -= damage;
    if(this.life > 0) {
      return` ${this.name} has received ${damage} points of damage`
    } else{ 
      return `${this.name} has died in act of combat` 
    }
  }
    battleCry(){
      return `Odin Owns You All!`
    }
  
}


// Saxon
class Saxon extends Soldier {
  receiveDamage(damage){
    this.life -= damage;
  
    if(this.life > 0 ){
      return `A Saxon has received ${damage} points of damage`
    } else {
      return `A Saxon has died in combat`
    }
  }
}


// War
const vikingArmy = [];
const saxonArmy =[];
class War {


  addViking(Viking){
    this.vikingArmy.push(Viking);
  }
  addSaxon(Saxon){
    this.saxonArmy.push(Saxon);
  }
vikingAttack(){
let randomNum1 = Math.floor(Math.random() * this.vikingArmy.length);
let randomNum2 = Math.floor(Math.random() * this.saxonArmy.length);

let viking1 = this.vikingArmy[randomNum1];
let saxon1 = this.saxonArmy[randomNum2];

saxon1.receiveDamage(viking1.attack())

if(saxon1.life <= 0){
  this.saxonArmy.splice(randomNum2,1)
  return `A Saxon has died in combat`
}
}
saxonAttack(){
  let num1 = Math.floor(Math.random() * this.vikingArmy.length);
  let num2 = Math.floor(Math.random() * this.saxonArmy.length);

  let viking2 = this.vikingArmy[num1];
  let saxon2 = this.saxonArmy[num2];

  viking2.receiveDamage(saxon2.attack())
  if(viking2.life <= 0 ){
    this.vikingArmy.splice(num1,1)
    return `A Viking has died in combat`
  }
}
}



// The following is required to make unit tests work.
/* Environment setup. Do not modify the below code. */
if (typeof module !== 'undefined') {
  module.exports = { Soldier, Viking, Saxon, War };
}
