import test from "./test.mjs";

/*
    Challenge: Implement the `multiply` function.

    The function `multiply` takes an indefinit number of parameters (https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/rest_parameters).
    It should return the product of the numbers, with the following constraints:

    1. If one or more of the parameters are not valid numbers, the function should return NaN (Not a Number).
    2. If either parameter is a string that can be converted to a number (e.g., "3"), it should be parsed into a number before multiplying.
    3. If either parameter is Infinity or -Infinity, return Infinity or -Infinity based on the rules of multiplication.
    4. Handle edge cases like multiplying by 0 and NaN appropriately.

    Your task:
    1. Write the tests (within the tests region) that correspond to the described behavior.
    2. Complete the logic of the `multiply` function to pass all the tests.

*/

//#region function -----------------------------------------------------------------
// Write your function her.

function multiply(...factors) {
    // Check if there are no parameters given
    if (factors.length == 0) {
        return NaN;
    } 
    
    // Store product of factors in a variable
    let product = 1;
    
    // Loop over each factor
    for (let num of factors) {
        if (isNaN(num) || num === null) { // Check if factor is a number
            return NaN;
        } else if (typeof num === "string") { // Check if factor is a string -> Number() converts to number, returns NaN if string isn't number.
            num = Number(num);
        }
        product *= num; // Get product of factors
    }

    return product;
}

//#endregion



//#region Tests --------------------------------------------------------------------
// Write your tests her.

const tests = test("Multiply function");

// Valid inputs
tests.isEqual(multiply(1, 2), 2, "1 multiplied by 2 should be 2");
tests.isEqual(multiply(-5, 5), -25, "-5 multiplied by 5 should be -25");
tests.isEqual(multiply(2.5, 3.5), 8.75, "2.5 multiplied by 3.5 should be 8.75");
tests.isEqual(multiply(1, "2"), 2, '1 multiplied by "2" should be 2');
tests.isEqual(multiply(2, 2, 3), 12, "2 multiplied by 2 multiplied by 3 should be 12");

// Invalid inputs
tests.isNotANumber(multiply(), "No input should return NaN"); 
tests.isNotANumber(multiply(1, null), "1 multiplied by null should return NaN"); 
tests.isNotANumber(multiply(undefined, 3), "undefined multiplied by 3 should return NaN");
tests.isNotANumber(multiply(NaN, 3), "NaN multiplied by 3 should return NaN");

// Edge cases
tests.isEqual(multiply(0, 0), 0, "0 multiplied by 0 should be 0");
tests.isEqual(multiply(Infinity, 1), Infinity, "Infinity multiplied by 1 should be Infinity");
tests.isEqual(multiply(-Infinity, 1), -Infinity, "-Infinity multiplied by 1 should be -Infinity");

//#endregion