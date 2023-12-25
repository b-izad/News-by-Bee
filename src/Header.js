import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Header.css';
import { FcApproval } from 'react-icons/fc';
import { Link } from 'react-router-dom';
import { categories } from './const';

function Header({ onSelectCategory }) {
  const navigate = useNavigate();

  const handleCategoryClick = (category) => {
    onSelectCategory(category);
    navigate(`/category/${category.toLowerCase()}`);
  };

  return (
    <header>
      <Link to="/" className="home-link"><h1><FcApproval /> Bee News</h1></Link>
      <nav>
        {categories.map(category => (
          <button key={category} onClick={() => handleCategoryClick(category)} className="category-button">
            {category}
          </button>
        ))}
      </nav>
    </header>
  );
}

export default Header;
