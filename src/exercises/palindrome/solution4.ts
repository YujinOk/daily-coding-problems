export const palindrome = (str: string): boolean => {
  const j = str.length - 1;

  for (let i = 0; i < j / 2; i++) {
    if (str[i] !== str[j - i]) {
      return false;
    }
  }
  return true;
};

console.log(palindrome("abba")); // true
console.log(palindrome("abcdba"));
