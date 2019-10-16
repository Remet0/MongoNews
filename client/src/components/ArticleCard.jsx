import React from 'react';
import { Btn } from './Button';
import { Wrapper } from './Wrapper';
import { Card, CardHeader } from './Card';
import { Link } from './NavBar';

const ArticleCard = ({ article }) => {
  const saveArticle = () => {
    let saveArticle = {
      Title: article.Title,
      Link: article.Link
    };

    const postArticle = async () => {
      const response = await fetch('/api/savedarticles', {
        method: 'POST',
        headers: {
          'Content-type': 'application/json'
        },
        body: JSON.stringify(saveArticle)
      });
      return await response.json();
    };
    postArticle();
  };

  return (
    <Wrapper>
      <Card>
        <Link href={`https://www.cnn.com${article.Link}`}>
          <CardHeader>{article.Title}</CardHeader>
        </Link>
        <img src={`${article.Image}`} alt="article"></img>
        <Btn onClick={() => saveArticle()}>Save Article</Btn>
      </Card>
    </Wrapper>
  );
};

export default ArticleCard;
