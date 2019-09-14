/** @jsx jsx */
import { jsx, Styled } from 'theme-ui'
import { graphql } from 'gatsby'
import Layout from '../../components/Layout'
import SEO from '../../components/Seo'

const Page = ({ data }) => {
  const { title, content, excerpt } = data.wpgraphql.page
  return (
    <Layout>
      <SEO title={title} description={excerpt} />
      <div sx={{ variant: `cards.white` }}>
        <div className="content">
          <Styled.h1
            sx={{ textAlign: 'center', textTransform: 'uppercase' }}
            className="page-title"
            dangerouslySetInnerHTML={{ __html: title }}
          />
          <Styled.root dangerouslySetInnerHTML={{ __html: content }} />
        </div>
      </div>
    </Layout>
  )
}

export default Page

export const pageQuery = graphql`
  query GET_PAGE($id: ID!) {
    wpgraphql {
      page(id: $id) {
        title
        content
        excerpt
        uri
      }
    }
  }
`
