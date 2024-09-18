// --- Directions
// Given an integer, return an integer that is the reverse
// ordering of numbers.
// --- Examples
//   reverseInt(15) === 51
//   reverseInt(981) === 189
//   reverseInt(500) === 5
//   reverseInt(-15) === -51
//   reverseInt(-90) === -9

export const reverseInt = (n: number): number => {
  return parseInt(n.toString().split("").reverse().join("")) * Math.sign(n);
};

// 1. n gets converted to string
// 2. then now it gets splitted and put into an array
// 3. reverse them and join back them
// 3. so for example, if n was 123 it now became "123"
// 4. now "123" -> becomes int and 123 * 1 =123 because Math.sign returns 1 (if posivie), -1 (negative), or 0 (if 0)
// Math.sign and arg being the original arg ensures when the orginal arg was a negative digit
