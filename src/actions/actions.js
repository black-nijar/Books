import { SIGN_IN, SIGN_OUT, DATA, IMAGE_UPLOAD, IMAGE_URL, INPUT_NAME } from './types';

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

export const addDetails = (users, books) => {
  return {
    type: DATA,
    users,
    books
  }
}
export const addImage = image => {
  return {
    type: IMAGE_UPLOAD,
    image
  }
}
export const addImageUrl = url => {
  return {
    type: IMAGE_URL,
    url
  }
}

export const handleName = name => {
  return {
    type: INPUT_NAME,
    name
  }
}