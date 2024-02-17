export const GET_USERPROFILE = "GET_USERPROFILE";
export const EDIT_USERNAME = "EDIT_USERNAME";
export const LOGOUT = "LOGOUT";

/* User data recovery action */
export const userProfile = (userData) => {
  return {
    type: GET_USERPROFILE,
    payload: userData,
  };
};

/* Username update action */
export const updateUsername = (username) => {
  return {
    type: EDIT_USERNAME,
    payload: username,
  };
};

export const logout = () => {
  return {
    type: LOGOUT,
  };
};