import React, { Component } from "react";

import * as BooksAPI from "./BooksAPI";

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
  async componentDidMount() {
    const books = await BooksAPI.getAll();
    this.setState(() => ({
      AllBooks: books
    }));
  }
  handleSearch = query => {
    this.setState(() => ({ SearchValue: query }));
    BooksAPI.search(query).then(BooksSearchQuery => {
      if (BooksSearchQuery && BooksSearchQuery.length > 0) {
        for (let i = 0; i < BooksSearchQuery.length; i++) {
          for (let j = 0; j < this.state.AllBooks.length; j++) {
            if (BooksSearchQuery[i].id === this.state.AllBooks[j].id) {
              const index = this.state.AllBooks.findIndex(
                book => book.id === BooksSearchQuery[i].id
              );
              BooksSearchQuery[i].shelf = this.state.AllBooks[index].shelf;
            }
          }
        }
      }
      this.setState(() => ({ BooksSearchQuery }));
    });
  };
  ChangeShelf = (shelf, Book) => {
    const updateIndex = this.state.AllBooks.findIndex(b => b.id === Book.id);
    const Books = this.state.AllBooks.map(b => b);
    const updatedBookList = Books;

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
