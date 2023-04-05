import PropTypes from 'prop-types';
import React from 'react';
import { useDispatch } from 'react-redux';
import { getBookList, removeBook } from '../redux/getApiData';

export default function Book({ title, author, itemId }) {
  const dispatch = useDispatch();
  const URL = 'https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi/apps/';

  const dispatchRemove = () => {
    dispatch(removeBook({ URL, itemId }))
      .then(() => {
        dispatch(getBookList(URL));
      });
  };

  return (
    <div className="book-container">
      <p>{title}</p>
      <p>{author}</p>
      <button type="button" onClick={() => dispatchRemove()}>Remove</button>
    </div>
  );
}

Book.propTypes = {
  title: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired,
  itemId: PropTypes.string.isRequired,
};
