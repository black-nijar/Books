import React, { Component } from 'react'
import { connect } from 'react-redux';
import DB_CONFIG from '../Components/DBCONFIG'
import { addDetails } from '../actions/actions'

class Books extends Component {
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
    const { bookId, bookName, bookAuthor, likes = [] } = book
    likes.push(userId)
    const bookDetail = {
      bookId,
      bookName,
      bookAuthor,
      likes
    }
    this.bookDB.child(bookId).set(bookDetail)
    this.updateBooks()
  }
  handleUnlikeupDate = book => {
    const { user: { userId } } = this.props
    const { bookId, bookName, bookAuthor, likes } = book
    const Unlikes = likes.filter(like => like !== userId)
    const bookDetail = {
      bookId,
      bookName,
      bookAuthor,
      likes: Unlikes
    }
    this.bookDB.child(bookId).set(bookDetail)
    this.updateBooks()
  }
  render() {
    const { data: { users, books } } = this.props
    const { user: { userId } } = this.props
    const List = books ? (
      books.map(book => {
        const bookLikes = book.likes ? `${book.likes.length} likes` : null
        const isLiked = book.likes ? book.likes.includes(userId) : false
        const authorName = users[book.bookAuthor].userName
        return (
          <div key={book.bookId}>
            <div className='card'>
              <h5>Book name  : {book.bookName}</h5>
              <h5>Created by : {authorName}</h5>
              <hr />
              <div>
                {
                  !isLiked ? (
                    <div>
                      <button
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
        )
      })
    ) : (
        <div>
          No Books...
      </div>
      )
    return (
      <div className='container'>
        <div className='header'>
          <span className='book-header'>Books</span>
          <button className='btn btn-outline-primary'
            onClick={() => this.props.history.push('/addbook')}
          >
            Add Book
          </button>
        </div>
        <div className='book-list'>
          {List}
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
export default connect(mapStateToProps, { addDetails })(Books)