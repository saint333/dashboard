import { authCase } from "../common/AuthConstants";

export const reducerAuth = (state, action) => {
  switch (action.type) {
    case authCase.LOGIN:
      return {
        ...state,
        user: action.user,
        token: action.token,
      };
    case authCase.LOGOUT:
      return {
        ...state,
        user: null,
        token: null,
      };
    default:
      return state;
  }
}