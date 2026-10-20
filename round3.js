// round3.js - Tier 3 & Boss Challenges

/*
Challenge 3.1: Run-Length Encoding & Decoding
Understand: Compress a string by counting consecutive characters (encode) and expand it back (decode).
Examples: "aaabccdddd" -> "a3b1c2d4", decode("x12") -> "xxxxxxxxxxxx"
Plan: Loop through string to count consecutive characters. Extract numbers and characters when decoding.
*/
function encode(text) {
  if (typeof text !== "string" || text === "") return "";
  let encoded = "";
  let count = 1;

  for (let i = 0; i < text.length; i++) {
    if (text[i] === text[i + 1]) {
      count++;
    } else {
      encoded += text[i] + count;
      count = 1;
    }
  }
  return encoded;
}

function decode(encoded) {
  if (typeof encoded !== "string" || encoded === "") return "";
  let decoded = "";
  let i = 0;

  while (i < encoded.length) {
    let char = encoded[i];
    i++;
    let numStr = "";
    while (i < encoded.length && encoded[i] >= "0" && encoded[i] <= "9") {
      numStr += encoded[i];
      i++;
    }
    let count = Number(numStr);
    for (let j = 0; j < count; j++) {
      decoded += char;
    }
  }
  return decoded;
}

console.log(encode("aaabccdddd")); // "a3b1c2d4"
console.log(decode("a3b1c2d4")); // "aaabccdddd"
console.log(decode("x12")); // "xxxxxxxxxxxx"
console.log(encode("")); // "" (Edge case)


/*
Challenge 3.2: Validate Password with Feedback
Understand: Check password against security rules (length >= 8, uppercase, lowercase, digit, symbol, no spaces) and return array of errors.
Examples: "Igire#2026" -> [], "abc" -> [errors...]
Plan: Loop through password characters checking flags for uppercase, lowercase, digit, symbol, space, and length.
*/
function checkPassword(pw) {
  let errors = [];
  if (typeof pw !== "string") {
    return ["Invalid password format"];
  }

  let hasUpper = false;
  let hasLower = false;
  let hasDigit = false;
  let hasSymbol = false;
  let hasSpace = false;
  let symbols = "!@#$%^&*";

  if (pw.length < 8) {
    errors.push("At least 8 characters");
  }

  for (let i = 0; i < pw.length; i++) {
    let ch = pw[i];
    if (ch === " ") hasSpace = true;
    if (ch >= "A" && ch <= "Z") hasUpper = true;
    if (ch >= "a" && ch <= "z") hasLower = true;
    if (ch >= "0" && ch <= "9") hasDigit = true;
    if (symbols.includes(ch)) hasSymbol = true;
  }

  if (hasSpace) errors.push("No spaces");
  if (!hasUpper) errors.push("An uppercase letter");
  if (!hasLower) errors.push("A lowercase letter");
  if (!hasDigit) errors.push("A digit");
  if (!hasSymbol) errors.push("A symbol");

  return errors;
}

console.log(checkPassword("Igire#2026")); // []
console.log(checkPassword("abc")); // [errors...]
console.log(checkPassword("Igire 2026#")); // ["No spaces"] (Edge case)


/*
Boss Round 18: validatePassword (Object format)
Understand: Return { valid: boolean, errors: [] } for password validation.
Plan: Call checkPassword logic, return object indicating validity status.
*/
function validatePassword(pw) {
  let errs = checkPassword(pw);
  return {
    valid: errs.length === 0,
    errors: errs
  };
}

console.log(validatePassword("Secure#2026"));
console.log(validatePassword("weak"));