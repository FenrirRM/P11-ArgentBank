import { LOGIN_SUCCESS, LOGIN_FAIL, LOGOUT } from "../actions/auth.actions";

/* state initiale de l'authentication */
const initialState = {
  status: "VOID",
  isConnected: false,
  token: null,
  error: null,
}

export const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOGIN_SUCCESS:
      return {
        ...state,
        status: "SUCCEEDED",
        isConnected: true,
        token: action.payload,
        error: null,
      };

    case LOGIN_FAIL: {
      return {
        ...state,
        status: "FAILED",
        isConnected: false,
        error: action.payload,
      };
    }
    case LOGOUT: {
      localStorage.removeItem("token");
      return initialState;
    }
    default:
      return state;
  }
};
