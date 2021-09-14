import { graphql } from "gatsby";
import { FaWhatsapp as WhatsAppIcon } from "react-icons/fa";
import styled from "styled-components";
import theme from "../styles/theme";
import { stripPhoneNumber } from "../util/functions";
import { useStaticQuery } from "gatsby";

const WhatsApp = () => {
  const data = useStaticQuery(graphql`
    query SiteData {
      settings: graphCmsSiteSetting {
        phone
      }
    }
  `);
  const {
    settings: { phone },
  } = data;
  return (
    <Container>
      <StyledLink href={`https://wa.me/${stripPhoneNumber(phone)}`}>
        <Background>
          <WhatsAppIcon size={25} color={theme.colors.gray3} title="Chat to us on WhatsApp"/>
        </Background>
      </StyledLink>
    </Container>
  );
};

const StyledLink = styled.a`
  text-decoration: none;
  color: inherit;
`;

const Container = styled.div`
  position: fixed;
  bottom: 1.75rem;
  right: 1.75rem;
`;

const Background = styled.div`
  border-radius: 50%;
  padding: 0.5rem 0.5rem 0.65rem 0.65rem;
  background-color: ${theme.colors.gray6};
  // -webkit-box-shadow: 2px 5px 16px 0px ${theme.colors.gray2},
  //   5px 5px 15px 5px rgba(0, 0, 0, 0);
  // box-shadow: 2px 5px 16px 0px ${theme.colors.gray2},
  //   5px 5px 15px 5px rgba(0, 0, 0, 0);
  transition: transform 0.15s ease-out;
  &:hover {
    transform: scale(1.1);
  }
`;

export default WhatsApp;
