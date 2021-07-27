import Character from "../src/characters";
import Items from "../src/items";

describe('Character', () => {
  
  let character;

  beforeEach(() => {
    character = new Character();
  });

  test('should correctly fill in the character type and stats to match for wizard', () => { 
    character.wizard()
    expect(character.type).toEqual("wizard");
    expect(character.strength).toEqual(10);
    expect(character.intelligence).toEqual(35);
    expect(character.speed).toEqual(15);
    expect(character.magic).toEqual(50);
    expect(character.defense).toEqual(5);
  });

  test('should correctly fill in the character type and stats to match for knight', () => { 
    character.knight()
    expect(character.type).toEqual("knight");
    expect(character.strength).toEqual(20);
    expect(character.intelligence).toEqual(20);
    expect(character.speed).toEqual(20);
    expect(character.magic).toEqual(20);
    expect(character.defense).toEqual(20);
  });

  test('should correctly fill in the character type and stats to match for elf', () => { 
    character.elf()
    expect(character.type).toEqual("elf");
    expect(character.strength).toEqual(5);
    expect(character.intelligence).toEqual(30);
    expect(character.speed).toEqual(50);
    expect(character.magic).toEqual(15);
    expect(character.defense).toEqual(10);
  });

  test('should correctly fill in the character type and stats to match for barbarian', () => { 
    character.barbarian()
    expect(character.type).toEqual("barbarian");
    expect(character.strength).toEqual(50);
    expect(character.intelligence).toEqual(15);
    expect(character.speed).toEqual(10);
    expect(character.magic).toEqual(0);
    expect(character.defense).toEqual(40);
  });

  test('should correctly fill in the character type and stats to match for alchemist', () => { 
    character.alchemist()
    expect(character.type).toEqual("alchemist");
    expect(character.strength).toEqual(5);
    expect(character.intelligence).toEqual(50);
    expect(character.speed).toEqual(15);
    expect(character.magic).toEqual(35);
    expect(character.defense).toEqual(10);
  });

  test('should correctly fill in the character type and stats to match for orc', () => { 
    character.orc()
    expect(character.type).toEqual("orc");
    expect(character.strength).toEqual(40);
    expect(character.intelligence).toEqual(5);
    expect(character.speed).toEqual(15);
    expect(character.magic).toEqual(0);
    expect(character.defense).toEqual(50);
  });
});

describe('Character Item', () => {

  let character;
  let item;

  beforeEach(() => {
    character = new Character();
    item = new Items();
  });
  
  test('should correctly apply healthpot to inventory', () => {
    character.knight();
    item.healthPot();
    character.inventory.push(item.type);
    expect(character.inventory).toEqual(["healthpot"]);
  });

  test('should correctly apply sword to inventory', () => {
    character.barbarian();
    item.sword();
    character.inventory.push(item.type);
    expect(character.inventory).toEqual(["sword"]);
  });


  test('should correctly apply wand to inventory', () => {
    character.wizard();
    item.wand();
    character.inventory.push(item.type);
    expect(character.inventory).toEqual(["wand"]);
  });
  
  test('should correctly apply spellbook to inventory', () => {
    character.alchemist();
    item.spellBook();
    character.inventory.push(item.type);
    expect(character.inventory).toEqual(["spellbook"]);
  });

  test('should correctly apply boots to inventory', () => {
    character.elf();
    item.boots();
    character.inventory.push(item.type);
    expect(character.inventory).toEqual(["boots"]);
  });

  test('should correctly apply shield to inventory', () => {
    character.orc();
    item.shield();
    character.inventory.push(item.type);
    expect(character.inventory).toEqual(["shield"]);
  });
});

describe('applyItem', () => {
  let character;
  let item;

  beforeEach(() => {
    character = new Character();
    item = new Items();
  });
  test("should correctly apply item state modifier too wizard magic stat.", () => {
    character.wizard();
    item.wand();
    character.inventory.push(item.type);
    character.applyItems();
    expect(character.magic).toEqual(55);
  });
  test("should correctly apply item state modifier too knight hp stat.", () => {
    character.knight();
    item.healthPot();
    character.inventory.push(item.type);
    character.applyItems();
    expect(character.hp).toEqual(105);
  });
  test("should correctly apply item state modifier too elf speed stat.", () => {
    character.elf();
    item.boots();
    character.inventory.push(item.type);
    character.applyItems();
    expect(character.speed).toEqual(55);
  });
  test("should correctly apply item state modifier too barbarian strength stat.", () => {
    character.barbarian();
    item.sword();
    character.inventory.push(item.type);
    character.applyItems();
    expect(character.strength).toEqual(55);
  });
});