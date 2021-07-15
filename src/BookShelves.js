import React, { Component } from "react";
import PropTypes from "prop-types";
import * as BooksAPI from "./BooksAPI";
import BookRow from "./BookRow";
import BookCategory from "./BookCategory";
import SearchBar from "./SearchBar";
import { Link } from "react-router-dom";
import { Route } from "react-router-dom";
import "./App.css";
import BookTable from "./BookTable";

class BookShelves extends Component {
  state = {
    AllBooks: [],
    SearchValue: "",
    BooksSearchQuery: [],
    flip: false
  };
  // Please if there is any notes or any improvement, please tell me.
  //I really appreciate your reviewing to my app , I hope you like it.
  //I promise I'm improving myself and I will be better and better.
  //I will not give up at all.In the next project will be way improved than this
  //Thank you so much Udacity reviewer, and thanks to Udacity, it helped me alot:D .
  componentDidMount() {
    BooksAPI.getAll().then(AllBooks => {
      this.setState(() => ({
        AllBooks
      }));
    });
  }
  handleSearch = query => {
    this.setState(() => ({ SearchValue: query.trim() }));
    BooksAPI.search(query)
      .then(BooksSearchQuery => {
        this.setState(() => ({
          BooksSearchQuery
        }));
      })
      .catch(error => alert("Watch Out!! , Get ready for the error"));
  };
  ChangeShelf = (shelf, Book) => {
    const updateIndex = this.state.AllBooks.findIndex(b => b.id === Book.id);
    const updatedBookList = this.state.AllBooks;

    if (updateIndex === -1) {
      Book.shelf = shelf;
      updatedBookList.push(Book);
    } else {
      updatedBookList[updateIndex].shelf = shelf;
    }
    this.setState({
      AllBooks: updatedBookList
    });

    BooksAPI.update(Book, shelf);

    this.setState(currentState => ({
      flip: !currentState.flip
    }));
  };

  render() {
    return (
      <div>
        <div>
          <Route
            exact
            path="/search"
            render={() => (
              <SearchBar
                AllBooks={this.state.AllBooks}
                searchValue={this.state.SearchValue}
                BooksSearchQuery={this.state.BooksSearchQuery}
                onSearch={this.handleSearch}
                onChangeShelf={this.ChangeShelf}
              />
            )}
          />
          <Route
            exact
            path="/"
            render={() => (
              <BookTable
                onChangeShelf={this.ChangeShelf}
                AllBooks={this.state.AllBooks}
              />
            )}
          />
          <div className="open-search">
            <Link to="/search" className="button">
              Search
            </Link>
          </div>
        </div>
      </div>
    );
  }
}

export default BookShelves;
