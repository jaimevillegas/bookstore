import { useState } from 'react';
import { v4 as uuid } from 'uuid';
import { useDispatch } from 'react-redux';
import { addBook } from '../redux/books/booksSlice';

export default function AddBook() {
  const [title, setTitle] = useState('');
  const [author, setAuthor] = useState('');
  const dispatch = useDispatch();

  const id = uuid();
  const submitBook = (e) => {
    e.preventDefault();
    setTitle('');
    setAuthor('');
  };

  return (
    <form action="" onSubmit={(e) => submitBook(e)}>
      <input type="text" placeholder="Title" value={title} onChange={(e) => setTitle(e.target.value)} required />
      <input type="text" placeholder="Author" value={author} onChange={(e) => setAuthor(e.target.value)} required />
      <button type="submit" onClick={() => dispatch(addBook({ title, author, id }))}>Add book</button>
    </form>
  );
}
