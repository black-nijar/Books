import { SIGN_IN, SIGN_OUT, BOOKS, TOGGLE, LIKES } from './types';

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

export const addBook = (book,user) => {
  return {
    type: BOOKS,
    payload: {
      book,
      user
    }
  }
}

export const toggle = id => {
  return {
    type: TOGGLE,
    id
  }
}

export const likes = likes => {
  return {
    type: LIKES,
    likes
  }
}