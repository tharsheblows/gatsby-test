import React from 'react'

function Inputs(props) {
  const { inputFields, inputs, divId } = props
  let count = 1
  const inputReturn =
    inputFields.length > 0
      ? inputFields.map(i => {
		  const id = `input-${count++}`
		  const inputValue = ( inputs.length < count ) ? '' : inputs[count-1]
          const input = `<div class="lib-inputs"><label for="${id}">${i.description}</label> <input type="text" name="${id}" id="${id}" value="${inputValue}"/></div>`
          return input
        }, [])
      : ['no fields yet']

  const returnedInputsHtml = { __html: inputReturn.join('') }

  return (
    <div
	  id={divId}
      className="mjj-just-to-say-inputs"
      dangerouslySetInnerHTML={returnedInputsHtml}
    />
  )
}

export default Inputs
