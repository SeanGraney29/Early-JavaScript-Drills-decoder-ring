const caesarModule = require("../src/caesar");
const expect = require("chai").expect;

describe("caesar: encoding happy path", () => {
    it("should return the encoded message by shifting the letters", () => {
      const input = "Do you want some yummy donuts?";
      const expected = "it dtz bfsy xtrj dzrrd itszyx?";
      const actual = caesarModule.caesar(input, 5, true);
      expect(actual).to.eql(expected);
    });
  });

describe("caesar: return all symbols and spaces unchanged", () => {
    it("should return false if shift is 0", () => {
      const input = "3674% ^^^&*@";
      const expected = "3674% ccc&*@";
      const unexpected = "3674%ccc&*@"
      const actual = caesarModule.caesar(input, 5, true);
      expect(actual).to.eql(expected).but.not.equal(unexpected)
    });
  });

describe("caesar: false for 0", () => {
    it("should return false if shift is 0", () => {
      const input = "Do you want some yummy donuts?";
      const actual = caesarModule.caesar(input, 0, true);
      expect(actual).to.be.false;
    });
  });

describe("caesar: false for shift too large", () => {
    it("should return false if shift is 0", () => {
      const input = "Do you want some yummy donuts?";
      const actual = caesarModule.caesar(input, 100, true);
      expect(actual).to.be.false;
    });
  });

describe("caesar: false for shift too small", () => {
    it("should return false if shift is 0", () => {
      const input = "Do you want some yummy donuts?";
      const actual = caesarModule.caesar(input, -100, true);
      expect(actual).to.be.false;
    });
  });

describe("caesar: decoding happy path", () => {
    it("should return the encoded message by shifting the letters", () => {
      const input = "it dtz bfsy xtrj dzrrd itszyx?";
      const expected = "do you want some yummy donuts?";
      const actual = caesarModule.caesar(input, 5, false);
      expect(actual).to.equal(expected);
    });
  });