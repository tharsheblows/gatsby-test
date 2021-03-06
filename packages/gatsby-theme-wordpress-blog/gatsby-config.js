require('dotenv').config({
  path: '.env',
})

module.exports = options => {
  const { wordPressUrl = `https://idontthink.wpengine.com` } = options

  return {
    siteMetadata: {
      title: `Gatsby theme WordPress Source Demo`,
      author: `@alexadark`,
      description: `Demo of a WordPress source theme for GatsbyJS. Uses WPGraphQL (GraphQL for WordPress).`,
      social: [
        {
          name: `twitter`,
          url: `https://twitter.com/alexadark`,
        },
        {
          name: `github`,
          url: `https://github.com/alexadark`,
        },
      ],
    },
    plugins: [
      `gatsby-plugin-theme-ui`,
      {
        resolve: `gatsby-source-graphql`,
        options: {
          // This type will contain remote schema Query type
          typeName: `WPGraphQL`,
          // This is field under which it's accessible
          fieldName: `wpgraphql`,
          // Url to query from
          url: `${wordPressUrl}/graphql`,
          headers: {
            // Learn about environment variables: https://gatsby.dev/env-vars
            Authorization: `Bearer ${process.env.WP_GRAPHQL_TOKEN}`,
          },
        },
      },
      {
        resolve: `gatsby-plugin-google-fonts`,
        options: {
          fonts: [`Inconsolata\:400, 700`, `Oswald\:200,300,400,500,600,700`],
          display: 'swap',
        },
      },
      `gatsby-plugin-react-helmet`,
      `gatsby-transformer-sharp`,
      `gatsby-plugin-sharp`,
    ],
  }
}
