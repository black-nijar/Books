import { SIGN_IN, SIGN_OUT } from "../actions/types";

const initState = {
  isSignedIn: null,
  userId: null,
  userName: null,
  userImage: null,
  emailId: null
}

export const authReducer = (state = initState, action) => {
  switch (action.type) {
    case SIGN_IN:
      const { id, name, image, emailId } = action.payload
      return {
        ...state,
        isSignedIn: true,
        userId: id,
        userName: name,
        userImage: image,
        userEmail: emailId
      }
    case SIGN_OUT:
      return {
        isSignedIn: false
      }
    default:
      return state;
  }
}