import { DATA } from "../actions/types";

const initState = []

export const bookReducer = (state = initState, action) => {
  switch (action.type) {

    case DATA:
      {
        var books = [];
        for (let key in action.books) {
          const bookId = action.books[key].bookId
          const bookName = action.books[key].bookName
          const bookAuthor = action.books[key].bookAuthor
          const likes = action.books[key].likes
          books.push({
            bookId,
            bookName,
            bookAuthor,
            likes
          })
        }
        return {
          'users': action.users,
          'books': books
        }
      }

    default:
      return state;
  }
}