import styled from "styled-components";
import React, { useContext } from "react";
import theme from "../../styles/theme";
import ReactMarkdown from "react-markdown";

export const Description = ({ content }: Props) => {
  return (
    <Container>
      <ReactMarkdown children={content} />
    </Container>
  );
};

const Container = styled.div`
  font-family: ${theme.fonts.serif};
  h1,
  h2,
  h3,
  h4,
  h5,
  h6,
  h6 {
    font-family: ${theme.fonts.sans};
    text-transform: uppercase;
    font-size: 1.2rem;
    text-align: center;
    margin: 0;
  }
  p {
    max-width: 40rem;
    margin: 1rem auto;
    text-align: left;
  }
  ul {
    margin: 0;
    padding: 1rem;
  }
  li {
    margin-bottom: 0.5rem;
  }
  @media screen and (min-width: 515px) {
    p {
      text-align: center;
    }
    ul {
      columns: 2;
    }
    li {
      max-width: 90%;
      margin: 0 auto 0.5rem auto;
    }
  }
`;

interface Props {
  content: string;
}
