import styled from "styled-components"
import { Container } from "./Container"

export const ImageContainer = styled(Container)`
  order: ${(props) => (props.theme.index % 2 === 0 ? 1 : -1)};
  flex-grow: 1;
`;

