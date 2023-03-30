import {
  BrowserRouter, Route, Routes,
} from 'react-router-dom';
import BookList from './components/BookList';
import NavigationHeader from './components/NavigationHeader';
import Categories from './components/Categories';

function App() {
  return (
    <div className="App">
      <BrowserRouter>

        <NavigationHeader />

        <Routes>
          <Route index element={<BookList />} />
          <Route path="/" element={<BookList />} />
          <Route path="/categories" element={<Categories />} />
        </Routes>

      </BrowserRouter>
    </div>
  );
}

export default App;
