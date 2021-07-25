import Character from "../src/characters";

describe('Character', () => {
  
  let character;

  beforeEach(() => {
    character = new Character();
  });

  test('should correctly fill in the character type and stats to match for wizard', () => { 
    character.wizard()
    expect(character.type).toEqual("wizard");
    expect(character.strength).toEqual(35);
    expect(character.intelligence).toEqual(75);
    expect(character.speed).toEqual(30);
    expect(character.magic).toEqual(90);
    expect(character.defense).toEqual(20);
  });

  test('should correctly fill in the character type and stats to match for knight', () => { 
    character.knight()
    expect(character.type).toEqual("knight");
    expect(character.strength).toEqual(75);
    expect(character.intelligence).toEqual(30);
    expect(character.speed).toEqual(50);
    expect(character.magic).toEqual(10);
    expect(character.defense).toEqual(65);
  });

  test('should correctly fill in the character type and stats to match for elf', () => { 
    character.elf()
    expect(character.type).toEqual("elf");
    expect(character.strength).toEqual(25);
    expect(character.intelligence).toEqual(65);
    expect(character.speed).toEqual(90);
    expect(character.magic).toEqual(65);
    expect(character.defense).toEqual(5);
  });

  test('should correctly fill in the character type and stats to match for barbarian', () => { 
    character.barbarian()
    expect(character.type).toEqual("barbarian");
    expect(character.strength).toEqual(90);
    expect(character.intelligence).toEqual(15);
    expect(character.speed).toEqual(20);
    expect(character.magic).toEqual(0);
    expect(character.defense).toEqual(65);
  });

  test('should correctly fill in the character type and stats to match for alchemist', () => { 
    character.alchemist()
    expect(character.type).toEqual("alchemist");
    expect(character.strength).toEqual(10);
    expect(character.intelligence).toEqual(90);
    expect(character.speed).toEqual(40);
    expect(character.magic).toEqual(70);
    expect(character.defense).toEqual(20);
  });
});