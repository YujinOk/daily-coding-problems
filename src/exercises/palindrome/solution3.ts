export const palindrome = (str: string): boolean => {
  return str
    .split("")
    .every((cur: string, i: number) => cur === str[str.length - 1 - i]);
};

console.log(palindrome("abba"));
