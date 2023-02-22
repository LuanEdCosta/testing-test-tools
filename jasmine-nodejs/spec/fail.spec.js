import { sum } from "code-being-tested";

describe("Fail", () => {
  it("should sum two numbers", () => {
    expect(sum(2, 2)).toBe(400);
  });
});
