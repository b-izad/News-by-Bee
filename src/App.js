import React , {useState ,useEffect} from 'react';
import './App.css'
import Header from './Header';
import NewsList from './NewsList';
import TrendingNews from './TrendingNews';



function App() {
  const [articles, setArticles] = useState([]);
  const [visibleCount, setVisibleCount] = useState(3); 
  const [topHeadlines, setTopHeadlines] = useState([]);

  useEffect(() => {
    fetch(`https://newsapi.org/v2/top-headlines?country=us&apiKey=a8b244d7540e4b998c5fd2d6f00128aa`)
      .then(response => response.json())
      .then(data => {
        setTopHeadlines(data.articles);
        console.log(data.articles);  // Log the top headlines to the console
      })
      .catch(error => console.error('Error fetching top headlines:', error));
  }, []);

  const showMoreArticles = () => {
    setVisibleCount(prevCount => prevCount + 3); // Increase the count by 3 each time 'Show More' is clicked
  };

  
  const onSelectCategory = (category) => {
    console.log('Selected Category:', category);
   
    fetch(`https://newsapi.org/v2/top-headlines?country=us&category=${category}&apiKey=a8b244d7540e4b998c5fd2d6f00128aa`)
    .then(response => {
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      return response.json();  // Return the parsed JSON
    })
    .then(data => {
      // Filter out articles with missing or 'removed' content
      const filteredArticles = data.articles.filter(article => {
        return article.content !== '[Removed]' && article.content;
      });

      setArticles(filteredArticles);
    })
    .catch(error => {
      console.error('Error fetching news:', error);
    });
  };



  return (
    <div className="main-content">
    <Header onSelectCategory={onSelectCategory} />
    <div className="content-container"> {/* This container for side-by-side layout */}
      <div className="news-section"> {/* New section for NewsList and Show More button */}
        <NewsList articles={articles.slice(0, visibleCount)} />
        {visibleCount < articles.length && (
          <button onClick={showMoreArticles} className="show-more-button">Show More</button>
        )}
      </div>
      <TrendingNews articles={topHeadlines} />
    </div>
  </div>
);
}
export default App;