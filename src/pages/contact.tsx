import Layout from "../components/Layout";
import { useStaticQuery, graphql } from "gatsby";
import SocialLinks, { SocialLink } from "../components/SocialLinks";
import { Container } from "../components/Contact";
import { SEO } from "../components/SEO";

export default function ContactPage() {
  const data = useStaticQuery(graphql`
    query ContactPage {
      contactImage: graphCmsPageSetting(pageTitle: { eq: contact }) {
        featuredImage {
          localFile {
            childImageSharp {
              gatsbyImageData(layout: FULL_WIDTH)
            }
          }
        }
      }
      graphCmsSiteSetting {
        socialLinks {
          name
          url
          description
        }
      }
    }
  `);
  const {
    contactImage: {
      featuredImage: {
        localFile: {
          childImageSharp: { gatsbyImageData: image },
        },
      },
    },
  } = data;
  const _socialLinks: SocialLink[] = data.graphCmsSiteSetting.socialLinks;

  const socialLinks = _socialLinks.map((e) => {
    if (e.name === "Google Maps")
      e.description = e.description.replace(/\, /g, `,  \n`);
    return e;
  });

  return (
    <Layout backgroundImage={image} transparent footerElements={["copyright"]}>
      <SEO pageTitle="contact" />
      <Container>
        <h1>Contact Us</h1>
        <SocialLinks links={socialLinks} />
      </Container>
    </Layout>
  );
}
