/** @jsx jsx */
import { jsx } from 'theme-ui'
import React from 'react'
import { Global } from '@emotion/core'
import { GlobalStyles } from '../styles/GlobalStyles'

import Header from './Header.js'
import Footer from './Footer.js'

import { Layout as StyledLayout, Container } from 'theme-ui'

const Layout = ({ children }) => (
  <>
    <Global styles={GlobalStyles} />

    <StyledLayout
      sx={{
        bg: `background`,
        display: `flex`,
        flexDirection: `columns`,
        minHeight: `100vh`,
        justifyContent: `space-between`,
      }}
    >
      <Header sx={{ width: `100%`, flex: `1 1 auto` }} />
      <Container sx={{ maxWidth: `l` }}>{children}</Container>
      <Footer sx={{ width: `100%` }} />
    </StyledLayout>
  </>
)

export default Layout
