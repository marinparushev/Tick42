/**
 * Converts an array of items to an object with keys - the ids of the items
 */
export const arrayToObject = (arr, key = "id") => {
  if (!arr) {
    return {};
  }

  return arr.reduce((obj, element) => {
    obj[element[key]] = element;
    return obj;
  }, {});
};
