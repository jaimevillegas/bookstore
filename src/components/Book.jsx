/* eslint-disable react/prop-types */
import React from 'react';

export default function Book({ title, author }) {
  return (
    <div className="book-container">
      <p>{title}</p>
      <p>{author}</p>
      <button type="button">Remove</button>
    </div>
  );
}
