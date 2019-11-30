import { SIGN_IN, SIGN_OUT } from './types';

export const signIn = (id,name,image ) => {
  return {
    type: SIGN_IN,
    payload: {
      id,
      name,
      image
    }
  }
}

export const signOut = () => {
  return {
    type: SIGN_OUT
  }
}