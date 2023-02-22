import assert from "node:assert";

import { sum } from "code-being-tested";
import { expect } from "chai";

describe("Pass", () => {
  it("should sum two numbers", () => {
    assert.equal(sum(1, 2), 3);
    assert.strictEqual(sum(1, 2), 3);
  });

  it("should test a lot of things", () => {
    assert.deepEqual({ a: { b: 1 } }, { a: { b: 1 } });
    assert.deepStrictEqual({ a: { b: 1 } }, { a: { b: 1 } });

    assert.ok(true);
    assert.ok(1);
    assert.ok("Hello");
  });

  it("should test using expect from chai", () => {
    expect(sum(2, 2)).to.be.equal(4);
    expect(sum(2, 2)).to.equal(4);
    expect(sum(2, 2)).equal(4);
  });
});
