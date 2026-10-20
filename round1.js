// round1.js - Tier 1: Warm-up Challenges

/*
Challenge 1.1: Temperature Label
Understand: Input is a number (Celsius); output is a category string ("Freezing", "Cold", "Mild", "Warm", "Hot", or "Invalid").
Examples: -3 -> "Freezing", 15 -> "Mild", 30 -> "Hot", "hot" -> "Invalid"
Plan: Check if input is not a number. Use conditional statements for temperature ranges.
*/
function temperatureLabel(celsius) {
  if (typeof celsius !== "number" || Number.isNaN(celsius)) {
    return "Invalid";
  }
  if (celsius < 0) return "Freezing";
  if (celsius <= 14) return "Cold";
  if (celsius <= 24) return "Mild";
  if (celsius <= 29) return "Warm";
  return "Hot";
}

console.log(temperatureLabel(-3)); // "Freezing"
console.log(temperatureLabel(15)); // "Mild"
console.log(temperatureLabel(30)); // "Hot"
console.log(temperatureLabel("hot")); // "Invalid" (Edge case)


/*
Challenge 1.2: Sum of Range
Understand: Input are start and end integers; output is the sum of all integers inclusive. Handles reversed orders.
Examples: 1, 5 -> 15; 5, 1 -> 15; 4, 4 -> 4; -2, 2 -> 0
Plan: Determine min and max values. Loop from min to max, accumulating the sum. Return sum.
*/
function sumRange(start, end) {
  let min = start < end ? start : end;
  let max = start > end ? start : end;
  let sum = 0;
  for (let i = min; i <= max; i++) {
    sum += i;
  }
  return sum;
}

console.log(sumRange(1, 5)); // 15
console.log(sumRange(5, 1)); // 15
console.log(sumRange(4, 4)); // 4
console.log(sumRange(-2, 2)); // 0 (Edge case)


/*
Challenge 1.3: Mobile Number Formatter
Understand: Input is a raw Rwandan mobile number string; output is formatted as "+250 788 123 456" or null if invalid.
Examples: "0788123456" -> "+250 788 123 456", "07881234" -> null
Plan: Extract digits. Check length and prefix rules (must start with 7 after country code).
*/
function formatPhone(raw) {
  if (typeof raw !== "string") return null;
  
  let cleaned = "";
  for (let i = 0; i < raw.length; i++) {
    let char = raw[i];
    if (char >= "0" && char <= "9") {
      cleaned += char;
    }
  }

  let digits = "";
  if (cleaned.startsWith("250") && cleaned.length === 12) {
    digits = cleaned.slice(3);
  } else if (cleaned.startsWith("0") && cleaned.length === 10) {
    digits = cleaned.slice(1);
  } else if (cleaned.length === 9) {
    digits = cleaned;
  } else {
    return null;
  }

  if (digits[0] !== "7") return null;

  return `+250 ${digits.slice(0, 3)} ${digits.slice(3, 6)} ${digits.slice(6)}`;
}

console.log(formatPhone("0788123456")); // "+250 788 123 456"
console.log(formatPhone("250 788 123 456")); // "+250 788 123 456"
console.log(formatPhone("07881234")); // null (Edge case)
console.log(formatPhone("0688123456")); // null (Edge case)


/*
Challenge 1.4: Initials
Understand: Input is a full name string; output is uppercase initials ignoring extra spaces.
Examples: "Aline Uwase" -> "AU", " jean de dieu " -> "JDD", " " -> ""
Plan: Trim string. Loop through characters, taking the first character and characters following spaces.
*/
function initials(fullName) {
  if (typeof fullName !== "string") return "";
  let trimmed = fullName.trim();
  if (trimmed === "") return "";

  let result = "";
  let takeNext = true;

  for (let i = 0; i < trimmed.length; i++) {
    let char = trimmed[i];
    if (char === " ") {
      takeNext = true;
    } else if (takeNext) {
      result += char.toUpperCase();
      takeNext = false;
    }
  }
  return result;
}

console.log(initials("Aline Uwase")); // "AU"
console.log(initials(" jean de dieu ")); // "JDD"
console.log(initials("   ")); // "" (Edge case)