import React, { useState, useEffect } from 'react';
import './App.css';
import Header from './Header';
import NewsList from './NewsList';
import TrendingNews from './TrendingNews';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

function App() {
  const [articles, setArticles] = useState([]);
  const [visibleCount, setVisibleCount] = useState(3); 
  const [topHeadlines, setTopHeadlines] = useState([]);

  useEffect(() => {
    fetch(`https://newsapi.org/v2/top-headlines?country=us&apiKey=a8b244d7540e4b998c5fd2d6f00128aa`)
      .then(response => response.json())
      .then(data => {
        setTopHeadlines(data.articles);
      })
      .catch(error => console.error('Error fetching top headlines:', error));
  }, []);

  const showMoreArticles = () => {
    setVisibleCount(prevCount => prevCount + 3); // Increase the count by 3 each time 'Show More' is clicked
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
      const filteredArticles = data.articles.filter(article => article.content !== '[Removed]' && article.content);
      setArticles(filteredArticles);
    })
    .catch(error => {
      console.error('Error fetching news:', error);
    });
  };

  return (
    <Router>
      <div className="main-content">
        <Header onSelectCategory={onSelectCategory} />
        <Routes>
          <Route path="/" element={
            <div className="content-container">
              <div className="news-section">
                <NewsList articles={articles.slice(0, visibleCount)} />
                {visibleCount < articles.length && (
                  <button onClick={showMoreArticles} className="show-more-button">Show More</button>
                )}
              </div>
              <TrendingNews articles={topHeadlines} />
            </div>
          } />
          {/* Define other routes here */}
        </Routes>
      </div>
    </Router>
  );
}

export default App;