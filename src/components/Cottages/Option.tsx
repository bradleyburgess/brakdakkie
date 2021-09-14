import styled from "styled-components";
import theme from "../../styles/theme";

export const Option = styled.button<OptionProps>`
  padding: 1rem 1.25rem;
  // margin: 0 0.75rem;
  border-width: 0;
  border-top-left-radius: 1rem;
  border-top-right-radius: 1rem;
  background-color: ${(props) =>
    props.selected ? theme.colors.gray6 : "inherit"};
  color: ${theme.colors.gray1};
  font-family: ${theme.fonts.sans};
  text-transform: uppercase;
  transition: background-color 0.15s ease-out;
  ${(props) =>
    !props.selected
      ? `&:hover {
  background-color: ${theme.colors.gray4};
  cursor: pointer;
}`
      : null}
`;

interface OptionProps {
  selected?: boolean;
}
