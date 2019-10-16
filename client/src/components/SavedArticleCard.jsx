import React, { useState, useEffect } from 'react';
import UseModal from '../hooks/useModal';
import styled from 'styled-components';
import { Btn } from './Button';
import { Wrapper } from './Wrapper';
import { Card, CardHeader } from './Card';
import { Link } from './NavBar';

const SavedArticleCard = () => {
  const [savedArticle, setSavedArticle] = useState([]);
  const [input, setInput] = useState('');
  const [formSubmit, setFormSubmit] = useState(false);
  useEffect(() => {
    const getArticle = async () => {
      const response = await fetch('/api/articles', {
        method: 'GET',
        headers: {
          'Content-type': 'application/json',
          Accept: 'application/json'
        }
      });
      const json = await response.json();
      setSavedArticle(json);
      console.log(json);
    };
    getArticle();
  }, [formSubmit]);

  const postNotes = async (article, input) => {
    article.Notes.push(input);
    let addedNotes = {
      Title: article.Title,
      Notes: article.Notes
    };
    const response = await fetch('/api/postnotes', {
      method: 'POST',
      headers: {
        'Content-type': 'application/json'
      },
      body: JSON.stringify(addedNotes)
    });
    return await response.json();
  };

  return (
    <Wrapper>
      {savedArticle.map((article, key) => (
        <Card key={key}>
          <>
            <UseModal>
              {({ isShowing, setIsShowing }) => (
                <>
                  <Link href={`https://www.cnn.com${article.Link}`}>
                    <CardHeader>{article.Title}</CardHeader>
                  </Link>
                  <img src={`${article.Image}`} alt="article"></img>
                  <Btn onClick={() => setIsShowing(!isShowing)}>Add Note</Btn>
                  {article.Notes.map((note, key) => (
                    <section key={key}>
                      <List>
                        <li>{note}</li>
                      </List>
                    </section>
                  ))}
                  {isShowing && (
                    <>
                      <Modal>
                        <ModalForm>
                          <h1>Notes:</h1>
                          <form
                            onSubmit={e => {
                              e.preventDefault();
                              postNotes(article, input);
                              setIsShowing(!isShowing);
                              setInput('');
                              setFormSubmit(!formSubmit);
                            }}
                          >
                            <TextInput
                              name="notes"
                              value={input}
                              onChange={e => setInput(e.target.value)}
                            ></TextInput>
                            <Btn type="submit">submit</Btn>
                            <Btn
                              onClick={e => {
                                e.preventDefault();
                                setIsShowing(!isShowing);
                              }}
                            >
                              close
                            </Btn>
                          </form>
                        </ModalForm>
                      </Modal>
                    </>
                  )}
                </>
              )}
            </UseModal>
          </>
        </Card>
      ))}
    </Wrapper>
  );
};

export default SavedArticleCard;

const Modal = styled.section`
  position: fixed; /* Stay in place */
  z-index: 1; /* Sit on top */
  left: 0;
  top: 0;
  width: 100%; /* Full width */
  height: 100%; /* Full height */
  overflow: auto; /* Enable scroll if needed */
  background-color: rgb(0, 0, 0); /* Fallback color */
  background-color: rgba(0, 0, 0, 0.6); /* Black w/ opacity */
`;

const ModalForm = styled.div`
  background-color: #fefefe;
  margin: 15% auto; /* 15% from the top and centered */
  padding: 20px;
  border: 1px solid #888;
  width: 80%; /* Could be more or less, depending on screen size */
`;

const TextInput = styled.textarea`
  height: 15em;
  width: 100%;
`;

const List = styled.ul`
  list-style-type: none;
`;
