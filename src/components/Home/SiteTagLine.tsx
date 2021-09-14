import styled from "styled-components"
import theme from "../../styles/theme"

export const SiteTagLine = styled.p`
  margin: 0;
  max-width: 40rem;
  padding: 0 2rem;
  font-family: ${theme.fonts.serif};
  font-weight: 600;
  font-size: 2rem;
  line-height: 1.5em;
  text-align: center;
  em {
    margin: 0 0.5rem 0 0.2rem;
    position: relative;
    bottom: 1px;
    font-family: ${theme.fonts.script};
    font-size: 1.1em;
  }
`;

