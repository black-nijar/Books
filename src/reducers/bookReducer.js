import { DATA } from "../actions/types";

const initState = []

export const bookReducer = (state = initState, action) => {
  switch (action.type) {

    case DATA:
      {
        var books = [];
        for (let key in action.books) {
          const bookId = action.books[key].id
          const bookName = action.books[key].bookName
          const bookAuthor = action.books[key].authorId
          books.push({
            bookId,
            bookName,
            bookAuthor
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