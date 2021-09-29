const substitutionModule = require("../src/substitution");
const expect = require("chai").expect;

describe("substitution: encoding happy path", () => {
    it("should return the encoded message", () => {
      const input = "How about fun games";
      const alphabet = 'fkriwvplqsacybedtxuhznmjog';
      const expected = "lem fkezh vzb pfywu";
      const unexpected = "lemfkezhvzbpfywu" ;
      const actual = substitutionModule.substitution(input, alphabet, encode = true);
      expect(actual).to.eql(expected).but.not.equal(unexpected);
    });
  });

describe("substitution: alphabet missing", () => {
    it("should false if alphabet is missing", () => {
      const input = "How about fun games";
      const alphabet = '';
      const actual = substitutionModule.substitution(input, alphabet, encode = true);
      expect(actual).to.be.false;
    });
  });

describe("substitution: false for short alphabet", () => {
    it("should false if alphabet is missing", () => {
      const input = "How about fun games";
      const alphabet = 'hznmjo';
      const actual = substitutionModule.substitution(input, alphabet, encode = true);
      expect(actual).to.be.false;
    });
  });

describe("substitution: decoding happy path", () => {
    it("should hidden message!", () => {
      const input = "lem fkezh vzb pfywu";
      const alphabet = 'fkriwvplqsacybedtxuhznmjog';
      const expected = 'how about fun games';
      const actual = substitutionModule.substitution(input, alphabet, encode = false);
      expect(actual).to.include.string(expected);
    });
  });
