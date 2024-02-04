export const LOGIN_SUCCESS = "LOGIN_SUCCESS";
export const LOGIN_FAIL = "LOGIN_FAIL";
export const LOGOUT = "LOGOUT";

export const loginSuccess = (token) => {
  return {
    type: LOGIN_SUCCESS,
    payload: token,
  };
};

export const loginFailed = (error) => {
  return {
    type: LOGIN_FAIL,
    payload: error,
  };
};

export const logout = () => {
  return {
    type: LOGOUT,
  };
};
