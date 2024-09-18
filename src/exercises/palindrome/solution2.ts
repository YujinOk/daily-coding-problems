export const palindrome = (str: string): boolean => {
  const reversed = str.split("").reverse().join("");
  return reversed === str;
};

console.log(palindrome("abba"));
