/** @jsx jsx */
import { jsx } from 'theme-ui'
import React, { useState, useEffect } from 'react'
import Inputs from './Inputs'
import { createLib, makePoem } from './utils'

// importing copied style so I can edit it
import './styles.css'

// this approach is from https://www.ibenic.com/create-gutenberg-block-displaying-post/
const MJJJustToSay = props => {
  const { attributes } = props.block
  const { blockId, attribution, lib } = attributes

  const [poem, setPoem] = useState('')
  const [show, setShow] = useState('inputs')
  const [inputs, setInputs] = useState([])


  const startLib = lib || ''
  const rendered = createLib(startLib)
  const divId = `mjj-inputs-${blockId}`

  useEffect(() => {
    const renderPoem = whose => {
      const inputDivs = document
        .getElementById(divId)
        .getElementsByClassName('lib-inputs')

      const renderedPoem = makePoem(lib, inputDivs)
      const whichPoem =
        whose === 'yours' ? renderedPoem.yours : renderedPoem.real
      setPoem(whichPoem)
	  setShow('poem')
	  setInputs(renderedPoem.inputs)
    }

    const buttonClicked = e => {
      if (e.target && e.target.id === blockId) {
        if (e.target.value === 'your-poem') {
          renderPoem('yours')
        }
        if (e.target.value === 'real-poem') {
          renderPoem('real')
        }
        document.removeEventListener('click', buttonClicked)
      }
    }

    document.addEventListener('click', buttonClicked)
  }, [poem,show,inputs])

  const poetryDiv = (
    <div id={divId}>
      <button
        sx={{ variant: `buttons.primary`, mb: 2 }}
        id={blockId}
        value="your-poem"
      >
        show your poem
      </button>
      <button
        sx={{ variant: `buttons.primary`, mb: 2 }}
        id={blockId}
        value="real-poem"
      >
        show the real poem
      </button>
      <button
        sx={{ variant: `buttons.primary`, mb: 2 }}
        id={blockId}
        value="real-poem"
      >
        back to inputs
      </button>
      {show === 'inputs' ? (
        <Inputs inputFields={rendered.inputFields} inputs={inputs} />
      ) : (
        <div dangerouslySetInnerHTML={{ __html: poem }} />
      )}
    </div>
  )
  return poetryDiv
}

export default MJJJustToSay
