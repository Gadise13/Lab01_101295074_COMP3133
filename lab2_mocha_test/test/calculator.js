const { expect } = require("chai");
const calc = require("../app/calculator");

describe("Calculator Test Suite", function () {

  // ADD
  it("ADD PASS: add(5,2) should return 7", function () {
    const result = calc.add(5, 2);
    expect(result).to.equal(7);
    console.log("✅ PASS: add(5,2) returned 7");
  });

  it("ADD FAIL: add(5,2) should return 8", function () {
    const result = calc.add(5, 2);
    try {
      expect(result).to.equal(8); // intentionally wrong
      console.log("✅ (unexpected) PASS: add(5,2) returned 8");
    } catch (e) {
      console.log("❌ FAIL (expected): add(5,2) expected 8 but got", result);
    }
  });

  // SUB
  it("SUB PASS: sub(5,2) should return 3", function () {
    const result = calc.sub(5, 2);
    expect(result).to.equal(3);
    console.log("✅ PASS: sub(5,2) returned 3");
  });

  it("SUB FAIL: sub(5,2) should return 5", function () {
    const result = calc.sub(5, 2);
    try {
      expect(result).to.equal(5); // intentionally wrong
      console.log("✅ (unexpected) PASS: sub(5,2) returned 5");
    } catch (e) {
      console.log("❌ FAIL (expected): sub(5,2) expected 5 but got", result);
    }
  });

  // MUL
  it("MUL PASS: mul(5,2) should return 10", function () {
    const result = calc.mul(5, 2);
    expect(result).to.equal(10);
    console.log("✅ PASS: mul(5,2) returned 10");
  });

  it("MUL FAIL: mul(5,2) should return 12", function () {
    const result = calc.mul(5, 2);
    try {
      expect(result).to.equal(12); // intentionally wrong
      console.log("✅ (unexpected) PASS: mul(5,2) returned 12");
    } catch (e) {
      console.log("❌ FAIL (expected): mul(5,2) expected 12 but got", result);
    }
  });

  // DIV
  it("DIV PASS: div(10,2) should return 5", function () {
    const result = calc.div(10, 2);
    expect(result).to.equal(5);
    console.log("✅ PASS: div(10,2) returned 5");
  });

  it("DIV FAIL: div(10,2) should return 2", function () {
    const result = calc.div(10, 2);
    try {
      expect(result).to.equal(2); // intentionally wrong
      console.log("✅ (unexpected) PASS: div(10,2) returned 2");
    } catch (e) {
      console.log("❌ FAIL (expected): div(10,2) expected 2 but got", result);
    }
  });

});
