import styled from "styled-components";
import theme from "../styles/theme";

export const Container = styled.div<ContainerProps>`
  width: 20rem;
  ${(props) =>
    props.transparent &&
    `svg * {
  fill: ${theme.colors.gray6};
}`}
`;

interface ContainerProps {
  transparent?: boolean;
}
