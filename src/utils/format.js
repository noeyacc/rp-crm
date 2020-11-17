// 左補零至指定長度
export const paddingZeroLeft = (str, length) => {
  if (typeof str !== "string") {
    str = str + "";
  }
  if (str.length >= length) {
    return str;
  } else {
    return paddingZeroLeft("0" + str, length);
  }
};
