import { useState } from 'react';
import { v4 as uuid } from 'uuid';
import { useDispatch } from 'react-redux';
import { addBook, getBookList } from '../redux/getApiData';

export default function AddBook() {
  const [title, setTitle] = useState('');
  const [author, setAuthor] = useState('');
  const dispatch = useDispatch();
  const URL = 'https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi/apps/';

  const submitBook = (e) => {
    e.preventDefault();
    const itemId = uuid();
    dispatch(addBook({
      URL,
      newBook: {
        item_id: itemId,
        title,
        author,
        category: '',
      },
    })).then(() => {
      dispatch(getBookList(URL));
    });
    setTitle('');
    setAuthor('');
  };

  return (
    <form action="">
      <input type="text" placeholder="Title" value={title} onChange={(e) => setTitle(e.target.value)} required />
      <input type="text" placeholder="Author" value={author} onChange={(e) => setAuthor(e.target.value)} required />
      <button type="submit" onClick={(e) => submitBook(e)}>Add book</button>
    </form>
  );
}
