import { graphql, useStaticQuery } from "gatsby";
import { IGatsbyImageData } from "gatsby-plugin-image";
import Layout from "../components/Layout";
import { Grid, Image, Text } from "../components/Rates";
import ReactMd from "react-markdown";
import { SEO } from "../components/SEO";
import { ButtonContainer, Button } from "../components/Button";
import theme from "../styles/theme";

const RatesPage = ({ rates, image }: Props) => {
  return (
    <Layout footerElements={["email", "phone", "address", "copyright"]}>
      <SEO pageTitle="rates" />
      <Grid>
        <Image image={image} />
        <Text>
          <h1>Rates</h1>
          <div>
            <h1>Cottage 1, 2 & 4</h1>
            <ReactMd
              children={rates.find((e) => e.cottage === "one_two_four").rate}
              components={{ h2: "h2", h3: "h2", h4: "h2", h5: "h2", h6: "h2" }}
            />
          </div>
          <div>
            <h1>Cottage 3</h1>
            <ReactMd
              children={rates.find((e) => e.cottage === "three").rate}
              components={{ h2: "h2", h3: "h2", h4: "h2", h5: "h2", h6: "h2" }}
            />
          </div>
          <div style={{ backgroundColor: theme.colors.gray1 }}>
            <ButtonContainer>
              <Button
                href="https://book.nightsbridge.com/32234"
                target="_blank"
              >
                Book Now
              </Button>
            </ButtonContainer>
          </div>
        </Text>
      </Grid>
    </Layout>
  );
};

export default function RatesPageWithQuery() {
  const data = useStaticQuery(graphql`
    query {
      allGraphCmsRate {
        nodes {
          cottage
          rate {
            markdown
          }
        }
      }
      graphCmsPageSetting(pageTitle: { eq: rates }) {
        featuredImage {
          localFile {
            childImageSharp {
              gatsbyImageData(layout: FULL_WIDTH, placeholder: TRACED_SVG)
            }
          }
        }
      }
    }
  `);
  const rates: Rate[] = data.allGraphCmsRate.nodes.map((node: GraphQlRate) => ({
    cottage: node.cottage,
    rate: node.rate.markdown,
  }));
  const image: IGatsbyImageData =
    data.graphCmsPageSetting.featuredImage.localFile.childImageSharp
      .gatsbyImageData;
  return RatesPage({ rates, image });
}

export interface GraphQlRate {
  cottage: "one_two_four" | "three";
  rate: {
    markdown: string;
  };
}

export interface Rate {
  cottage: "one_two_four" | "three";
  rate: string;
}

interface Props {
  rates: Rate[];
  image: IGatsbyImageData;
}
