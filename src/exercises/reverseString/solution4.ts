export const reverseString = (str: string): string => {
  return [...str].reverse().reduce((acc, cur) => {
    acc = acc += cur;
    return acc;
  }, "");
};
console.log(reverseString("hello"));
