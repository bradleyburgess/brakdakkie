export const HomePageQuery = `
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
            fluid {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    }
  }
`;
