import React from "react";
import { Link } from "@reach/router";
import styled from "styled-components";

const Wrapper = styled.div`
  font-family: "Open Sans", sans-serif;
  text-align: center;  
  padding: 120px 18px;
  color: #fff;

  p {
    max-width: 460px;
    margin: 0 auto;
    font-size: 20px;
  }

  a {
    text-decoration: none;
  }
`;

const Button = styled.button`
  border: none;
  outline: none;
  display: block;
  margin: 40px auto 0 auto;
  padding: 20px 18px;
  border-bottom: 3px solid #ddd;
  background: none;
  transition: all 0.3s;
  color: #eee;

  &:hover {
    background: #fff;
    color: #222;
    border: none;
    background: rgba(30,30,30, 0.7);
    box-shadow: 0 4px 18px rgba(0,0,0,0.3);
    border-radius: 8px;
    cursor: pointer;
  }
`;

export default function NotFound() {
  return (
    <Wrapper>
      <p>Hey there! Seems like you tried to access a page that does not exist.</p>

      <Link to="/">
        <Button>GO BACK HOME</Button>
      </Link>
    </Wrapper>
  );
}
