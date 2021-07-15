import React, { Component } from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import * as BooksAPI from "./BooksAPI";
class SearchBar extends Component {
  // Please if there is any notes or any improvement, please tell me.
  //I really appreciate your reviewing to my app , I hope you like it.
  //I promise I'm improving myself and I will be better and better.
  //I will not give up at all.In the next project will be way improved than this
  //Thank you so much Udacity reviewer, and thanks to Udacity, it helped me alot:D .
  render() {
    const {
      AllBooks,
      searchValue,
      BooksSearchQuery,
      onSearch,
      onChangeShelf
    } = this.props;

    return (
      <div>
        <div className="search-books">
          <div className="search-books-bar">
            <Link to="/" className="close-search">
              Close
            </Link>
            <div className="search-books-input-wrapper">
              <input
                value={searchValue}
                onChange={e => onSearch(e.target.value)}
                type="text"
                placeholder="Search by title or author"
              />
            </div>
          </div>
          <div className="search-books-results">
            <ol className="books-grid">
              {searchValue === ""
                ? ""
                : BooksSearchQuery.map(Book => (
                    <li key={Book.id}>
                      <div className="book">
                        <div className="book-top">
                          <div
                            className="book-cover"
                            style={{
                              width: 128,
                              height: 192,
                              backgroundImage: `url(${
                                Book.imageLinks.smallThumbnail
                              })`
                            }}
                          />
                          <div className="book-shelf-changer">
                            <select
                              onChange={e => {
                                onChangeShelf(e.target.value, Book);
                              }}
                              value={Book.shelf ? Book.shelf : "none"}
                            >
                              <option value="move" disabled>
                                Move to...
                              </option>
                              <option value="currentlyReading">
                                Currently Reading
                              </option>
                              <option value="wantToRead">Want to Read</option>
                              <option value="read">Read</option>
                              <option value="none">None</option>
                            </select>
                          </div>
                        </div>
                        <div className="book-title">{Book.title}</div>
                        <div className="book-authors">{Book.authors}</div>
                      </div>
                    </li>
                  ))}
            </ol>
          </div>
        </div>
        <div />
      </div>
    );
  }
}
SearchBar.PropTypes = {
  AllBooks: PropTypes.array.isRequired,
  searchValue: PropTypes.string.isRequired,
  BooksSearchQuery: PropTypes.array.isRequired,
  onSearch: PropTypes.func.isRequired,
  onChangeShelf: PropTypes.func.isRequired
};

export default SearchBar;
