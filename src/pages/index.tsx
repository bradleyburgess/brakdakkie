import loadable from "@loadable/component";
import Layout from "../components/Layout";
import { graphql } from "gatsby";
// import { Rotate } from "react-awesome-reveal";
const Rotate = loadable(() => import("react-awesome-reveal"), {
  resolveComponent: (components) => components.Rotate,
});
// import ReactMd from "react-markdown";
const ReactMd = loadable(() => import("react-markdown"));
import Button from "../components/Button";
import { Reviews, SiteTagLine, Container } from "../components/Home";
import Logo from "../assets/brakdakkie-logo1.svg";
import { Container as LogoContainer } from "../components/Logo";
import { sanitize } from "../util/functions";
import { SEO } from "../components/SEO";

export const query = graphql`
  query HomePage {
    homeSettings: graphCmsSiteSetting {
      siteTitle
      siteTagline {
        markdown
      }
    }
    homeImage: graphCmsPageSetting(pageTitle: { eq: home }) {
      featuredImage {
        localFile {
          childImageSharp {
            gatsbyImageData(layout: FULL_WIDTH, placeholder: TRACED_SVG)
          }
        }
      }
    }
  }
`;

const HomePage = ({ data }) => {
  const {
    homeSettings: {
      siteTagline: { markdown: siteTagline },
    },
    homeImage: {
      featuredImage: {
        localFile: {
          childImageSharp: { gatsbyImageData: image },
        },
      },
    },
  } = data;

  return (
    <Layout transparent footerElements={["copyright"]} backgroundImage={image}>
      <SEO />
      <Container>
        <Rotate delay={250} triggerOnce>
          <LogoContainer transparent>
            <Logo />
          </LogoContainer>
        </Rotate>
        <ReactMd
          children={sanitize(siteTagline, { doubleSpaces: true, trim: true })}
          components={{
            p: ({ children }) => <SiteTagLine>{children}</SiteTagLine>,
          }}
        />
        <Button href="https://book.nightsbridge.com/32234" target="_blank">
          Book Now
        </Button>
        <Reviews />
      </Container>
    </Layout>
  );
};

export default HomePage;
