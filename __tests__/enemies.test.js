import Character from "../src/characters";
import Enemy from "../src/enemies";

describe('enemy', () => {

  let enemy;
  
  beforeEach(() => {
    enemy = new Enemy()
  });

  test('should correcly create and apply base stats to ghoul', () => {
    enemy.ghoul();
    expect(enemy.type).toEqual("ghoul");
    expect(enemy.strength).toEqual(10);
    expect(enemy.hp).toEqual(100);
    expect(enemy.magic).toEqual(10);
    expect(enemy.defense).toEqual(20);
  }); 
});


