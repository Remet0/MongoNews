import React from "react";

const ArticleCard = ({ article }) => {
  const saveArticle = () => {
    let saveArticle = {
      title: article.Title,
      link: article.Link
    };

    const postArticle = async () => {
      const response = await fetch("/api/articles", {
        method: "POST",
        headers: {
          "Content-type": "application/json"
        },
        body: JSON.stringify(saveArticle)
      });
      return await response.json();
    };
    postArticle();
  };
  return (
    <div>
      <button onClick={() => saveArticle()}>Save Article</button>
      <img src={`${article.Image}`}></img>
      <a href={`https://www.cnn.com${article.Link}`}>
        <p>{article.Title}</p>
      </a>
    </div>
  );
};

export default ArticleCard;
