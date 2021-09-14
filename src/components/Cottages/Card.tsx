import styled from "styled-components";
import theme from "../../styles/theme";

export const Card = styled.section<CardProps>`
  padding: 1.5rem;
  background-color: ${(props) =>
    props.theme === "light"
      ? theme.colors.gray6
      : props.theme === "dark"
      ? theme.colors.gray1
      : "inherit"};
  color: ${(props) =>
    props.theme === "light"
      ? theme.colors.gray1
      : props.theme === "dark"
      ? theme.colors.gray6
      : "inherit"};
  p,
  ul,
  li {
    line-height: 1.5rem;
  }
`;

interface CardProps {
  theme?: "light" | "dark";
}
