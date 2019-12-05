import { SIGN_IN, SIGN_OUT, BOOKS } from './types';

export const signIn = (id,name,image, emailId) => {
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

export const addBook = book => {
  return {
    type: BOOKS,
    payload: {
      book
    }
  }
}