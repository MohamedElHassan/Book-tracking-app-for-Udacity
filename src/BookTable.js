import React, { Component } from "react";
import PropTypes from "prop-types";
import BookCategory from "./BookCategory";
import BookRow from "./BookRow";

class BookTable extends Component {
  render() {
    const { AllBooks } = this.props;
// Please if there is any notes or any improvement, please tell me.
  //I really appreciate your reviewing to my app , I hope you like it.
  //I promise I'm improving myself and I will be better and better.
  //I will not give up at all.In the next project will be way improved than this
  //Thank you so much Udacity reviewer, and thanks to Udacity, it helped me alot:D .
    return (
      <div className="app">
        <div className="list-books">
          <div className="list-books-title">
            <h1>MyReads</h1>
          </div>
          <div className="list-books-content" />

          <BookRow
            title="Currently Reading"
            Book={AllBooks.filter(book => book.shelf === "currentlyReading")}
            onChangeShelf={this.props.onChangeShelf}
          />

          <BookRow
            title="Want To Read"
            Book={AllBooks.filter(book => book.shelf === "wantToRead")}
            onChangeShelf={this.props.onChangeShelf}
          />

          <BookRow
            title="Read"
            Book={AllBooks.filter(book => book.shelf === "read")}
            onChangeShelf={this.props.onChangeShelf}
          />
        </div>
      </div>
    );
  }
}
BookTable.PropTypes = {
  AllBooks: PropTypes.array.isRequired,
  onChangeShelf: PropTypes.func.isRequired
};

export default BookTable;
