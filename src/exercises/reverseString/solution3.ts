export const reverseString = (str: string): string => {
  return [...str].reverse().join("");
};
console.log(reverseString("hello"));
