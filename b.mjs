import test from "./test.mjs";

/*
    Challenge: Implement the `formatName` function.

    The function `formatName` takes a single parameter `name` (a string) and formats it based on the following rules:

    1. If `name` is not a string, return null.
    2. Remove any leading or trailing whitespace from the string.
    3. Capitalize the first letter of each word in the name (e.g., "john doe" becomes "John Doe").
    4. If the string is empty (after trimming), return an empty string.
    5. If the string contains special characters (e.g., "@", "#", etc.), return null.

    Your task:
    1. Write the tests (within the tests region) that correspond to the described behavior.
    2. Complete the logic of the `formatName` function to pass all the tests.

*/

//#region function -----------------------------------------------------------------
// Write your function her.

function formatName(name) {
    // Check if input is string
    if (typeof name !== "string") {
        return null;
    }

    // Remove whitespaces from both ends
    name = name.trim();

    // Check if string contains letters
    if (name.length == 0) {
        return " ";
    }

    const specialCharacters = "!@#$%^&*()_+-=[]{}|;:',.<>/?`~0123456789"; // String of characters to compare name with
    const formattedName = name.toLowerCase().split(" "); // Turn entire string to lower case and separate names by space

    for (let i = 0; i < formattedName.length; i++) {
        for (let character of formattedName[i]) { // Check if name contains special character
            if (specialCharacters.includes(character)) {
                return null;
            }
        }        
        // Replace initial letter with upper case letter and re-add the rest of the word
        formattedName[i] = formattedName[i].charAt(0).toUpperCase() + formattedName[i].slice(1);
    }

    return formattedName.join(" "); // Return the formatted string
}

//#endregion





//#region Tests --------------------------------------------------------------------
// Write your tests her.

const tests = test("Format name function");

// Valid inputs
tests.isEqual(formatName("marius hanssen"), "Marius Hanssen", "Lower case initial letters should be capitalized");
tests.isEqual(formatName(""), " ", "Empty input should return an empty string");

// Invalid inputs
tests.isEqual(formatName(123), null, "Formatting numbers should return null");
tests.isEqual(formatName(null), null, "Formatting null should return null");
tests.isEqual(formatName(undefined), null, "Formatting undefined should return null");
tests.isEqual(formatName("Marius 123"), null, "Strings with special characters should return null");

// Edge cases
tests.isEqual(formatName("MARIUS HANSSEN"), "Marius Hanssen", "Only initial letters should be capitalized");
tests.isEqual(formatName("   Marius Hanssen   "), "Marius Hanssen", "Trailing whitespaces should be removed");

//#endregion