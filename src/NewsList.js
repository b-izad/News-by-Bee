import React from 'react';
const NewsList = ({ articles }) => {
    console.log(articles)
    return (

      <div>
        {articles.map(article => (
          <div key={article.url}>
            <h3>{article.title}</h3>
 {console.log(article)}
          </div>
        ))}
      </div>
    );
  };
  
  export default NewsList;