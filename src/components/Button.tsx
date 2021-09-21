import styled from "styled-components";
import { Link } from "gatsby";
import theme from "../styles/theme";

export const Button = ({ href, children, target }: Props) => {
  return href.startsWith("/") ? (
    <StyledLink to={href}>{children}</StyledLink>
  ) : (
    <StyledA href={href} target={target ? target : null}>
      {children}
    </StyledA>
  );
};

const styles = {
  base: {
    display: "inline-block",
    "box-sizing": "border-box",
    padding: "1.5rem",
    "font-family": theme.fonts.sans,
    "font-size": "1.5rem",
    "text-decoration": "none",
    "text-transform": "uppercase",
    color: theme.colors.gray6,
    border: `2px solid ${theme.colors.gray6}`,
    transition: "all 0.15s ease-out",
    "white-space": "nowrap",
  },
  hover: {
    color: theme.colors.gray2,
    "background-color": theme.colors.gray6,
  },
};

const StyledA = styled.a`
  ${Object.keys(styles.base).map(
    (e) =>
      `${e}: ${styles.base[e]};
`
  )}
  &:hover {
    ${Object.keys(styles.hover).map(
      (e) =>
        `${e}: ${styles.hover[e]};
`
    )}
  }
`;

const StyledLink = styled((props) => <Link {...props} />)`
  ${Object.keys(styles.base).map(
    (e) =>
      `${e}: ${styles.base[e]};
`
  )}
  &:hover {
    ${Object.keys(styles.hover).map(
      (e) =>
        `${e}: ${styles.hover[e]};
`
    )}
  }
`;

export const ButtonContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-evenly;
  margin: 1rem 0;
`;

interface Props {
  href: string;
  children: React.ReactNode | React.ReactNode[];
  target?: "_blank" | undefined;
  // variant: ButtonVariant;
}

// interface ButtonProps {
//   variant: ButtonVariant;
// }

// type ButtonVariant = "light" | "dark";

export default Button;
