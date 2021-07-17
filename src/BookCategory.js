import React, { Component } from "react";

class BookCategory extends Component {
  // Please if there is any notes or any improvement, please tell me.
  //I really appreciate your reviewing to my app , I hope you like it.
  //I promise I'm improving myself and I will be better and better.
  //I will not give up at all.In the next project will be way improved than this
  //Thank you so much Udacity reviewer, and thanks to Udacity, it helped me alot:D .

  render() {
    const shelf = this.props.shelf;

    return (
      <div className="bookshelf">
        <h2 className="bookshelf-title">{shelf}</h2>
        <div className="bookshelf-books" />
      </div>
    );
  }
}

export default BookCategory;
