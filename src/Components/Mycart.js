import React, { Component } from 'react'
import { connect } from 'react-redux';
import DB_CONFIG from '../Components/DBCONFIG'
import { addDetails } from '../actions/actions'

class Mycart extends Component {
  constructor(props) {
    super(props)
    this.bookDB = DB_CONFIG.child('books')
  }
  componentDidMount() {
    this.updateBooks()
  }
  updateBooks = () => {
    DB_CONFIG.on('value', snap => {
      const books = snap.val().books
      const users = snap.val().users
      this.props.addDetails(users, books)
    })
  }
  handleUpdate = book => {
    const { user: { userId } } = this.props
    const { bookId, bookName, bookAuthor, bookImageurl, likes = [] } = book
    likes.push(userId)
    const bookDetail = {
      bookId,
      bookName,
      bookAuthor,
      bookImageurl,
      likes
    }
    this.bookDB.child(bookId).set(bookDetail)
    this.updateBooks()
  }
  handleUnlikeupDate = book => {
    const { user: { userId } } = this.props
    const { bookId, bookName, bookAuthor, bookImageurl, likes } = book
    const Unlikes = likes.filter(like => like !== userId)
    const bookDetail = {
      bookId,
      bookName,
      bookAuthor,
      bookImageurl,
      likes: Unlikes
    }
    this.bookDB.child(bookId).set(bookDetail)
    this.updateBooks()
  }
  render() {
    const { data: { users, books } } = this.props
    const { user: { userId } } = this.props
    const myBooks = books ? books.filter(book => book.bookAuthor === userId) : null
    const List = myBooks ? (
      myBooks.map(book => {
        const bookLikes = book.likes ? `${book.likes.length} likes` : null
        const isLiked = book.likes ? book.likes.includes(userId) : false
        const authorName = users[book.bookAuthor].userName
        return (
          <div key={book.bookId}>
            <div className='my-books'>
              <div className='card'>
                <img
                  className='book-image'
                  alt={book.bookName}
                  src={book.bookImageurl}
                />
                <h5>Book name  : {book.bookName}</h5>
                <h5>Created by : {authorName}</h5>
                <hr />
                <div>
                  {
                    !isLiked ? (
                      <div>
                        <button
                          disabled={!userId ? true : false}
                          className='btn btn-outline-primary'
                          onClick={() => this.handleUpdate(book)}
                        >
                          Like
                        </button>
                        <span className='book-likes'>{bookLikes}</span>
                      </div>
                    ) : (
                        <div>
                          <button
                            className='btn btn-outline-primary'
                            onClick={() => this.handleUnlikeupDate(book)}
                          >
                            Unlike
                          </button>
                          <span className='book-likes'>{bookLikes}</span>
                        </div>
                      )
                  }
                </div>
              </div>
            </div>
          </div>
        )
      })
    ) : (
        <div>
          You have not added any Books
       </div>
      )
    return (
      <div className='container'>
        <h3>My books</h3>
        <div className='my-book-list'>
          <div className='row'>
            <div className='col-md-6 col-lg-5' >
              {List}
            </div>
          </div>
        </div>
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    data: state.data,
    user: state.auth
  }
}
export default connect(mapStateToProps, { addDetails })(Mycart)