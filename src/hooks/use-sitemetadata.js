import { graphql, useStaticQuery } from 'gatsby';

const useStaticMetadata = () => {
  // Does a GraphQL query for the site metadata
  const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          title
          description
        }
      }
    }
  `);

  return data.site.siteMetadata;
};

export default useStaticMetadata;
