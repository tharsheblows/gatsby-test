import React from 'react'

const FooterContent = () => {
  return (
    <>
      © {new Date().getFullYear()} | Built with{` `}
      <a href="https://www.wpgraphql.com">WPGraphQL</a> and{` `}
      <a href="https://www.gatsbyjs.org">Gatsby</a>
      <br />
      Theme shadowed:{' '}
      <a href="https://www.npmjs.com/package/@alexadark/gatsby-theme-wordpress-blog">
        Gatsby Theme WordPress Blog by Alexandra Spalato
      </a>
    </>
  )
}

export default FooterContent
