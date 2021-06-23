import axios from "axios";
import {
  LOAD_INFO_SUCCESS_ACTION,
  LOAD_INFO_FAILURE_ACTION,
} from "./constants";

function loadInfoSuccessActionCreator(info) {
  return {
    type: LOAD_INFO_SUCCESS_ACTION,
    information: info,
  };
}

function loadInfoFailureActionCreator(message) {
  return {
    type: LOAD_INFO_FAILURE_ACTION,
    message: message,
  };
}

export function getInfoThunk() {
  let token = localStorage.getItem("token");
  return (dispatch) => {
    return axios
      .get(
        `${process.env.REACT_APP_API_SERVER}/api/information`,
        { headers: { Authorization: `Bearer ${token}` } }
      )
      .then((response) => {
        if (response.data == null) {
          dispatch(
            loadInfoFailureActionCreator(
              "No response data."
            )
          );
        } else {
          dispatch(
            loadInfoSuccessActionCreator(response.data)
          );
        }
      });
  };
}
