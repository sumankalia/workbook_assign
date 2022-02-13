import {
  CHANGE_WORKBOOK_NAME,
  UPDATE_WORKBOOK_DATA,
  SELECT_CELL,
} from "../actions/workbook";

const initialState = {
  workbookName: "WorkBook 1",
  workbookData: [],
  selectedCell: "",
};

const workbookReducer = (state = initialState, { type, payload = null }) => {
  switch (type) {
    case UPDATE_WORKBOOK_DATA:
      return {
        ...state,
        workbookData: payload,
      };

    case SELECT_CELL:
      return {
        ...state,
        selectedCell: payload,
      };

    case CHANGE_WORKBOOK_NAME:
      return {
        ...state,
        workbookName: payload,
      };

    default:
      return state;
  }
};

export default workbookReducer;
