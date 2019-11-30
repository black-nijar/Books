import { SIGN_IN, SIGN_OUT } from "../actions/types";

const initState = {
  isSignedIn: null,
  userId: '',
  userName: '',
  userImage: ''
}

export const authReducer = (state = initState, action) => {
  switch (action.type) {
    case SIGN_IN:
     const { id ,name, image } = action.payload
      console.log('Authhhhh',id,name,image)
      return {
        isSignedIn: true,
        userId: id,
        userName: name,
        userImage: image
      }
    case SIGN_OUT:
      return {
        ...state,
        isSignedIn: false
      }
    default:
      return state;
  }
}