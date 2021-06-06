import {
  SIGN_IN,
  SIGN_OUT,
  DATA,
  IMAGE_UPLOAD,
  INPUT_NAME,
  HANDLE_PROGRESS,
} from "./types";

export const signIn = (id, name, image, emailId) => {
  console.log("id", id, name, image);
  return {
    type: SIGN_IN,
    payload: {
      id,
      name,
      image,
      emailId,
    },
  };
};

export const signOut = () => {
  return {
    type: SIGN_OUT,
  };
};

export const addDetails = (users, books) => {
  return {
    type: DATA,
    users,
    books,
  };
};
export const addImage = (image) => {
  return {
    type: IMAGE_UPLOAD,
    image,
  };
};

export const handleName = (name) => {
  return {
    type: INPUT_NAME,
    name,
  };
};
export const handleProgress = (progress) => {
  return {
    type: HANDLE_PROGRESS,
    progress,
  };
};
