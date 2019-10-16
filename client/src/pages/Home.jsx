import React, { useState, useEffect } from 'react';
import ArticleCard from '../components/ArticleCard';
import Nav from '../components/NavBar';

function Home() {
  const [article, setArticle] = useState([]);

  useEffect(() => {
    var axios = require('axios');
    var cheerio = require('cheerio');
    var results = [];

    axios.get('https://www.cnn.com/articles').then(response => {
      let $ = cheerio.load(response.data);

      $('section').each((i, element) => {
        let title = $(element)
          .find('li')
          .find('span.cd__headline-text');
        let link = $(element)
          .find('li')
          .find('a')
          .attr('href');
        let image = $(element)
          .find('li')
          .find('img.media__image')
          .attr('data-src-small');
        title = title[0].children[0].data;
        results.push({
          Title: title,
          Link: link,
          Image: image,
          Notes: ''
        });
      });
      setArticle(results);
      for (let i = 0; i < results.length; i++) {
        postArticle(results[i]);
      }
    });

    const postArticle = async articleIndex => {
      const response = await fetch('/api/articles', {
        method: 'POST',
        headers: {
          'Content-type': 'application/json'
        },
        body: JSON.stringify(articleIndex)
      });
      return await response.json();
    };
  }, []);

  return (
    <div>
      <Nav />
      {article.map((item, key) => (
        <ArticleCard key={key} article={item} />
      ))}
    </div>
  );
}

export default Home;
