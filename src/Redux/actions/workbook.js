export const UPDATE_WORKBOOK_DATA = "UPDATE_WORKBOOK_DATA";
export const SELECT_CELL = "SELECT_CELL";
export const CHANGE_WORKBOOK_NAME = "CHANGE_WORKBOOK_NAME";

export const updateWorkBookData = (dispatch, payload) => {
  dispatch({
    type: UPDATE_WORKBOOK_DATA,
    payload,
  });
};

export const updateSelectedCell = (dispatch, payload) => {
  dispatch({
    type: SELECT_CELL,
    payload,
  });
};

export const changeWorkbookName = (dispatch, payload) => {
  dispatch({
    type: CHANGE_WORKBOOK_NAME,
    payload,
  });
};
