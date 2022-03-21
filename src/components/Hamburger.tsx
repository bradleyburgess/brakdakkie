import styled from "styled-components";
import theme from "../styles/theme";

const Hamburger = ({ active, transparent, handleClick }: HamburgerProps) => (
  <MobileMenu onClick={handleClick}>
    <Container>
      <Bar line="top" transparent={transparent} active={active} />
      <Bar line="middle" transparent={transparent} active={active} />
      <Bar line="bottom" transparent={transparent} active={active} />
    </Container>
  </MobileMenu>
);

const MobileMenu = styled.div`
  z-index: 1000;
  position: relative;
  @media screen and (min-width: ${theme.breakpoints.mobile}px) {
    display: none;
  }
`;

const Container = styled.div`
  box-sizing: content-box;
  width: 30px;
  margin: 0 3px;
  padding: 0 3px;
  z-index: 1000;
`;

const Bar = styled.div<BarProps>`
  height: 2px;
  margin: 8px 0;
  border-radius: 1px;
  background-color: ${(props) =>
    props.active || props.transparent
      ? theme.colors.gray6
      : theme.colors.gray1};
  transition-property: all;
  transition-duration: 0.15s;
  transition-timing-function: ease-in-out;
  ${(props) =>
    props.active
      ? props.line === "middle"
        ? "opacity: 0;"
        : props.line === "top"
        ? "transform: translateY(10px) rotate(-135deg);"
        : props.line === "bottom"
        ? "transform: translateY(-10px) rotate(135deg);"
        : null
      : null}
`;

interface BarProps {
  line: "top" | "middle" | "bottom";
  active?: boolean;
  transparent?: boolean;
}

interface HamburgerProps {
  active?: boolean;
  handleClick: () => void;
  transparent?: boolean;
}

export default Hamburger;
