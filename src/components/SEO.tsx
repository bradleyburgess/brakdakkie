import { Helmet } from "react-helmet";
import { useStaticQuery, graphql } from "gatsby";

export const SEO = ({ pageTitle, description }: Props) => {
  const data = useStaticQuery(graphql`
    query SiteSettings {
      graphCmsSiteSetting {
        seoDescription
        siteTitle
        seoImage {
          url
        }
      }
    }
  `);
  const {
    graphCmsSiteSetting: {
      seoDescription,
      siteTitle,
      seoImage: { url: seoImage },
    },
  } = data;
  let formattedPageTitle: string;
  if (pageTitle)
    formattedPageTitle = pageTitle
      .split(" ")
      .map((word) =>
        word
          .toLowerCase()
          .split("")
          .map((letter, i) => (i === 0 ? letter.toUpperCase() : letter))
          .join("")
      )
      .join(" ");
  const title = pageTitle ? `${formattedPageTitle} | ${siteTitle}` : siteTitle;

  return (
    <Helmet defer={false} htmlAttributes={{ lang: "en" }}>
      <title>{title}</title>
      <link rel="icon" href="/favicon.ico" />
      <meta charSet="utf-8" />
      <meta name="description" content={seoDescription} />
      <meta name="image" content={seoImage} />

      <meta property="og:title" content={title} />
      <meta property="og:description" content={seoDescription} />
      <meta property="og:image" content={seoImage} />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta
        name="twitter:description"
        content={seoDescription}
      />
      <meta name="twitter:image" content={seoImage} />
    </Helmet>
  );
};

export type PageTitle = "home" | "about" | "cottages" | "rates" | "contact";

interface Props {
  pageTitle?: PageTitle;
  description?: string;
}
