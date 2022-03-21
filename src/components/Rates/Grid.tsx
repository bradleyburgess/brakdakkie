import styled from "styled-components";
import { useContext } from "react";

export const Grid = ({ children }: Props) => {
  return <Root>{children}</Root>;
};

const Root = styled.div`
  display: grid;
  flex: 1;
  width: 100%;
  grid-template-columns: 1fr;
  gap: 1rem;
  @media screen and (min-width: 515px) {
    grid-template-columns: 1fr 1fr;
    margin-bottom: 1rem;
  }
`;

interface Props {
  children: React.ReactElement | React.ReactElement[];
}
