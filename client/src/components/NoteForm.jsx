import React, { useState } from 'react';
import styled from 'styled-components';

const NoteForm = ({ article }) => {
  const [input, setInput] = useState('');
  console.log(article);
  const postNotes = () => {
    console.log(article);
  };
  return (
    <>
      <Card>
        <Card_Form>
          <form
            onSubmit={e => {
              e.preventDefault();
              postNotes();
            }}
          >
            <textarea name="notes" value={input} onChange={setInput}></textarea>
            <button type="submit">submit</button>
          </form>
        </Card_Form>
      </Card>
    </>
  );
};

export default NoteForm;

const Card = styled.section`
  position: fixed; /* Stay in place */
  z-index: 1; /* Sit on top */
  left: 0;
  top: 0;
  width: 80%; /* Full width */
  height: 80%; /* Full height */
  overflow: auto; /* Enable scroll if needed */
  background-color: rgb(0, 0, 0); /* Fallback color */
  background-color: rgba(0, 0, 0, 0.4); /* Black w/ opacity */
`;

const Card_Form = styled.div`
  background-color: #fefefe;
  margin: 15% auto; /* 15% from the top and centered */
  padding: 20px;
  border: 1px solid #888;
  width: 80%; /* Could be more or less, depending on screen size */
`;
