import React, { Component } from 'react'
import { connect } from 'react-redux';
import DB_CONFIG from '../Components/DBCONFIG'
import { addDetails } from '../actions/actions'

class Books extends Component {

  componentDidMount() {
    DB_CONFIG.on('value', snap => {
      const books = snap.val().books
      const users = snap.val().users
      this.props.addDetails(users, books)
    })
  }
  handleSubmit = () => {
    this.props.history.push('/addbook')
  }

  render() {
    const { data: { users, books } } = this.props
    const List = books ? (
      books.map(book => {
        const isLiked = false
        const authorName = users[book.bookAuthor].userName
        return (
          <div key={book.bookId}>
            <div className='card'>
              <h4>Book name  : {book.bookName}</h4>
              <h5>Created by : {authorName}</h5>
              <div>
                {
                  isLiked ? (
                    <div>
                      <button
                        className='btn btn-outline-primary'
                        onClick={this.handleUpdate}
                      >
                        Liked
                    </button>
                    </div>
                  ) : (<button
                    className='btn btn-outline-primary'
                    onClick={() => { console.log('Liked') }}
                  >
                    Like
                </button>)
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
            onClick={this.handleSubmit}
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
    data: state.data
  }
}
export default connect(mapStateToProps, { addDetails })(Books)