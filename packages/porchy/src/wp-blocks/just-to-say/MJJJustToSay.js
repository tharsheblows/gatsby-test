/** @jsx jsx */
import { jsx } from 'theme-ui'
import React, { useState, useEffect } from 'react'
import sanitizeHtml from 'sanitize-html'
import Inputs from './Inputs'
import { createLib, makePoem, getInputValues } from './utils'

// importing copied style so I can edit it, I'm doing one of the divs wrong and can't add the theme-ui stuff.
import './styles.css'

const MJJJustToSay = props => {
  // Get the attributes.
  const { attributes } = props.block
  // Get what we need from the attributes.
  // blockId is the unique block id. Attribution is, well, the attribution. Lib is our marked up poem.
  const { blockId, attribution, lib } = attributes
  const allowedInputTags = []
  // Used for sanitizing the final poem. Only <br>s allowed.
  const allowedPoemTags = ['br']

  // The unique id of the "save" button.
  const saveId = sanitizeHtml(`mjj-save-${blockId}`, allowedInputTags)
  // The unique id of the "use saved" button. (Sanitization duplicated but also keeps it ok if I go in changing the variables)
  const useSaveId = sanitizeHtml(`use-${saveId}`, allowedInputTags)

  // The saved version if there is one.
  const savedVersion = localStorage.getItem(saveId)
    ? localStorage.getItem(saveId).split(',')
	: []

  // The poem we'll show. This will be either the real poem or the user poem.
  const [poem, setPoem] = useState('')
  // What we're showing. Either your poem, the real poem of the inputs.
  const [show, setShow] = useState('inputs')
  // The inputs.
  const [inputs, setInputs] = useState([])
  // The saved version.
  const [saved, setSaved] = useState(savedVersion)

  // The marked up poem in the post.
  const startLib = lib || ''
  // Creates the input fields.
  const rendered = createLib(startLib)

  // The unique *class* (not id) of the input / your poem / real poem buttons.
  const divId = sanitizeHtml(`mjj-inputs-${blockId}`, allowedInputTags)

  useEffect(() => {
    // Here for cleanup reasons.
    let mounted = true

    // Get either the user entered input values if we're coming from the input screen or the input values in state.
    const getInputs = () => {
      const inputValues =
        show === 'inputs'
          ? getInputValues(
              document
                .getElementById(divId)
                .getElementsByClassName('lib-inputs')
            )
          : inputs
      return inputValues
    }

    // Render the poem and set everything. It feels like there's a more efficient way to do this so come back to it later.
    const renderPoem = (whose, useInputs = []) => {
      const inputValues = useInputs.length > 0 ? useInputs : getInputs()
      const renderedPoem = makePoem(lib, inputValues)
      const whichPoem =
        whose === 'yours' ? renderedPoem.yours : renderedPoem.real
      setPoem(sanitizeHtml(whichPoem,allowedPoemTags))
      setShow(whose)
      setInputs(renderedPoem.inputs)
    }

    // Handles listening for the button to be clicked. This handles the rendering of the poem.
    // In each case, remove the event listener because it will be added back in at the end. Otherwise we end up with a million listeners listening for button clicks.
    const buttonClicked = e => {
      // If this is one of the input / your poem / real poem buttons, render the poem and show it.
      if (e.target && e.target.className.includes(blockId) && mounted) {
        renderPoem(e.target.value)
        document.removeEventListener('click', buttonClicked)
      }

      // If the save button is clicked, save to localstorage
      if (e.target && e.target.id === saveId && mounted) {
        localStorage.setItem(saveId, inputs)
        setSaved(inputs)
        document.removeEventListener('click', buttonClicked)
      }

      // If we want to use the saved version, get that out of localStorage and show the poem made from it.
      if (e.target && e.target.id === useSaveId && mounted) {
        const savedInputs = localStorage.getItem(saveId, inputs)
        setInputs(savedInputs.split(','))
        renderPoem('yours', savedInputs.split(','))
        document.removeEventListener('click', buttonClicked)
      }
    }
    // Add in the event listener.
    document.addEventListener('click', buttonClicked)

    // useEffect cleanup.
    return () => {
      mounted = false
    }
  }, [poem, show, inputs, saved])

  // What we're returning. This also could stand to be cleaned up PUTTING IT MILDLY but whatever.
  const poetryDiv = (
    <div id={divId} className="mjj-jts">
      <div
        className="display-box"
        sx={{
          textAlign: `left`,
          fontSize: `1.1rem`,
          border: t => `2px solid ${t.colors.shadePink}`,
          background: t => `${t.colors.backgroundBlue}`,
          padding: `2rem`,
          lineHeight: `1.75rem`,
          margin: `1rem auto`,
          width: `100%`,
          minWidth: `325px`,
          borderRadius: `10px`,
        }}
      >
        {show === 'inputs' ? (
          <Inputs inputFields={rendered.inputFields} inputs={inputs} divId={divId} />
        ) : (
          <React.Fragment>
            <div
              dangerouslySetInnerHTML={{
                __html: sanitizeHtml(poem, allowedPoemTags),
              }}
            />
            <div
              sx={{
                textAlign: `right`,
                fontSize: `1 rem`,
                borderLeft: t => `2px solid ${t.colors.shadePink}`,
                display: `inline-block`,
                padding: `2rem`,
                borderRadius: `20px`,
                lineHeight: `1.75rem`,
                margin: `1rem auto`,
              }}
            >
              Attribution for original:{' '}
              {sanitizeHtml(attribution, allowedPoemTags)}
            </div>
          </React.Fragment>
        )}{' '}
        {show === 'yours' && inputs.join(',') !== saved.join(',') && (
          <div sx={{ marginTop: `2em` }}>
            <button
              sx={{
                variant: `buttons.primary`,
                mb: 2,
              }}
              id={saveId}
              value="inputs"
            >
              save this version
            </button>
          </div>
        )}
      </div>
      <div className="left-buttons">
        <button
          sx={{
            variant: show === 'yours' ? `buttons.secondary` : `buttons.primary`,
            mb: 2,
          }}
          className={blockId}
          value="yours"
        >
          your poem
        </button>
        <button
          sx={{
            variant: show === 'real' ? `buttons.secondary` : `buttons.primary`,
            mb: 2,
          }}
          className={blockId}
          value="real"
        >
          real poem
        </button>
        <button
          sx={{
            variant: show === 'inputs' ? `buttons.secondary` : `buttons.primary`,
            mb: 2,
          }}
          className={blockId}
          value="inputs"
        >
          inputs
        </button>
        {saved.length > 0 ? (
          <button
            sx={{
              variant: `buttons.primary`,
              mb: 2,
            }}
            id={useSaveId}
            value="saved"
          >
            use saved version
          </button>
        ) : (
          ''
        )}
      </div>
    </div>
  )
  return poetryDiv
}

export default MJJJustToSay
