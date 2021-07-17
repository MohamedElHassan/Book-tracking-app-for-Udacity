import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import { BrowserRouter } from "react-router-dom";
import BookShelves from "./BookShelves";

ReactDOM.render(
  <BrowserRouter>
    <BookShelves />
  </BrowserRouter>,
  document.getElementById("root")
);
