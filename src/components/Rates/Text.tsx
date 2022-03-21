import styled from "styled-components";
import theme from "../../styles/theme";

export const Text = ({ children }: TextProps) => {
  return <Container>{children}</Container>;
};

const Container = styled.div`
  grid-area: 1/1;
  display: grid;
  grid-template-columns: 1fr;
  gap: 1rem;
  text-align: center;
  color: ${theme.colors.gray6};
  z-index: 1;
  @media screen and (min-width: 515px) {
    grid-area: 1/2;
    color: ${theme.colors.gray1};
  }

  & > * {
    margin: 0;
    padding: 2rem;
    background-color: inherit;
    @media screen and (min-width: 515px) {
      background-color: ${theme.colors.gray6};
    }
  }

  & > h1 {
    font-family: ${theme.fonts.script};
    font-size: 2.75rem;
    text-align: center;
    @media screen and (min-width: 515px) {
      background-color: ${theme.colors.gray1};
      color: ${theme.colors.gray6};
    }
  }

  div > h1 {
    font-family: ${theme.fonts.sans};
    font-size: 1.75rem;
    text-transform: uppercase;
    margin-top: 0;
  }

  div > h2 {
    padding: 0;
    margin: 0;
    font-size: 1.25rem;
    font-family: ${theme.fonts.sans};
    text-transform: uppercase;
    &:nth-of-type(2) {
      margin-top: 2rem;
    }
  }
`;

export const Heading = styled.h1`
  font-family: ${theme.fonts.script};
`;

export const Detail = styled.div`
  text-align: center;
`;

interface TextProps {
  children: React.ReactElement | React.ReactElement[];
}
