import test from "./test.mjs";

/*
    Challenge: Implement the `guessNumber` function.

    The function `guessNumber` takes two parameters:
    1. `target` (an integer) - the number to guess.
    2. `guess` (an integer) - the player's guess.

    The function should:
    - Return "Too low" if the guess is less than the target.
    - Return "Too high" if the guess is greater than the target.
    - Return "Correct!" if the guess matches the target.
    - Return null if either input is not a valid integer.

    Your task:
    1. Complete the tests below to verify the functionality.
    2. Implement the `guessNumber` function so it passes all the tests.

    
*/

//#region function -----------------------------------------------------------------
// Write your function her.

function guessNumber(target, guess) {
    // Check if target or guess is an integer
    if (!Number.isInteger(target) || !Number.isInteger(guess)) {
        return null;
    } 
    // else if (target < 0 || guess < 0) { // Check if the guess is a negative integer (optional)
    //     return null;
    // } 
    else if (guess < target) { // Check if the guess is lower than the target
        return "Too low";
    } else if (guess > target) { // Check if the guess is higher than the target
        return "Too high";
    } else if (guess == target) { // Check if the guess is equal to the target
        return "Correct!";
    } 
}


//#endregion

//#region Tests --------------------------------------------------------------------

// Basic cases

const tests = test("Format name function");

tests.isEqual(guessNumber(10, 5), "Too low", "If target is 10 and guess is 5, return 'Too low'");
tests.isEqual(guessNumber(10, 15), "Too high", "If target is 10 and guess is 15, return 'Too high'");
tests.isEqual(guessNumber(10, 10), "Correct!", "If target is 10 and guess is 10, return 'Correct!'");

// Invalid inputs
tests.isEqual(guessNumber("5", 10), null, "If input has a string, return null");
tests.isEqual(guessNumber(null, 5), null, "If input has null, return null");
tests.isEqual(guessNumber(1.5, 2), null, "If input has a float, return null");
tests.isEqual(guessNumber(Infinity, Infinity), null, "If input has infinity, return null")

// Edge cases
tests.isEqual(guessNumber(0, 0), "Correct!", "If target is 0 and guess is 0, return 'Correct!'");
tests.isEqual(guessNumber(-5, 5), "Too high", "If target is -5 and guess is 5, return 'Too high'");

//#endregion
