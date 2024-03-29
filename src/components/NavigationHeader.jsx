import { NavLink } from 'react-router-dom';

export default function NavigationHeader() {
  return (
    <header className="nav-header">
      <nav className="navbar">
        <div>
          <div className="header-left-container">
            <h1>Bookstore CMS</h1>
            <span className="nav-link"><NavLink to="/">BOOKS</NavLink></span>
            <span className="nav-link"><NavLink to="/categories">CATEGORIES</NavLink></span>
          </div>
          <div className="user-icon"><i className="fa-solid fa-user"> </i></div>
        </div>
      </nav>
    </header>
  );
}
