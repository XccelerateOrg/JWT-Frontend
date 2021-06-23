import axios from "axios";
import {
  LOGIN_SUCCESS_ACTION,
  LOGIN_FAILURE_ACTION,
  LOGOUT_NOW_ACTION,
} from "./constants";

export const loginUserThunk =
  (email, password) => async (dispatch) => {
    try {
      console.log(email, password);
      const response = await axios.post(
        `${process.env.REACT_APP_API_SERVER}/api/login`,
        {
          email: email,
          password: password,
        }
      );
      const { data } = response;
      if (data == null) {
        dispatch({
          type: LOGIN_FAILURE_ACTION,
          message: "Unknown Error",
        });
      } else if (!data.token) {
        dispatch({
          type: LOGIN_FAILURE_ACTION,
          message: data.message || "No Token!",
        });
      } else {
        localStorage.setItem("token", data.token);
        dispatch({ type: LOGIN_SUCCESS_ACTION });
      }
    } catch (err) {
      console.log("Error: ", err);
    }
  };

export const loginFacebookThunk =
  (accessToken) => async (dispatch) => {
    try {
      console.log(accessToken);
      const { data } = await axios.post(
        `${process.env.REACT_APP_API_SERVER}/api/login/facebook`,
        {
          access_token: accessToken,
        }
      );
      if (data == null) {
        dispatch({
          type: LOGIN_FAILURE_ACTION,
          message: "Unknown Error",
        });
      } else if (!data.token) {
        // If there was a problem, we want to
        // dispatch the error condition
        dispatch({
          type: LOGIN_FAILURE_ACTION,
          message: data.message || "",
        });
      } else {
        // If login was successful, set the token in local storage
        localStorage.setItem("token", data.token);
        // Dispatch the success action
        dispatch({ type: LOGIN_SUCCESS_ACTION });
      }
    } catch (err) {
      console.log("Error: ", err);
    }
  };

export const logoutNowThunk = () => (dispatch) => {
  localStorage.clear("token");
  dispatch({ type: LOGOUT_NOW_ACTION });
};
