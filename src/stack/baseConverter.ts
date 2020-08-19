import Stack from "./stack";

export const baseCobverter = (decNum, base) => {
  var remStack = new Stack(),
    rem,
    baseString = "",
    digits = "0123456789ABCDEF";
  while (decNum > 0) {
    rem = Math.floor(decNum % base);
    remStack.push(rem);
    decNum = Math.floor(decNum / base);
  }
  while (!remStack.isEmpty()) {
    baseString += digits[remStack.pop()];
  }
  return baseString;
};
const hex255 = baseCobverter(138, 16);
console.log(hex255);

const hex2 = baseCobverter(138, 2);
console.log(hex2);
