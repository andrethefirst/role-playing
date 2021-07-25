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
});