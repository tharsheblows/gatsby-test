/** @jsx jsx */
import { jsx } from 'theme-ui'
import { graphql } from 'gatsby'
import Layout from '../../components/Layout'
import SEO from '../../components/Seo'
import PageEntry from '../../components/PageEntry'

const Page = ({ data, pageContext }) => {
  const { title, content, excerpt } = data.wpgraphql.page
  const { wordPressUrl } = pageContext.options

  return (
    <Layout>
      <SEO title={title} description={excerpt} />
      <PageEntry title={title} content={content} wordPressUrl={wordPressUrl} />
    </Layout>
  )
}

export default Page

export const pageQuery = graphql`
  query GET_PAGE($id: ID!) {
    wpgraphql {
      page(id: $id) {
        title
        content(format: RAW)
        excerpt
        uri
      }
    }
  }
`
