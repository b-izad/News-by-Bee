import React from 'react';
import './Header.css';
import { FcApproval } from 'react-icons/fc';
import { Link } from 'react-router-dom';


function Header({ onSelectCategory }) {
  const categories = ['Business', 'Entertainment', 'Health', 'Science', 'Sports', 'Technology'];

  return (
    <header>
      <Link to="/" className="home-link">
      <h1><FcApproval />Bee News</h1></Link>
      <nav>
        {categories.map(category => (
          <button key={category} onClick={() => onSelectCategory(category)}>
            {category}
          </button>
        ))}
      </nav>
    </header>
  );
}

export default Header;
