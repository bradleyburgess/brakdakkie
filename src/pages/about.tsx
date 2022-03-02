import loadable from "@loadable/component";
const Fade = loadable(() => import("react-awesome-reveal"), {
  resolveComponent: (components) => components.Fade,
});
import Layout from "../components/Layout";
// import { Fade } from "react-awesome-reveal";
import { graphql, useStaticQuery } from "gatsby";
import { GatsbyImage, IGatsbyImageData } from "gatsby-plugin-image";
import ReactMarkdown from "react-markdown";
import { NewsItem, GraphQlNewsItem } from "../components/About/NewsItems";
import {
  Accordion,
  Card,
  CardHeading,
  ImageContainer,
  LI,
  LogoContainer,
  NewsItems,
  P,
  TextContainer,
  UL,
} from "../components/About";
import Logo from "../assets/brakdakkie-logo1.svg";
import { Rotate } from "react-awesome-reveal";
import { sanitize } from "../util/functions";
import { SEO } from "../components/SEO";

export default function AboutPage() {
  const data = useStaticQuery(graphql`
    query AboutPage {
      allGraphCmsAboutSection {
        nodes {
          heading
          description {
            markdown
          }
          image {
            localFile {
              childImageSharp {
                gatsbyImageData(layout: FULL_WIDTH)
              }
            }
            description
          }
        }
      }
      allGraphCmsPolicy {
        nodes {
          heading
          content {
            markdown
          }
        }
      }
      allGraphCmsNewsItem {
        nodes {
          title
          source
          url
          file {
            url
          }
        }
      }
    }
  `);
  // About Sections destructure / data molding
  const aboutSections: AboutSection[] = data.allGraphCmsAboutSection.nodes.map(
    (e: GraphQlAboutSection) => ({
      heading: sanitize(e.heading, { trim: true, doubleSpaces: true }),
      description: e.description.markdown,
      image: e.image.localFile.childImageSharp.gatsbyImageData,
      imageAlt: sanitize(e.image.description, {
        trim: true,
        doubleSpaces: true,
      }),
    })
  );
  // Policies destructure / data molding
  const policies: Policy[] = data.allGraphCmsPolicy.nodes.map(
    (e: GraphQlPolicy) => ({
      heading: sanitize(e.heading, { doubleSpaces: true, trim: true }),
      content: e.content.markdown,
    })
  );
  // News Items destructure / data molding
  const newsItems: NewsItem[] = data.allGraphCmsNewsItem.nodes.map(
    (e: GraphQlNewsItem) => ({
      title: sanitize(e.title, { doubleSpaces: true, trim: true }),
      source: sanitize(e.source, { doubleSpaces: true, trim: true }),
      url: e.url ? e.url.trim() : e.file.url ? e.file.url.trim() : "#",
    })
  );

  return (
    <Layout footerElements={["address", "email", "phone", "copyright"]}>
      <SEO pageTitle="about" />
      <Rotate delay={200} triggerOnce>
        <LogoContainer>
          <Logo />
        </LogoContainer>
      </Rotate>
      {aboutSections.map((e, i) => (
        <Fade
          delay={i < 3 ? (i + 1) * 200 : 200}
          duration={500}
          direction={i % 2 === 0 ? "right" : "left"}
          triggerOnce
          key={`aboutsection-${i}`}
        >
          <Card key={e.heading} theme={{ index: i }}>
            <TextContainer>
              <CardHeading>{e.heading}</CardHeading>
              <ReactMarkdown
                children={e.description}
                components={{
                  p: ({ children }) => <P>{children}</P>,
                  ul: ({ children }) => <UL>{children}</UL>,
                  li: ({ children }) => <LI>{children}</LI>,
                }}
              />
            </TextContainer>
            <ImageContainer theme={{ index: i }}>
              <GatsbyImage
                image={e.image}
                alt={e.imageAlt}
                title={e.imageAlt}
              />
            </ImageContainer>
          </Card>
        </Fade>
      ))}
      <Card theme={{ index: 1 }}>
        <TextContainer>
          <CardHeading>Policies</CardHeading>
          <Accordion items={policies} />
        </TextContainer>
        <TextContainer>
          <CardHeading>Brakdakkie in the News</CardHeading>
          <NewsItems items={newsItems} />
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
