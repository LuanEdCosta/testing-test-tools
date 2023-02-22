import chai from "chai";
import { sum } from "code-being-tested";

chai.expect(sum(1, 2), "It should sum two numbers").to.equal(300);
