import { Link } from "gatsby";
import styled from "styled-components";
import theme from "../styles/theme";
import Logo from "../assets/brakdakkie-logo1.svg";

const Branding = ({ transparent }: Props) => (
  <StyledLink to="/">
    <span>Brakdakkie Guest Cottages</span>
    <Container transparent={transparent}>
      <Logo alt="Brakdakkie Logo" />
    </Container>
  </StyledLink>
);

const Container = styled.div<Props>`
  width: 10rem;
  height: 100%;
  display: flex;
  align-items: center;
  ${(props) =>
    props.transparent &&
    `svg * {
    fill: ${theme.colors.gray6};
  }`}
`;

const StyledLink = styled((props) => <Link {...props} />)`
  position: relative;
  color: inherit;
  text-decoration: none;
  font-family: ${theme.fonts.script};
  span {
    display: block;
    position: absolute;
    left: -1000px;
  }
`;

interface Props {
  transparent?: boolean;
}

export default Branding;
