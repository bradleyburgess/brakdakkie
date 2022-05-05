import Layout from "../components/Layout";
import { SEO } from "../components/SEO";
import { graphql, useStaticQuery, Link } from "gatsby";
import { GatsbyImage, IGatsbyImageData } from "gatsby-plugin-image";
import { Card, ImageContainer, P, TextContainer } from "../components/About";

export default function NotFoundPage() {
  const data = useStaticQuery(graphql`
    query NotFoundPage {
      graphCmsAsset(
        id: { eq: "Asset:ckt56nm4g5cb10c99jadkosfq:en:PUBLISHED" }
      ) {
        localFile {
          childImageSharp {
            gatsbyImageData(layout: FULL_WIDTH)
          }
        }
      }
    }
  `);

  const {
    graphCmsAsset: {
      localFile: {
        childImageSharp: { gatsbyImageData },
      },
    },
  } = data;

  return (
    <Layout footerElements={["email", "phone", "address", "copyright"]}>
      <SEO />
      <Card>
        <ImageContainer>
          <GatsbyImage alt="" image={gatsbyImageData} />
        </ImageContainer>
        <TextContainer>
          <h1>Oops!</h1>
          <P>
            You seem to have gone a little <em>too</em> far off the beaten
            track. Perhaps you should <Link to="/">go home</Link> and try again?
          </P>
        </TextContainer>
      </Card>
    </Layout>
  );
}

interface AboutSection {
  heading: string;
  description: string;
  image: IGatsbyImageData;
  imageAlt: string;
}

interface GraphQlAboutSection {
  heading: string;
  description: {
    markdown: string;
  };
  image: {
    localFile: {
      childImageSharp: {
        gatsbyImageData: IGatsbyImageData;
      };
    };
    description: string;
  };
}

interface Policy {
  heading: string;
  content: string;
}

interface GraphQlPolicy {
  heading: string;
  content: {
    markdown: string;
  };
}
