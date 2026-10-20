// round2.js - Tier 2: Core Challenges

/*
Challenge 2.1: Palindrome Checker
Understand: Input is a text string; output is boolean checking if it reads the same forward and backward, ignoring case, spaces, and punctuation.
Examples: "Level" -> true, "Was it a car or a cat I saw?" -> true, "" -> true
Plan: Filter text to keep only lowercase letters and numbers. Compare string with its reversed version using loops.
*/
function isPalindrome(text) {
  if (typeof text !== "string") return false;
  let alphanumeric = "";
  
  for (let i = 0; i < text.length; i++) {
    let ch = text[i].toLowerCase();
    if ((ch >= "a" && ch <= "z") || (ch >= "0" && ch <= "9")) {
      alphanumeric += ch;
    }
  }

  let reversed = "";
  for (let i = alphanumeric.length - 1; i >= 0; i--) {
    reversed += alphanumeric[i];
  }

  return alphanumeric === reversed;
}

console.log(isPalindrome("Level")); // true
console.log(isPalindrome("Was it a car or a cat I saw?")); // true
console.log(isPalindrome("Kigali")); // false
console.log(isPalindrome("")); // true (Edge case)


/*
Challenge 2.2: Character Frequency
Understand: Input is text; output is an object counting each letter case-insensitively, letters only.
Examples: "Aab" -> { a: 2, b: 1 }
Plan: Initialize an empty object. Loop through text, keep letters only, convert to lowercase, increment count.
*/
function charFrequency(text) {
  let freq = {};
  if (typeof text !== "string") return freq;

  for (let i = 0; i < text.length; i++) {
    let ch = text[i].toLowerCase();
    if (ch >= "a" && ch <= "z") {
      if (freq[ch] === undefined) {
        freq[ch] = 1;
      } else {
        freq[ch]++;
      }
    }
  }
  return freq;
}

console.log(charFrequency("Aab")); // { a: 2, b: 1 }
console.log(charFrequency("a-A 1!")); // { a: 2 }
console.log(charFrequency("")); // {} (Edge case)


/*
Challenge 2.3: Second Largest
Understand: Input is an array of numbers; output is the second largest distinct value or null. Done in one pass without sorting.
Examples: [4, 9, 2, 7] -> 7, [5, 5, 3] -> 3, [2, 2] -> null
Plan: Track largest and second largest values while looping through the array.
*/
function secondLargest(numbers) {
  if (!Array.isArray(numbers) || numbers.length < 2) return null;

  let largest = -Infinity;
  let second = -Infinity;

  for (let i = 0; i < numbers.length; i++) {
    let num = numbers[i];
    if (num > largest) {
      second = largest;
      largest = num;
    } else if (num > second && num < largest) {
      second = num;
    }
  }

  return second === -Infinity ? null : second;
}

console.log(secondLargest([4, 9, 2, 7])); // 7
console.log(secondLargest([5, 5, 3])); // 3
console.log(secondLargest([2, 2])); // null (Edge case)
console.log(secondLargest([-1, -5, -3])); // -3 (Edge case)


/*
Challenge 2.4: Change Maker
Understand: Input is an amount in Rwandan Francs; output is an object detailing fewest notes/coins needed.
Examples: 3765 -> { 2000: 1, 1000: 1, 500: 1, 100: 2, 50: 1, 10: 1, 5: 1 }
Plan: Define denominations array [5000, 2000, 1000, 500, 100, 50, 20, 10, 5, 1]. Loop through each, compute count using integer math.
*/
function makeChange(amount) {
  let result = {};
  if (typeof amount !== "number" || amount <= 0) return result;

  let notes = [5000, 2000, 1000, 500, 100, 50, 20, 10, 5, 1];
  let remaining = amount;

  for (let i = 0; i < notes.length; i++) {
    let note = notes[i];
    if (remaining >= note) {
      let count = (remaining - (remaining % note)) / note;
      result[note] = count;
      remaining = remaining % note;
    }
  }
  return result;
}

console.log(makeChange(3765));
console.log(makeChange(0)); // {} (Edge case)
console.log(makeChange(8500)); // { 5000: 1, 2000: 1, 1000: 1, 500: 1 }