import PropTypes from 'prop-types';
import { useState } from 'react';

export default function AddBook({ bookList, setBookList }) {
  const [title, setTitle] = useState('');
  const [author, setAuthor] = useState('');

  const submitBook = (e) => {
    e.preventDefault();
    const id = bookList.length;
    setBookList([...bookList, { id, title, author }]);
    setTitle('');
    setAuthor('');
  };

  return (
    <form action="" onSubmit={(e) => submitBook(e)}>
      <input type="text" placeholder="Title" value={title} onChange={(e) => setTitle(e.target.value)} required />
      <input type="text" placeholder="Author" value={author} onChange={(e) => setAuthor(e.target.value)} required />
      <button type="submit">Add book</button>
    </form>
  );
}

AddBook.propTypes = {
  bookList: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    author: PropTypes.string.isRequired,
  })).isRequired,

  setBookList: PropTypes.func.isRequired,
};
