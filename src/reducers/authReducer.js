import { SIGN_IN, SIGN_OUT } from "../actions/types";

const initState = [ ]

export const authReducer = (state = initState, action) => {
  switch (action.type) {
    case SIGN_IN:
      return state;
    case SIGN_OUT:
      return state;
    default:
      return state;
  }
}