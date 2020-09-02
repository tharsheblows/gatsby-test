module.exports = {
  siteMetadata: {
    title: `I don't think it works like that`,
    description: `Porchy Ltd theme.`,
    author: `@gatsbyjs,@alexadark,@tharsheblows`,
  },
  plugins: [
    {
      resolve: `@tharsheblows/porchy-ltd-theme`,
      options: {
        wordPressUrl: `https://idontthink.wpengine.com`,
        postsPrefix: `posts`,
        postsPath: ``,
        paginationPrefix: `blog`,
        postsPerPage: 8,
      },
    },
    `gatsby-plugin-netlify`,
    {
      resolve: `gatsby-plugin-canonical-urls`,
      options: {
        siteUrl: `https://porchy.co.uk`,
      },
    },
  ],
}
