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
      <div className="book-info">
        <p className="book-category">Non Fiction</p>
        <p className="book-title">{title}</p>
        <p className="book-author">{author}</p>
        <div className="btn-container">
          <button className="btn-remove-book" type="button" onClick={() => dispatchRemove()}>Remove</button>
          <div className="vertical-line"> </div>
          <button className="btn-comment-book" type="button">Comment</button>
          <div className="vertical-line"> </div>
          <button className="btn-edit-book" type="button">Edit</button>
        </div>
      </div>
      <div className="right-container">
        <div className="spinner"> </div>
        <div className="progress-container">
          <div className="progress-number">60%</div>
          <div className="progress-status">Completed</div>
        </div>
        <div className="vertical-line-big"> </div>
        <div className="chapter-container">
          <div className="current-chapter">CURRENT CHAPTER</div>
          <div className="chapter-name">Introduction</div>
          <button type="button" className="update-progress">UPDATE PROGRESS</button>
        </div>
      </div>
    </div>
  );
}

Book.propTypes = {
  title: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired,
  itemId: PropTypes.string.isRequired,
};
