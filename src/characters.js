export default class Character {
  constructor() {
    this.strength = 0,
    this.intelligence = 0,
    this.speed = 0,
    this.magic = 0,
    this.defense = 0,
    this.hp = 100,
    this.mp = 100,
    this.type = "",
    this.level = 1
  }
  wizard = () => {
    this.type = "wizard";
    this.strength = 35;
    this.intelligence = 75;
    this.speed = 30;
    this.magic = 90;
    this.defense = 20;
    }
  knight = () => {
    this.type = "knight";
    this.strength = 75;
    this.intelligence = 30;
    this.speed = 50;
    this.magic = 10;
    this.defense = 65;
  }
  elf = () => {
    this.type === "elf";
    this.strength = 25;
    this.intelligence = 65;
    this.speed = 90;
    this.magic = 65;
    this.defense = 5;
  }
  barbarian = () => {
    this.type = "barbarian";
    this.strength = 90;
    this.intelligence = 15;
    this.speed = 20;
    this.magic = 0;
    this.defense = 65;
  }
  scientist = () => {
    this.type = "scientist";
    this.strength = 10;
    this.intelligence = 90;
    this.speed = 40;
    this.magic = 70;
    this.defense = 20;
  }
  orc = () => {
    this.type = "orc";
    this.strength = 65;
    this.intelligence = 10;
    this.speed = 30;
    this.magic = 0;
    this.defense = 90;
  }
}
