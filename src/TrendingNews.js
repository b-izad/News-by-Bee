
import React from 'react';
import './TrendingNews.css'

const TrendingNews = ({ articles }) => {
    
    return (
        <div className="trending-news">
            <h1 >Trending</h1>
            {articles.map((article, index) => (
              
                <div key={index} className="trending-news-item">
                    
                    <a href={article.url} target="_blank" rel="noopener noreferrer">
                    <p className="news-source" style={{ color: 'blue' }}>{article.source.name}</p>
                        {article.title}
                    </a>
                   
                </div>
            ))}
        </div>
    );
};

export default TrendingNews;
