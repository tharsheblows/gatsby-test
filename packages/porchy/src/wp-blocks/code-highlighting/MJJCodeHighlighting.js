/** @jsx jsx */
import { jsx } from 'theme-ui'
import React, { useState, useEffect } from 'react'
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

  const buttonId = `mjj-code-toggle-${key}`

  useEffect(() => {
    const toggleShow = () => {
      setShow(!show)
    }
	const toggleButton = document.getElementById(buttonId)
	if( toggleButton ){
		toggleButton.addEventListener('click', toggleShow)
	}

    return () => {
		if( toggleButton ){
      		// clean up the event handler when the component unmounts
			 toggleButton.removeEventListener('click', toggleShow)
		}
    }
  }, [show])

  const languageClassName = 'language-' + languageType
  const headerClassName = 'language-header ' + languageType
  const languageHeading = languageType.toUpperCase()

  const codeDiv = show ? (
    <React.Fragment>
      <button sx={{ variant: `buttons.primary`, mb: 2 }} id={buttonId}>
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
      <button sx={{ variant: `buttons.primary`, mb: 2 }} id={buttonId}>
        show code
      </button>
    </React.Fragment>
  )
  return codeDiv
}

export default MJJCodeHighlighting
