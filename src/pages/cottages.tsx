import Layout from "../components/Layout";
import { IGatsbyImageData } from "gatsby-plugin-image";
import { graphql, useStaticQuery } from "gatsby";
// import { Router } from "@reach/router";
import { useState } from "react";
import Button, { ButtonContainer } from "../components/Button";
import { GraphQlRate, Rate } from "./rates";
import {
  Card,
  Description,
  Gallery,
  Heading,
  Option,
  RatesCard,
  Select,
} from "../components/Cottages";
import { SEO } from "../components/SEO";

function CottagesPage({ cottages, featuredImage }: Props) {
  const [selectedCottage, setSelectedCottage] = useState(1);
  const cottage = cottages.find((e) => e.number === selectedCottage);
  const handleTabClick = (cottageNumber: number) =>
    setSelectedCottage((s) =>
      selectedCottage === cottageNumber ? s : cottageNumber
    );

  return (
    <Layout footerElements={["address", "email", "phone", "copyright"]}>
      <SEO pageTitle="cottages" />
      <Select>
        {cottages.map((e, i) => (
          <Option
            selected={selectedCottage === i + 1}
            key={`cottagebutton-${i}`}
            onClick={() => handleTabClick(i + 1)}
          >
            Cottage {e.number}
          </Option>
        ))}
      </Select>
      <Gallery gallery={cottage.gallery} />
      <Card theme="dark">
        <Heading>{cottage.heading}</Heading>
        <Description content={cottage.description} />
        <ButtonContainer>
          <Button
            href={cottage.bookingLink || "/contact"}
            target={cottage.bookingLink ? "_blank" : null}
          >
            {cottage.bookingLink ? "Book Now" : "Contact Us"}
          </Button>
        </ButtonContainer>
      </Card>
      <RatesCard
        number={cottage.number}
        featuredImage={featuredImage}
        rate={cottage.rate}
      />
    </Layout>
  );
}

export default function CottagesPageWithQuery() {
  const data = useStaticQuery(graphql`
    query Cottages {
      allGraphCmsCottage {
        nodes {
          number
          heading
          bookingLink
          description {
            markdown
          }
          gallery {
            description
            localFile {
              childImageSharp {
                thumb: gatsbyImageData(
                  layout: FIXED
                  width: 270
                  height: 270
                  placeholder: BLURRED
                  formats: [AUTO, WEBP, AVIF]
                )
                full: gatsbyImageData(layout: FULL_WIDTH)
              }
            }
          }
        }
      }
      graphCmsSocialLink(name: { eq: "TripAdvisor" }) {
        url
      }
      allGraphCmsRate {
        nodes {
          cottage
          rate {
            markdown
          }
        }
      }
      graphCmsPageSetting(pageTitle: { eq: cottages }) {
        featuredImage {
          localFile {
            childImageSharp {
              gatsbyImageData(
                layout: FULL_WIDTH
                formats: [AUTO, WEBP, AVIF]
                placeholder: TRACED_SVG
              )
              original {
                src
              }
            }
          }
          description
        }
      }
    }
  `);
  const rates: Rate[] = data.allGraphCmsRate.nodes.map((node: GraphQlRate) => ({
    cottage: node.cottage,
    rate: node.rate.markdown,
  }));
  const ratesMap = {
    1: rates.find((e) => e.cottage === "one_two_four"),
    2: rates.find((e) => e.cottage === "one_two_four"),
    3: rates.find((e) => e.cottage === "three"),
    4: rates.find((e) => e.cottage === "one_two_four"),
  };
  const cottages: Cottage[] = data.allGraphCmsCottage.nodes.map(
    (node: GraphQlCottage) => ({
      number: node.number,
      heading: node.heading,
      description: node.description.markdown,
      bookingLink: node.bookingLink,
      gallery: node.gallery.map((pic) => ({
        title: pic.description,
        thumbAlt: pic.description,
        thumb: pic.localFile.childImageSharp.thumb,
        full: pic.localFile.childImageSharp.full,
      })),
      rate: ratesMap[node.number].rate,
    })
  );
  const featuredImage = {
    description: data.graphCmsPageSetting.featuredImage.description,
    background:
      data.graphCmsPageSetting.featuredImage.localFile.childImageSharp.original
        .src,
    full: data.graphCmsPageSetting.featuredImage.localFile.childImageSharp
      .gatsbyImageData,
  };
  const taLink = data.graphCmsSocialLink.url;
  return CottagesPage({ cottages, taLink, featuredImage });
}

interface Cottage {
  number: number;
  heading: string;
  description: string;
  bookingLink: string;
  gallery: [
    {
      description: string;
      thumb: IGatsbyImageData;
      full: IGatsbyImageData;
    }
  ];
  rate: string;
}

interface GraphQlCottage {
  number: number;
  heading: string;
  bookingLink: string;
  description: {
    markdown: string;
  };
  gallery: [
    {
      description: string;
      localFile: {
        childImageSharp: {
          thumb: IGatsbyImageData;
          full: IGatsbyImageData;
        };
      };
    }
  ];
}

interface Props {
  cottages: Cottage[];
  taLink: string;
  featuredImage: {
    background: string;
    full: IGatsbyImageData;
    description: string;
  };
}
