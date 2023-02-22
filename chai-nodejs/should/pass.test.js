import chai from "chai";
import { sum } from "code-being-tested";

chai.should();

sum(1, 2).should.equal(3, "It should sum two numbers");
