export const reverseString = (str: string): string => {
  let reversedStr: string = "";
  for (let i = str.length - 1; i >= 0; i--) {
    // console.log(str[i]);
    reversedStr += str[i];
  }

  return reversedStr;
};
console.log(reverseString("hello"));
