export default class Enemy {
  constructor() {
    this.type = "";
    this.hp = 100;
    this.strength = 0;
    this.magic = 0;
    this.defense = 0;
  }
  ghoul = () => {
    this.type = "ghoul";
    this.strength = 10;
    this.magic = 10;
    this.defense = 20;
  }
}