import React , {useState} from 'react';
import Header from './Header';
import NewsList from './NewsList';

function App() {
  const [articles, setArticles] = useState([]);
  
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
      setArticles(data.articles);  // Set articles state with fetched data
    })
    .catch(error => {
      console.error('Error fetching news:', error);
    });
  };



  return (
    <div>
      <Header onSelectCategory={onSelectCategory} />
      <NewsList articles={articles} />
    </div>
  );
}

export default App;