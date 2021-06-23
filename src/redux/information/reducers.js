import {
  LOAD_INFO_SUCCESS_ACTION,
  LOAD_INFO_FAILURE_ACTION,
} from "./constants";

const initialState = {
  information: [],
};

export function informationReducer(
  state = initialState,
  action
) {
  switch (action.type) {
    case LOAD_INFO_SUCCESS_ACTION:
      return {
        ...state,
        information: state.information.concat([
          action.information,
        ]),
      };
    case LOAD_INFO_FAILURE_ACTION:
      return state;
    default:
      return state;
  }
}
