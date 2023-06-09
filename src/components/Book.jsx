import PropTypes from 'prop-types';
import React from 'react';
import { useDispatch } from 'react-redux';
import { removeBook } from '../redux/books/booksSlice';

export default function Book({ title, author, id }) {
  const dispatch = useDispatch();

  return (
    <div className="book-container">
      <p>{title}</p>
      <p>{author}</p>
      <button type="button" onClick={() => dispatch(removeBook(id))}>Remove</button>
    </div>
  );
}

Book.propTypes = {
  title: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
};
