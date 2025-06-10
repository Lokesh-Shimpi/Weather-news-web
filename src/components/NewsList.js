import React, { useEffect, useState } from 'react';
import axios from 'axios';

const NewsList = ({ query }) => {
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const apiKey = '2df437f0fef949ebb7d9ddd1b520fa5f'; 

  useEffect(() => {
    setLoading(true);
    axios.get(`https://newsapi.org/v2/everything?q=${query || 'weather'}&apiKey=${apiKey}`)
      .then((response) => {
        setArticles(response.data.articles);
        setLoading(false);
      })
      .catch(() => {
        setError('Failed to fetch news. Please try again later.');
        setLoading(false);
      });
  }, [query]);

  if (loading) return <p className="loading">Loading news...</p>;
  if (error) return <p className="error">{error}</p>;

  return (
    <div className="news-container">
      {articles.length === 0 ? (
        <p>No articles found.</p>
      ) : (
        articles.map((article, index) => (
          <div key={index} className="news-card">
            {article.urlToImage && (
              <img src={article.urlToImage} alt={article.title} className="news-image" />
            )}
            <h2>{article.title}</h2>
            <p>{article.description}</p>
            <a href={article.url} target="_blank" rel="noopener noreferrer">Read more</a>
          </div>
        ))
      )}
    </div>
  );
};

export default NewsList;
