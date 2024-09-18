type StringArg = string;

export const reverseString = (str: StringArg): string => {
  return str.split("").reverse().join("");
};

console.log(reverseString("hello"));
