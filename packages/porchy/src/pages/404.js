/** @jsx jsx */
import { jsx } from 'theme-ui'
import React from "react"

import Layout from "../components/Layout"
import SEO from "../components/Seo"
import FourOhFour from "../components/404"

const NotFoundPage = ({ location }) => (
  <Layout location={{ location }}>
    <SEO title="404: Not found" />
	<FourOhFour />
  </Layout>
)

export default NotFoundPage
