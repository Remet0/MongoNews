import React from 'react';
import styled from 'styled-components';

const Nav = () => {
  return (
    <>
      <NavBar>
        <Header>Mango Scraper!!</Header>
        <List>
          <ListLink>
            <Link href="/">Home</Link>
          </ListLink>
          <ListLink>
            <Link href="/saved">Saved Articles</Link>
          </ListLink>
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
  list-style-type: none;
  position: absolute;
  right: 2em;
`;

const ListLink = styled.li`
  display: inline;
  margin-right: 2em;
`;

export const Link = styled.a`
  text-decoration: none;
  color: black;
`;

const Header = styled.h1`
  position: absolute;
  top: -10px;
  margin-left: 2em;
`;
