import styled from "styled-components";
import theme from "../styles/theme";

const PageContainer = styled.div<Props>`
  overflow-x: hidden;
  min-height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  font-family: ${theme.fonts.serif};
  background-color: ${(props) =>
    props.transparent ? "transparent" : theme.colors.gray5};
  color: ${(props) =>
    props.transparent ? theme.colors.gray6 : theme.colors.gray1};
`;

interface Props {
  transparent?: boolean;
}

export default PageContainer;
