import { BOOKS, TOGGLE, LIKES } from "../actions/types";

const initState = [];

export const bookReducer = (state = initState, action) => {
  switch (action.type) {
    case BOOKS:
      const { book, user: { userId, userName, emailId } } = action.payload
      console.log('users :', userId, userName, emailId);
      return [
        ...state,
        {
          id: Math.random(),
          book: book,
          userId: userId,
          userName: userName,
          emailId: emailId,
          likes: [],
          isLiked: false
        }
      ]

    case TOGGLE:
      return state.map(book => book.id === action.id ? {
        ...book, isLiked: !book.isLiked
      } : book)

    case LIKES:
      return state
      
    default:
      return state;
  }
}