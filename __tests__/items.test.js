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


})