import assert from "node:assert";

import { sum } from "code-being-tested";

describe("Fail", () => {
  it("should sum two numbers", () => {
    assert.equal(sum(1, 2), 300);
  });
});
