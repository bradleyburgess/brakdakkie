import styled from "styled-components";
import theme from "../../styles/theme"

export const Card = styled.section`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  padding: calc(1rem + 1vmin);
  // ${(props) => (props.theme.index === 0 ? "margin-top: 1rem;" : null)};
  background-color: ${(props) =>
    props.theme.index % 2 === 0 ? theme.colors.gray1 : theme.colors.gray6};
  color: ${(props) =>
    props.theme.index % 2 === 0 ? theme.colors.gray6 : theme.colors.gray1};
`;


