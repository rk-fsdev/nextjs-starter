export const isStringSize = (str, maxSize, minSize) => {
  return str.length <= maxSize && str.length >= minSize ? true : false;
};
