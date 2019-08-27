const assert = require('chai').assert;
const tail = require('../tail');

//Mocha and Chai testing
describe("#tail", () => {
  it("returns ['Lighthouse', 'Labs'] for ['Yo Yo', 'Lighthouse', 'Labs']", () => {
    assert.deepEqual(tail(["Yo Yo", "Lighthouse", "Labs"]), ["Lighthouse", "Labs"]);
  });

  it("returns an empty array for input empty array and One-Length array, such as ['something'] here", () => {
    assert.deepEqual(tail(["something"]), []);
  });

  it("returns [2, 3] for [1, 2, 3]", () => {
    assert.deepEqual(tail([1, 2, 3]), [2, 3] );
  });
});