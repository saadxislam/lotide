const tail = require('../tail');
const assertEqual = require('../assertEqual');

// const words = ["Yo Yo", "Lighthouse", "Labs"];
// console.log(tail(words));
// assertEqual(words.length, 3); // original array should still have 3 elements!


const assert = require('chai').assert;

  describe("#tail", () => {
    it("returns ['Are', 'You'] for ['How','Are','You']", () => {
      assert.deepEqual(tail(["How", "Are", "You"]), ["Are", "You"]);
    });
    it("returns [] for ['How']", () => {
      assert.deepEqual(tail(["How"]), []);
    });
});