import React, { Component } from "react";
import { connect } from "react-redux";
import DB_CONFIG from "../Components/DBCONFIG";
import { addImage, handleProgress } from "../actions/actions";
import { storage } from "../Components/DBCONFIG";

class Home extends Component {
  constructor(props) {
    super(props);
    this.bookDB = DB_CONFIG.child("books");
  }
  handleImageChange = (e) => {
    const image = e.target.files[0];
    this.props.addImage(image);
  };
  handleImageUpload = () => {
    const { image } = this.props;
    const uploadImage = storage.ref(`images/${image.name}`).put(image);
    uploadImage.on(
      "state_changed",
      (snapshot) => {
        const progress = Math.round(
          (snapshot.bytesTransferred / snapshot.totalBytes) * 100
        );
        this.props.handleProgress(progress);
      },
      (error) => {
        console.log(error);
      },
      () => {
        storage
          .ref("images")
          .child(image.name)
          .getDownloadURL()
          .then((url) => {
            this.handleSubmit(url);
          });
      }
    );
  };
  handleSubmit = (url) => {
    const { userId } = this.props.user;
    const bookImageurl = url;
    const bookName = this.book.value;
    const bookId = new Date().getTime();
    const bookAuthor = userId;
    if (bookAuthor === null || bookAuthor === undefined) {
      alert(`Check your details`);
    } else {
      const bookDetail = {
        bookId,
        bookName,
        bookAuthor,
        bookImageurl,
      };
      this.bookDB.child(bookId).set(bookDetail);
      this.book.value = "";
      this.props.history.push("/");
    }
  };
  render() {
    const { progress } = this.props;
    return (
      <div className="ui container" style={{marginTop: '100px'}}>
        <h5 className="welcome">Welcome {this.props.user.userName}</h5>
        <div className='card' style={{width: '370px'}}>
          <form className="form">
            <div className="book-names">
              <div>
                <label htmlFor="book-name">Book name :</label>
                <input
                  className="form-control"
                  placeholder="Book name"
                  type="text"
                  ref={(input) => (this.book = input)}
                  required
                />
                <br />
              </div>
              <div>
                <label htmlFor="book-image">Book image :</label>
                <input
                  className="form-control-file"
                  type="file"
                  onChange={this.handleImageChange}
                />
              </div>
              <br />
              <div className="publish-book">
                {progress ? (
                  <div>
                    <progress value={progress} max="100" />
                    <br />
                    please wait...
                  </div>
                ) : null}
                <button
                  disabled={!this.props.image ? true : false}
                  type="submit"
                  className="btn btn-primary"
                  onClick={() => this.handleImageUpload()}
                >
                  Publish
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    user: state.auth,
    image: state.data.image,
    progress: state.data.progress,
  };
};
export default connect(mapStateToProps, { addImage, handleProgress })(Home);
