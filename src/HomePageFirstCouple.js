// HomePageFirstCouple.js
import React from 'react';
import './HomePageFirstCouple.css'; // Make sure to create this CSS file

const HomePageFirstCouple = ({ news }) => {
  if (!news || news.length === 0) {
    return <div>Loading...</div>;
  }

  return (
    <div className="home-page-first-couple">
      {news.slice(3, 5).map((item, index) => (
        <div key={index} className="each-single-from-couple">
          <img src={item.urlToImage} alt={item.title} className="each-single-from-couple-image" />
          <h3 className="each-single-from-couple-title">{item.title}</h3>
        </div>
      ))}
    </div>
  );
};

export default HomePageFirstCouple;
