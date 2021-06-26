import React, {Component} from 'react';
import API from '../utils/api';
import {Jumbotron} from '../comps/jumbotron/index';
import {BookCard} from '../comps/BookCard';

class SavedBook extends Component {
  state = {books: []};
  loadSavedBook = () => {
    API.getSavedBook()
      .then(res => this.setState({books: res.data}))
      .catch(err => console.log(err))
  };

  deleteBook = event => {
    API.deleteBook(event.target.id)
      .then(res => this.loadSavedBook())
      .catch(err => console.log(err))
  };

  componentDidMount() {
    this.loadSavedBook()
  }

  render() {
    return (
      <div className="container">
        <Jumbotron
          title="My Books"
          lead="All of Your Favs One Location."
          instructions="View your book at Google, or remove it altogether..."
          image="https://i0.wp.com/www.wayfaringviews.com/wp-content/uploads/2016/05/Last_Bookstore.jpg?ssl=1"/>

        <BookCard
          books={this.state.books}
          buttonAction={this.deleteBook}
          buttonType="btn btn-danger mt-2"
          buttonText="Delete Book"/>
      </div>
    )
  }
}

export default SavedBook;