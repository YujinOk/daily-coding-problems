export const palindrome = (str: string): boolean => {
  let j: number = str.length - 1;

  for (let i = 0; i < j; i++) {
    if (str[i] !== str[j]) return false;
    j--;
  }
  return true;
};

console.log(palindrome("abba"));
console.log(palindrome("abcdba"));
