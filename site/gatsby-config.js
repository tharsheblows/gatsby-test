module.exports = {
  siteMetadata: {
    title: `I don't think it works like that`,
    description: `Edited by @tharsheblows, any issues and lack of styling is all me.`,
    author: `@gatsbyjs,@alexadark`,
  },
  plugins: [
    {
      resolve: `@alexadark/gatsby-theme-wordpress-blog`,
      options: {
        wordPressUrl: `https://idontthink.wpengine.com`,
        postsPrefix: `posts`,
        postsPath: ``,
        paginationPrefix: `blog`,
        postsPerPage: 8,
      },
    },
  ],
}
