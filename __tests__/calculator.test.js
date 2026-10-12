import { divide } from "../src/calculator.js";

describe("divide", () => {

    // Positiivinen testi
    test("should divide 10 by 2", () => {
        expect(divide(10, 2)).toBe(5);
    });

    // Negatiivinen 1
    test("should throw error when second argument is null", () => {
        expect(() => divide(5, null))
            .toThrow("Both arguments must be numbers");
    });

    // Negatiivinen 2
    test("should throw error when first argument is undefined", () => {
        expect(() => divide(undefined, 2))
            .toThrow("Both arguments must be numbers");
    });

    // Negatiivinen 3
    test("should throw error when second argument is NaN", () => {
        expect(() => divide(10, NaN))
            .toThrow("Arguments cannot be NaN");
    });

    // Negatiivinen 4
    test("should throw error when first argument is array", () => {
        expect(() => divide([], 2))
            .toThrow("Both arguments must be numbers");
    });

});