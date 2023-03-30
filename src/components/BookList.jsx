import { useState } from 'react';
import AddBook from './AddBook';
import Book from './Book';

export default function BookList() {
  const [bookList, setBookList] = useState([
    {
      id: 0,
      title: '1984',
      author: 'George Orwell',
    },
    {
      id: 1,
      title: 'Atomic Habits',
      author: 'James Clear',
    },
  ]);

  return (
    <section className="books-container-section">
      {bookList.map((book) => (
        <Book key={book.id} title={book.title} author={book.author} />
      ))}

      <AddBook bookList={bookList} setBookList={setBookList} />
    </section>
  );
}
