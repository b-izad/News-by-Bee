import React from 'react';
import './Header.css';
import { FcApproval } from 'react-icons/fc';


function Header({ onSelectCategory }) {
  const categories = ['Business', 'Entertainment', 'Health', 'Science', 'Sports', 'Technology'];

  return (
    <header>
      <h1><FcApproval />Bee News</h1>
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
