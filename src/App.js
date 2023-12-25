import React, { useState, useEffect } from 'react';
import './App.css';
import Header from './Header';
import NewsList from './NewsList';
import TrendingNews from './TrendingNews';
import Home from './Home';
import Footer from './Footer'; // Import the Footer component
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { categories } from './const';

function App() {
  const [articles, setArticles] = useState([]);
  const [topHeadlines, setTopHeadlines] = useState([]);

  useEffect(() => {
    fetchTopHeadlines();
  }, []);

  const fetchTopHeadlines = () => {
    fetch(`https://newsapi.org/v2/top-headlines?country=us&apiKey=a8b244d7540e4b998c5fd2d6f00128aa`)
      .then(response => response.json())
      .then(data => {
        setTopHeadlines(data.articles);
      })
      .catch(error => console.error('Error fetching top headlines:', error));
  };

  const onSelectCategory = (category) => {
    fetch(`https://newsapi.org/v2/top-headlines?country=us&category=${category}&apiKey=a8b244d7540e4b998c5fd2d6f00128aa`)
      .then(response => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .then(data => {
        setArticles(data.articles);
      })
      .catch(error => {
        console.error('Error fetching news:', error);
      });
  };

  return (
    <Router>
      <div className="app-container">
        <Header onSelectCategory={onSelectCategory} />
        <div className="main-content">
          <Routes>
            <Route path="/" element={<Home topHeadlines={topHeadlines} />} />
            {categories.map((category) => (
              <Route 
                key={category} 
                path={`/category/${category.toLowerCase()}`} 
                element={
                  <div className="content-container">
                    <NewsList articles={articles} />
                    <TrendingNews articles={topHeadlines} />
                  </div>
                } 
              />
            ))}
          </Routes>
        </div>
        <Footer />
      </div>
    </Router>
  );
}
          
 

export default App;
