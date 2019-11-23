export const fetchData = (url, actionType, dispatch) => {
  dispatch({ type: actionType });

  return dispatch => {
    fetch(url)
      .then(resp => resp.json())
      .then(data =>
        dispatch({
          type: `${actionType}_SUCCESS`,
          data
        })
      )
      .catch(error => {
        dispatch({
          type: `${actionType}_ERROR`,
          error: error.toString()
        });
      });
  };
};

/**
 * Converts an array of items to an object with keys - the ids of the items
 */
export const arrayToObject = arr => {
  return arr.reduce((obj, element) => {
    obj[element.id] = element;
    return obj;
  }, {});
};
