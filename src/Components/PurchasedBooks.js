import React, { Component } from "react";
import { connect } from "react-redux";
import { addDetails } from "../actions/actions";

class PurchasedBooks extends Component {
  render() {
    const {
      data: { users, books },
    } = this.props;
    const {
      user: { userId },
    } = this.props;
    const bookList = books
      ? books.filter((book) => book.purchasedBy === userId)
      : 0;
    const List = bookList.length ? (
      bookList.reverse().map((book) => {
        const bookLikes = book.likes ? `${book.likes.length} likes` : null;
        const authorName = users[book.bookAuthor].userName;
        return (
          <div key={book.bookId}>
            <div className="card">
              <img
                className="book-image"
                alt={book.bookName}
                src={book.bookImageurl}
              />
              <h5>Book name : {book.bookName}</h5>
              <h5>Created by : {authorName}</h5>
              <p>{bookLikes} </p>
            </div>
          </div>
        );
      })
    ) : (
      <div>You have not purchased any book...</div>
    );
    return (
      <div className="container">
        <div id="headingtwo">
          <button
            className="btn btn-link collapsed"
            data-toggle="collapse"
            data-target="#collapsetwo"
            aria-expanded="true"
            aria-controls="collapsetwo"
          >
            <h6 className="book-header">PurchasedBooks</h6>
          </button>
        </div>
        <div
          id="collapsetwo"
          className="collapse"
          aria-labelledby="headingtwo"
          data-parent="#accordion"
        >
          <div className="book-list">{List}</div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    data: state.data,
    user: state.auth,
  };
};
export default connect(mapStateToProps, { addDetails })(PurchasedBooks);
