import React from 'react'
import { Twitter, Linkedin, Wordpress } from '@icons-pack/react-simple-icons'

const FooterContent = () => {
  return (
    <div>
      <div
        style={{
          paddingBottom: '2em',
          textAlign: 'left',
          display: 'grid',
          alignItems: 'top',
          gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))',
        }}
      >
        <div style={{ paddingRight: '1em', marginBottom: '0.5em' }}>
          <p>
            <a href="https://profiles.wordpress.org/tharsheblows/">
              <Wordpress size={24} />
              <span style={{ margin: '1em 0 0 1em' }}>
                tharsheblows on WordPress
              </span>
            </a>
          </p>
          <p>
            <a href="https://www.linkedin.com/in/jjjay/">
              <Linkedin size={24} />
              <span style={{ margin: '1em 0 0 1em' }}>LinkedIn</span>
            </a>
          </p>
          <p>
            <a href="https://twitter.com/tharsheblows">
              <Twitter size={24} />
              <span style={{ margin: '1em 0 0 1em' }}>
                tharsheblows on Twitter
              </span>
            </a>
          </p>
        </div>
        <div style={{ paddingBottom: '2em', textAlign: 'right' }}>
          <p>Porchy Ltd is a company registered in England, no. 12035925</p>
          <p>VAT Registration no. 331196421</p>
          <p>
            Built with{` `}
            <a href="https://www.wpgraphql.com">WPGraphQL</a> and{` `}
            <a href="https://www.gatsbyjs.org">Gatsby</a>
          </p>
          <p>© 2019 - {new Date().getFullYear()}</p>
        </div>
      </div>
    </div>
  )
}

export default FooterContent
