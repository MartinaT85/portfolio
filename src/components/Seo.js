import * as React from "react";
import { Helmet } from "react-helmet";
import { useStaticQuery, graphql } from "gatsby";

const Seo = (props) => {
  const data = useStaticQuery(graphql`
    query GetSiteMetadata {
      site {
        siteMetadata {
          title
          description
          siteUrl
          image
        }
      }
    }
  `);

  const defaults = data.site.siteMetadata;

  const title = props.title || defaults.title;
  const desc = props.description || defaults.description;
  const img = new URL(props.image || defaults.image, defaults.siteUrl);
  const url = new URL(props.path || `/`, defaults.siteUrl);

  return (
    <Helmet>
      <title>{title}</title>
      <meta name="description" content={desc} />
      <link rel="canonical" href={url} />
      {img && <meta name="image" content={img} />}

      <meta property="og:url" content={url} />
      <meta property="og:type" content="website" />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={desc} />
      {img && <meta property="og:image" content={img} />}

      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={desc} />
      {img && <meta name="twitter:image" content={img} />}
    </Helmet>
  );
};

export default Seo;
