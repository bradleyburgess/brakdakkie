import styled from "styled-components";
import { MenuItem } from "./Navigation";
import theme from "../styles/theme";
import { Link } from "gatsby";
import { useLocation } from "@reach/router";
import { CompactSocialLinks, SocialLink } from "./SocialLinks";
import { graphql, useStaticQuery } from "gatsby";

const mobileSocialLinks = ["WhatsApp", "Email", "Phone", "Google Maps"];

const MobileNav = ({ menuItems, active }: Props) => {
  const data = useStaticQuery(graphql`
    query MobileMenu {
      allGraphCmsSocialLink {
        nodes {
          name
          url
          description
        }
      }
    }
  `);
  const socialLinks: SocialLink[] = data.allGraphCmsSocialLink.nodes.filter(
    (e: SocialLink) => mobileSocialLinks.includes(e.name)
  );
  const location = useLocation();
  return (
    <Nav active={active} className={active ? "mobileMenuActive" : null}>
      <StyledLink to="/">
        <h1>
          Brakdakkie <br />
          Guest Cottages
        </h1>
      </StyledLink>
      <List>
        {menuItems.map((item) => (
          <ListItem key={"menu-" + item}>
            <StyledLink
              to={`/${item}`}
              activeClassName="activeLink"
              className={location.pathname.includes(item) ? "activeLink" : null}
            >
              <ListItemText>{item}</ListItemText>
            </StyledLink>
          </ListItem>
        ))}
      </List>
      <CompactSocialLinks links={socialLinks} />
    </Nav>
  );
};

const Nav = styled.nav<NavProps>`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: fixed;
  height: 100vh;
  width: 100vw;
  overflow: hidden;
  padding: 0 2rem;
  background-color: ${theme.colors.gray1};
  color: ${theme.colors.gray6};
  // Hidden:
  left: 100%;
  opacity: 0;
  z-index: -1000;
  transition: opacity 0.2s ease-in-out 0s, z-index 0s ease-in-out 0.2s,
    left 0s ease-in-out 0.2s;
  // Active:
  &.mobileMenuActive {
    left: 0;
    opacity: 1;
    z-index: 100;
    transition: opacity 0.2s ease-in-out 0s;
  }
`;

const StyledLink = styled((props) => <Link {...props} />)`
  text-decoration: none;
  &.activeLink::before {
    content: ">";
    font-family: ${theme.fonts.script};
    color: ${theme.colors.gray6};
    position: absolute;
    top: 35%;
    right: 100%;
  }
  &.activeLink::after {
    content: ">";
    font-family: ${theme.fonts.script};
    color: ${theme.colors.gray6};
    position: absolute;
    top: 35%;
    left: 100%;
    transform: scale(-1, 1);
  }
  h1 {
    font-family: ${theme.fonts.script};
    color: ${theme.colors.gray6};
    font-family: ${theme.fonts.script};
    font-weight: normal;
    text-align: center;
  }
`;

const List = styled.ul`
  list-style: none;
  padding: 0;
  margin: 1rem 0;
`;

const ListItem = styled.li`
  position: relative;
  margin-bottom: 1rem;
`;

const ListItemText = styled.span`
  display: block;
  padding: 0.5rem 1rem;
  color: ${theme.colors.gray6};
  font-family: ${theme.fonts.sans};
  font-size: 2rem;
  text-transform: uppercase;
  text-align: center;
`;

interface Props {
  menuItems: MenuItem[];
  active?: boolean;
}

interface NavProps {
  active: boolean;
}

export default MobileNav;
