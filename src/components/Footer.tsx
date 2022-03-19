import styled from "styled-components";
import theme from "../styles/theme";
import ReactMD from "react-markdown";
import {
  parseAddress,
  parseCopyright,
  stripPhoneNumber,
} from "../util/functions";
import { graphql } from "gatsby";
import { useStaticQuery } from "gatsby";

const Footer = ({ elements, transparent }: Props) => {
  const data = useStaticQuery(graphql`
    query {
      settings: graphCmsSiteSetting {
        address
        copyright
        email
        phone
      }
    }
  `);
  const {
    settings: { address, copyright, email, phone: phoneString },
  } = data;
  const phone = stripPhoneNumber(phoneString);
  const renderElements = {
    address: (
      <ReactMD
        children={parseAddress(address)}
        components={{
          p: ({ children }) => (
            <StyledLink
              href="https://goo.gl/maps/jtMEsqZ8ez57tLtn7"
              key="footer-address"
            >
              <P>{children}</P>
            </StyledLink>
          ),
        }}
        key="footer-address"
      />
    ),
    copyright: <P key="footer-copyright">{parseCopyright(copyright)}</P>,
    email: (
      <StyledLink key="footer-email" href={`mailto:${email}`}>
        <P>{email}</P>
      </StyledLink>
    ),
    phone: (
      <StyledLink key="footer-phone" href={`tel:${stripPhoneNumber(phone)}`}>
        <P>{phoneString}</P>
      </StyledLink>
    ),
  };

  return (
    <StyledFooter theme={{ transparent }}>
      {elements.map((e) => renderElements[e])}
    </StyledFooter>
  );
};

const StyledFooter = styled.footer`
  display: flex;
  flex-direction: column;
  justify-content: center;
  max-width: ${theme.sizes.container};
  flex-grow: 1;
  padding: ${(props) => (props.theme.transparent ? "0 0 1rem 0" : "1rem 0")};
  text-align: center;
  font-family: ${theme.fonts.sans};
  text-transform: uppercase;
  color: ${theme.colors.gray6};
  background-color: ${(props) =>
    props.theme.transparent ? "inherit" : theme.colors.gray1};
`;

const Container = styled.div`
  display: flex;
  justify-content: center;
`;

const P = styled.p`
  margin: 0.5rem;
  font-size: 0.8rem;
`;

const StyledLink = styled.a`
  color: inherit;
  text-decoration: none;
  font-size: inherit;
`;

export type FooterElement = "copyright" | "address" | "phone" | "email";

interface Props {
  elements: FooterElement[];
  transparent?: boolean;
}

export default Footer;
