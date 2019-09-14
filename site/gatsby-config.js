require("dotenv").config({
  path: "../.env",
})
module.exports = {
  siteMetadata: {
    title: `Gatsby and WordPress`,
    description: `Edited by @tharsheblows, any issues and lack of styling is all me.`,
    author: `@gatsbyjs,@alexadark`,
  },
  plugins: [
    {
      resolve: "gatsby-theme-tabor",
      options: {},
    },
  ],
}