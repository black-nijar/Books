import React, { Component } from 'react'
import { connect } from 'react-redux';

class Books extends Component {
  render() {
    console.log('books :', this.props.books);
    const { books} = this.props
    const listBooks = books ? (
      books.map(book => {
        return(
          <div key={book.id}>
            {book.book}
          </div>
        )
      })
    ):(
      <div>
        No Books...
      </div>
    )
    return (
      <div className='container'>
        <h2>Books</h2>
          {listBooks}
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    books: state.books
  }
}
export default connect(mapStateToProps)(Books)