import Items from "./items.js";

export default class Character {
  constructor() {
    this.strength = 0,
    this.intelligence = 0,
    this.speed = 0,
    this.magic = 0,
    this.defense = 0,
    this.hp = 100,
    this.mp = 0,
    this.inventory = []
    this.type = "",
    this.level = 1
  }
  wizard = () => {
    this.type = "wizard";
    this.strength = 10;
    this.intelligence = 35;
    this.speed = 15;
    this.magic = 50;
    this.defense = 5;
    }
  knight = () => {
    this.type = "knight";
    this.strength = 20;
    this.intelligence = 20;
    this.speed = 20;
    this.magic = 20;
    this.defense = 20;
  }
  elf = () => {
    this.type = "elf";
    this.strength = 5;
    this.intelligence = 30;
    this.speed = 50;
    this.magic = 15;
    this.defense = 10;
  }
  barbarian = () => {
    this.type = "barbarian";
    this.strength = 50;
    this.intelligence = 15;
    this.speed = 10;
    this.magic = 0;
    this.defense = 40;
  }
  alchemist = () => {
    this.type = "alchemist";
    this.strength = 5;
    this.intelligence = 50;
    this.speed = 15;
    this.magic = 35;
    this.defense = 10;
  }
  orc = () => {
    this.type = "orc";
    this.strength = 40;
    this.intelligence = 5;
    this.speed = 15;
    this.magic = 0;
    this.defense = 50;
  }
  addToInventory = (item) => {
    this.inventory.push(item);
    
  }
  applyItems = () => {
    if(Items.type === "healthpot") {
      this.hp += 5;
    }else if(Items.type === "sword") {
      this.strength += 5;
    }else if(Items.type === "wand") {
      this.magic += 5;
    }else if(Items.type === "spellbook")  {
      this.intelligence += 5;
    }else if(Items.type ==="boots") {
      this.speed += 5;
    }else {
      this.defense += 5
    }
  }
}
