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
