import styled from "styled-components";
import theme from "../styles/theme";

const Main = styled.main`
  width: 100%;
  max-width: ${theme.sizes.container};
  margin: 3.5rem 0 0 0;
  flex-grow: 1;
  display: flex;
  flex-direction: column;
  // padding: 0 2rem;
`;

export default Main;
