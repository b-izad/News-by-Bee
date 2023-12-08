import React from 'react';
import './Header.css';


function Header({ onSelectCategory }) {
  const categories = ['Business', 'Entertainment', 'Health', 'Science', 'Sports', 'Technology'];

  return (
    <header>
      <h1>News By Bee</h1>
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
