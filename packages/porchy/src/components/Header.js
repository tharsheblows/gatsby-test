/** @jsx jsx */
import { jsx, Container, Flex, Header as StyledHeader } from 'theme-ui'

import { useStaticQuery, graphql } from 'gatsby'

import Menu from './Menu'
import SiteBranding from './SiteBranding'

import { slide as SlideMenu } from 'react-burger-menu'
import Headroom from 'react-headroom'
import { relative } from 'upath'

const Header = () => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      wpgraphql {
        generalSettings {
          title
          url
        }
      }
    }
  `)

  const { title, url } = data.wpgraphql.generalSettings
  return (
    <Headroom sx={{ zIndex: '100' }}>
      <StyledHeader
        sx={{
          bg: `white`,
          // boxShadow: t => `0 0 5px 1px ${t.colors.shadeBlue}`,
          '.bm-burger-button': {
            position: 'relative',
            width: '20px',
            height: '20px',
            right: '36px',
            display: ['block', 'block', 'none'],

            ':hover': {
              cursor: `pointer`,
              '.bm-burger-bars': {
                background: t => t.colors.secondary,
                opacity: 1,
              },
            },
          },
          '.bm-menu-wrap': {
            variant: `gradients.primary`,
          },
          '.bm-burger-bars': {
            background: t => `${t.colors.primary}`,
            transition: `all .4s ease-in-out`,
          },
          'div:nth-child(3)': {
            display: [`block`, `block`, `none`],
          },
        }}
      >
        <Container sx={{ p: [1] }}>
          <Flex sx={{ justifyContent: 'space-between', alignItems: 'center' }}>
            <SiteBranding title={title} />
            <div
              sx={{ display: ['none', 'none', 'block'], variant: `menus.main` }}
            >
              <Menu wordPressUrl={url} />
            </div>
            <SlideMenu
              right
              width={'100%'}
              sx={{
                bg: `secondary`,
                color: `primary`,
                top: 0,
                height: `100vh !important`,
                ul: {
                  marginRight: `40px`,
                },
                a: {
                  color: `white`,
                  ':active': {
                    color: `primaryLight`,
                  },
                  ':focus': {
                    color: t => t.colors.shadeBlue,
                  },
                },
                fontSize: 4,
                fontFamily: `heading`,
                '.sub-menu': {
                  pl: 1,
                  '.menu-item': {
                    fontSize: 2,
                  },
                },
                '.bm-cross-button': {
                  cursor: `pointer`,
                  fontSize: 3,
                },
                '.bm-cross': {
                  bg: `white`,
                },
              }}
            >
              <Menu wordPressUrl={url} />
            </SlideMenu>
          </Flex>
        </Container>
      </StyledHeader>
    </Headroom>
  )
}

export default Header
