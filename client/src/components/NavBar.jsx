import React from "react";
import styled from "styled-components";

const Nav = () => {
  return (
    <>
      <NavBar>
        <List>
          <li>
            <a href="/">Home</a>
          </li>
          <li>
            <a href="/saved">Saved Articles</a>
          </li>
        </List>
      </NavBar>
    </>
  );
};

export default Nav;

const NavBar = styled.section`
  display: flex;
  position: relative;
  height: 50px;
  background-color: lightgray;
  margin-bottom: 10px;
`;

const List = styled.ul`
  display: inline-block;
  list-style-type: none;
`;
