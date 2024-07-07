import * as chai from "chai";
import b1008 from "../b1008/index.js";

chai.should();

describe("b1008", () => {
  it("[1, 2, 3, 4, 5]", () => {
    let result = b1008([1, 2, 3, 4, 5], 2);
    result.should.be.deep.equal([4, 5, 1, 2, 3]);

    result = b1008([1, 2, 3, 4, 5, 6, 7, 8], 12);
    result.should.be.deep.equal([5, 6, 7, 8, 1, 2, 3, 4]);
  });
  it("[1, 2, 3, 4, 5, 6, 7, 8]", () => {
    let result = b1008([1, 2, 3, 4, 5, 6, 7, 8], 12);
    result.should.be.deep.equal([5, 6, 7, 8, 1, 2, 3, 4]);
  });
});
