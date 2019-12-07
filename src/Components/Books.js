import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux';
import { toggle } from '../actions/actions';

class Books extends Component {
  render() {
    console.log('books :', this.props.books);
    const { books } = this.props
    const bookList = books ? (
      books.map(book => {
        return (
          <div key={book.id}>
            <div className='card'>
              <h5>Book name: {book.book}</h5>
              <div>
                <button
                  className='btn btn-primary'
                  onClick={() => this.props.toggle(book.id)}
                >
                  {
                    book.isLiked ? 'Unlike' : 'Like'
                  }
                </button>
              </div>
            </div>
          </div>
        )
      })
    ) : (
        <div>
          No Books
      </div>
      )
    return (
      <div className='container'>
        <h2>Books</h2>
        <button className='btn btn-outline-primary'>
          <Link to='/addbook'>Add Book</Link>
        </button>
        <div className='book-list'>
          {bookList}
        </div>
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    books: state.books
  }
}
export default connect(mapStateToProps, { toggle })(Books)