export const reverseInt = (n: number): number => {
  const isNegative: boolean = n < 0;
  const arrNum: number[] = Array.from(String(n), (cur) => Number(cur));

  const reversedArr = arrNum
    .reduce((acc: number[], curr) => {
      return [curr, ...acc];
    }, [])
    .join("");
  return parseInt(reversedArr) * (isNegative ? -1 : 1);
};
console.log(reverseInt(-543));

// 1. arrNum variable puts the arg into number of array
// Array.from takes max 3 arg, and 2nd arg is callBack and in this case, it converts Number due to Number constructor
// 2. number of array gets reversed and joined back in
// 3. last it gets converted
