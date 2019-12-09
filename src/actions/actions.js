import { SIGN_IN, SIGN_OUT, DATA } from './types';

export const signIn = (id, name, image, emailId) => {
  return {
    type: SIGN_IN,
    payload: {
      id,
      name,
      image,
      emailId
    }
  }
}

export const signOut = () => {
  return {
    type: SIGN_OUT
  }
}

export const addDetails = (users, books )=> {
  return {
    type: DATA,
    users,
    books
  }
}