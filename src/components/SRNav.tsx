import { Link } from "gatsby";
import styled from "styled-components";
import { MenuItem } from "./Navigation";

const SRNav = ({ menuItems }) => (
  <Nav>
    <UL>
      {menuItems.map((e: MenuItem) => (
        <LI key={"srnav-" + e}>
          <Link to={`/${e}`}>{e}</Link>
        </LI>
      ))}
    </UL>
  </Nav>
);

const Nav = styled.nav`
  opacity: 0.01;
  position: absolute;
  left: 1000%;
`;

const UL = styled.ul`
  list-style: none;
`;

const LI = styled.li`
  display: inline;
`;

export default SRNav;
