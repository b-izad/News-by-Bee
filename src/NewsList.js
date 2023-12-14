import React, { useState } from 'react';
import './NewsList.css';

const NewsList = ({ articles }) => {
    const [visibleCount, setVisibleCount] = useState(3);

    const showMoreArticles = () => {
        setVisibleCount(prevCount => prevCount + 3);
    };

    const getTimeAgo = (publishedAt) => {
        const publishedDate = new Date(publishedAt);
        const currentDate = new Date();
        const timeDifference = currentDate - publishedDate;

        const minutes = Math.floor(timeDifference / 60000);
        const hours = Math.floor(timeDifference / 3600000);
        const days = Math.floor(timeDifference / 86400000);

        if (days > 0) return `${days} day${days > 1 ? 's' : ''} ago`;
        if (hours > 0) return `${hours} hour${hours > 1 ? 's' : ''} ago`;
        return `${minutes} minute${minutes > 1 ? 's' : ''} ago`;
    };

    return (
        <div>
            {articles.slice(0, visibleCount).map(article => (
                <div key={article.url} className="news-item">
                    <div className="news-content">
                        <p className="news-source" style={{ color: 'blue' }}>{article.source.name}</p>
                        <h3 className="news-title">
                            <a href={article.url} target="_blank" rel="noopener noreferrer">{article.title}</a>
                        </h3>
                        <p className="news-description">{article.description}</p>
                        <p className="news-time">{getTimeAgo(article.publishedAt)}</p>
                    </div>
                    <img src={article.urlToImage} alt={article.title} className="news-image" />
                </div>
            ))}
            {visibleCount < articles.length && (
                <button onClick={showMoreArticles} className="show-more-button">Show More</button>
            )}
        </div>
    );
};

export default NewsList;
