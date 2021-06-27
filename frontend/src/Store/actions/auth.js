import axios from "axios";

import * as actionTypes from "./actionTypes";

export const authStart = () => {
  console.log("start");
  return {
    type: actionTypes.AUTH_START,
  };
};

export const authSuccess = (token, userId) => {
  return {
    type: actionTypes.AUTH_SUCCESS,
    idToken: token,
    userId: userId,
  };
};

export const authSuccessAdmin = () => {
  return {
    type: actionTypes.AUTH_SUCCESS_ADMIN
  };
};

export const authFail = (error) => {
  console.log("aaa");
  return {
    type: actionTypes.AUTH_FAIL,
    error: error,
  };
};

export const logout = () => {
  console.log('reached')
  // localStorage.clear();
  return{
      type: actionTypes.LOGOUT
  }
}

export const verifyStart = () => {
  return {
    type: actionTypes.VERIFY_START,
  };
};

export const auth = (mobileNo) => {
  return (dispatch) => {
    dispatch(authStart());
    const authData = {
      mobileNo: mobileNo,
    };
    let url = "https://mobivax-api.herokuapp.com/user/login";
    axios
      .post(url, authData)
      .then((response) => {
        console.log(response);
        localStorage.setItem("phone", mobileNo);
        dispatch(verifyStart());
      })
      .catch((e) => {
        dispatch(authFail(e.message));
        console.log(e);
      });
  };
};


export const adminAuth = (username, password) => {
  console.log(username, password)
  console.log("adminAuth")
  return (dispatch) => {
    dispatch(authStart());
    const authData = {
      username,
      password
    };
    let url = "https://mobivax-api.herokuapp.com/van/vanlogin";
    axios
      .post(url, authData)
      .then((response) => {
        console.log(response);
        // localStorage.setItem("phone", mobileNo);
        dispatch(authSuccessAdmin());
      })
      .catch((e) => {
        dispatch(authFail(e.message));
        console.log(e);
      });
  };
};


export const verify = (mobileNo, otp) => {
  return (dispatch) => {
    dispatch(authStart());
    const authData = {
      mobileNo,
      otp,
    };
    let url = "https://mobivax-api.herokuapp.com/user/verify";

    axios
      .post(url, authData)
      .then((response) => {
        console.log(response);
        localStorage.setItem("token", response.data.token);
        localStorage.setItem("userId", response.data.userId);
        dispatch(authSuccess());
      })
      .catch((e) => {
        dispatch(authFail(e));
        console.log(e.message);
      });
  };
};
