import { DATA, IMAGE_UPLOAD, IMAGE_URL } from "../actions/types";

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
          const bookImageurl = action.books[key].bookImageurl
          const likes = action.books[key].likes
          const purchasedBy = action.books[key].purchasedBy
          books.push({
            bookId,
            bookName,
            bookAuthor,
            bookImageurl,
            likes,
            purchasedBy
          })
        }
        return {
          'users': action.users,
          'books': books
        }
      }
    case IMAGE_UPLOAD:
      return { 'image': action.image }

    case IMAGE_URL:
      return { 'url': action.url }

    default:
      return state;
  }
}