import styled from "styled-components";
import theme from "../styles/theme";

const Header = ({ children, transparent }: Props) => (
  <Container>
    <StyledHeader transparent={transparent}>{children}</StyledHeader>
  </Container>
);

const Container = styled.div`
  position: fixed;
  height: 2.5rem;
  width: 100%;
  max-width: ${parseInt(theme.sizes.container) * 1.25 + "rem"};
  z-index: 100;
  // margin: 0 auto;
`;

const StyledHeader = styled.header<StyledHeaderProps>`
  display: flex;
  justify-content: space-between;
  color: ${(props) => (props.transparent ? theme.colors.gray6 : "inherit")};
  background-color: ${(props) =>
    props.transparent ? "inherit" : theme.colors.gray6};
  box-shadow: ${(props) =>
    props.transparent ? "inherit;" : `0 4px 4px -4px ${theme.colors.gray1};`};
`;

interface StyledHeaderProps {
  transparent?: boolean;
}

interface Props {
  children: React.ReactNode | React.ReactNode[];
  transparent?: boolean;
}

export default Header;
