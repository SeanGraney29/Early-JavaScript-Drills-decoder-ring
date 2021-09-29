const polybiusModule = require("../src/polybius");
const expect = require("chai").expect;

describe("polybius: encoding happy path", () => {
    it("should return the encoded message", () => {
      const input = "Do you want some yummy donuts";
      const expected = "4143 454354 25113344 34432351 4554232345 414333544434";
      const actual = polybiusModule.polybius(input, true);
      expect(actual).to.eql(expected);
    });
  });

describe("polybius: encoding j and i swap out", () => {
    it("should make i and j both equal 42", () => {
      const input = "xxxxxjkixxxx";
      const expected = "425242" ;
      const actual = polybiusModule.polybius(input, true);
      expect(actual).to.include(expected);
    });
  });

describe("polybius: encoding output is a string", () => {
    it("should return the numbers in the message as a string", () => {
      const input = "Hello!";
      const expected = "string";
      const actual = polybiusModule.polybius(input, true);
      expect(actual).to.be.a(expected);
    });
  });

describe("polybius: decoding happy path", () => {
    it("should return the decoded message", () => {
      const input = "4143 454354 25113344 34432351 4554232345 414333544434";
      const expected = "do you want some yummy donuts";
      const actual = polybiusModule.polybius(input, false);
      expect(actual).to.have.string(expected);
    });
  });

describe("polybius: decoding with uneven numbers", () => {
    it("should return false with uneven numbers", () => {
      const input = "4143 45435 34432351 4554232345";
      const actual = polybiusModule.polybius(input, false);
      expect(actual).to.be.false;
    });
  });

describe("polybius: decoding with i and j", () => {
    it("should return both i and j", () => {
      const input = "423242";
      const expected = "i/jhi/j";
      const actual = polybiusModule.polybius(input, false);
      expect(actual).to.equal(expected);
    });
  });
