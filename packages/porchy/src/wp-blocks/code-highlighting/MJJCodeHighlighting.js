/** @jsx jsx */
import { jsx } from 'theme-ui'
import React, { useState, useEffect } from 'react'
import md5 from 'md5'

// importing copied style so I can edit it
import './styles.css'
//import 'prismjs/themes/prism.css'
import './styles-header.css' // separate from the code styles because I'm happy with these.

import Prism from 'prismjs'
import 'prismjs/components/prism-css.js'
import 'prismjs/components/prism-git.js'
import 'prismjs/components/prism-javascript.js'
import 'prismjs/components/prism-json.js'
import 'prismjs/components/prism-jsx.js'
import 'prismjs/components/prism-markup.js'
import 'prismjs/components/prism-nginx.js'
import 'prismjs/components/prism-php.js'
import 'prismjs/components/prism-python.js'
import 'prismjs/components/prism-sass.js'
import 'prismjs/components/prism-scss.js'
import 'prismjs/components/prism-sql.js'

import 'prismjs/components/prism-markup-templating'

// Themes to play with:
// prism.css
// prism-twilight.css
// prism-tomorrow.css
// prism-solarizedlight.css
// prism-okaidia.css
// prism-funky.css
// prism-dark.css
// prism-coy.css

// this approach is from https://www.ibenic.com/create-gutenberg-block-displaying-post/
const MJJCodeHighlighting = props => {
  const { attributes, key } = props.block
  const { language, code } = attributes
  const languageType = language || 'css'

  const [show, setShow] = useState(false)


  const createHighlighting = () => {
    let html = ''
    if (code && languageType) {
      html = Prism.highlight(code, Prism.languages[languageType], languageType)
    }
    return { __html: html }
  }

  const buttonId = md5(code)

  useEffect(() => {
    const toggleShow = () => {
      setShow(!show)
    }
    const buttonClicked = e => {
      if (e.target && e.target.id === buttonId) {
        toggleShow()
        document.removeEventListener('click', buttonClicked)
      }
    }
    document.addEventListener('click', buttonClicked)
  }, [show])

  const languageClassName = 'language-' + languageType
  const headerClassName = 'language-header ' + languageType
  const languageHeading = languageType.toUpperCase()

  const codeDiv = show ? (
    <React.Fragment>
      <button
        sx={{ variant: `buttons.primary`, mb: 2 }}
        id={buttonId}
      >
        hide code
      </button>
      <div className="mjj-code-highlighting">
        <div className={headerClassName}>{languageHeading}</div>
        <pre className={languageClassName}>
          <code
            //id={this.id}
            className={languageClassName}
            dangerouslySetInnerHTML={createHighlighting()}
          ></code>
        </pre>
      </div>
    </React.Fragment>
  ) : (
    <React.Fragment>
      <button
        sx={{ variant: `buttons.primary`, mb: 2 }}
        id={buttonId}
      >
        show code
      </button>
    </React.Fragment>
  )
  return codeDiv
}

export default MJJCodeHighlighting
