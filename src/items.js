export default class Items {
  constructor() {
    this.type = ""
    this.effect = ""
  }
  healthPot = () => {
    this.type = "healthpot";
    this.effect = "potions adds 10 hp";
    this.hp = 10;
  }
  sword = () => {
    this.type = "sword";
    this.effect = "sword adds 5 strength";
    this.strength = 5;
  }
  wand = () => {
    this.type = "wand";
    this.effect = "wand adds 5 magic";
    this.magic = 5;
  }
  spellBook = () => {
    this.type = "spellbook";
    this.effect = "spellbook adds 5 intelligence";
    this.intelligence = 5;
  }
  boots = () => {
    this.type = "boots";
    this.effect = "boots adds 5 speed";
    this.speed = 5;
  }
  shield = () => {
    this.type = "shield";
    this.effect = "shield adds 5 defense";
    this.defense = 5;
  }
}