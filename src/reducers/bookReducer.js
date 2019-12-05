import { BOOKS } from "../actions/types";

const initState = [];

export const bookReducer = (state = initState, action) => {
  switch (action.type) {
    case BOOKS:
      const { book } = action.payload
      return [
        ...state,
        {
          id: Math.random(),
          book: book
        }
      ]
    default:
      return state;
  }
}