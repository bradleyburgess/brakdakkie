import {
  FaEnvelope as EmailIcon,
  FaFacebook as FacebookIcon,
  FaInstagram as InstagramIcon,
  FaMapMarkerAlt as MapIcon,
  FaPhone as PhoneIcon,
  FaTripadvisor as TripAdvisorIcon,
  FaWhatsapp as WhatsAppIcon,
} from "react-icons/fa";
import { Fade } from "react-awesome-reveal";
import styled from "styled-components";
import theme from "../styles/theme";
import ReactMd from "react-markdown";

const iconStyles = {
  // marginTop: "1px",
  fontSize: "2rem",
};

const socialIcons = {
  TripAdvisor: <TripAdvisorIcon style={iconStyles} title="Trip Advisor Link" />,
  Email: <EmailIcon style={iconStyles} title="Email Us" />,
  Facebook: (
    <FacebookIcon style={iconStyles} title="Connect with us on Facebook" />
  ),
  Instagram: (
    <InstagramIcon style={iconStyles} title="Follow us on Instagram" />
  ),
  "Google Maps": <MapIcon style={iconStyles} title="Find us on Google Maps" />,
  Phone: <PhoneIcon style={iconStyles} title="Call Us" />,
  WhatsApp: <WhatsAppIcon style={iconStyles} title="Chat to us on WhatsApp" />,
};

const SocialLinks = ({ links }: Props) => (
  <List>
    {links.map((e, i) => (
      <ListItem>
        <Fade direction="left" delay={100 * (i + 2)} duration={250}>
          <A href={e.url} key={"social-" + e.name}>
            <div>{socialIcons[e.name]}</div>
            <div>
              <ReactMd
                children={e.description}
                components={{ p: ({ children }) => <P>{children}</P> }}
              />
            </div>
          </A>
        </Fade>
      </ListItem>
    ))}
  </List>
);

export const CompactSocialLinks = ({ links }: Props) => (
  <CompactList>
    {links.map((e) => (
      <CompactListItem>
        <A href={e.url} key={"compactsocial-" + e.name}>
          {socialIcons[e.name]}
        </A>
      </CompactListItem>
    ))}
  </CompactList>
);

const List = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
`;

const CompactList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
  margin-top: 2rem;
`;

const ListItem = styled.li`
  // display: grid;
  // grid-template-columns: 3.5rem auto;
  position: relative;
  margin-bottom: 1.5rem;
  &::before {
    position: absolute;
    content: "";
    top: -0.2rem;
    left: -2.5rem;
    font-family: ${theme.fonts.script};
    font-size: 2rem;
    opacity: 0;
  }
  &:hover {
    &::before {
      content: ">";
      position: absolute;
      opacity: 1;
      transition: opacity 0.15s ease-out;
    }
  }
`;

const CompactListItem = styled.li`
  display: inline-block;
  margin: 0 1rem;
`;

const P = styled.p`
  margin: 0;
  padding: 0;
  font-family: ${theme.fonts.serif};
  // text-transform: uppercase;
  font-size: 1.25rem;
`;

const A = styled.a`
  text-decoration: none;
  color: inherit;
  display: grid;
  grid-template-columns: auto 1fr;
  gap: 1rem;
  div:first-of-type {
    position: relative;
    bottom: 0.25rem;
  }
`;

interface Props {
  links: SocialLink[];
}

export interface SocialLink {
  name: string;
  url: string;
  description: string;
}

export default SocialLinks;
