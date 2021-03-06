import Items from "../src/items";

describe('items', () => {

  let item;

  beforeEach(() => {
    item = new Items();
  });

  test('should correctly pull up stats for healthpot', () => { 
    item.healthPot()
    expect(item.type).toEqual("healthpot");
    expect(item.effect).toEqual("potions adds 10 hp");
    expect(item.hp).toEqual(10);
  });

  test('should correctly pull up stats for sword', () => { 
    item.sword()
    expect(item.type).toEqual("sword");
    expect(item.effect).toEqual("sword adds 5 strength");
    expect(item.strength).toEqual(5);
  });

  test('should correctly pull up stats for wand', () => {
    item.wand()
    expect(item.type).toEqual("wand");
    expect(item.effect).toEqual("wand adds 5 magic");
    expect(item.magic).toEqual(5);
  });

  test('should correctly pull up stats for boots', () => {
    item.boots()
    expect(item.type).toEqual("boots");
    expect(item.effect).toEqual("boots adds 5 speed");
    expect(item.speed).toEqual(5);
  });

  test('should correctly pull up stats for spellbook', () => {
    item.spellBook()
    expect(item.type).toEqual("spellbook");
    expect(item.effect).toEqual("spellbook adds 5 intelligence");
    expect(item.intelligence).toEqual(5);
  });

  test('should correctly pull up stats for shield', () => {
    item.shield()
    expect(item.type).toEqual("shield");
    expect(item.effect).toEqual("shield adds 5 defense");
    expect(item.defense).toEqual(5);
  });
});