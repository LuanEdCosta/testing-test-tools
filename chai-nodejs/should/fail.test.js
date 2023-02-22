import chai from "chai";
import { sum } from "code-being-tested";

chai.should();

sum(1, 2).should.equal(300, "It should sum two numbers");
