import styled from "styled-components";
import { Link } from "gatsby";
import theme from "../styles/theme";
import { MenuItem } from "./Navigation";
import { useLocation } from "@reach/router";

const DesktopNav = ({ menuItems, transparent }: Props) => {
  const location = useLocation();
  return (
    <Nav>
      <DesktopNavList>
        {menuItems.map((item) => (
          <StyledLink to={`/${item}`} key={`menu-${item}`}>
            <DesktopNavListItem
              transparent={transparent}
              className={location.pathname.includes(item) ? "activeLink" : null}
            >
              {item}
            </DesktopNavListItem>
          </StyledLink>
        ))}
      </DesktopNavList>
    </Nav>
  );
};

const Nav = styled.nav`
  @media screen and (max-width: 514px) {
    display: none;
  }
`;

const StyledLink = styled((props) => <Link {...props} />)`
  text-decoration: none;
  color: inherit;
`;

const DesktopNavList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
`;

const DesktopNavListItem = styled.li<LIProps>`
  position: relative;
  display: inline-block;
  margin: 0.75rem;
  text-transform: uppercase;
  font-family: ${theme.fonts.sans};
  font-size: 1.25rem;
  color: ${(props) =>
    props.transparent ? theme.colors.gray6 : theme.colors.gray1};
  &::after {
    content: "";
    position: absolute;
    top: 115%;
    left: 50%;
    background-color: ${(props) =>
      props.transparent ? theme.colors.gray6 : theme.colors.gray1};
    border-radius: 2px;
    transition: width 0.15s ease-out, left 0.15s ease-out;
    width: 0px;
  }
  &.activeLink {
    color: ${(props) =>
      props.transparent ? theme.colors.gray6 : theme.colors.red};
  }
  &:hover,
  &.activeLink {
    &::after {
      height: 2px;
      left: 0;
      width: 100%;
    }
  }
  &.activeLink {
    &::after {
      background-color: ${(props) =>
        props.transparent ? theme.colors.gray6 : theme.colors.red};
    }
  }
`;

interface LIProps {
  transparent?: boolean;
}

interface Props {
  menuItems: MenuItem[];
  transparent?: boolean;
}

export default DesktopNav;
