import matchAll from 'string.prototype.matchall'

const libRegEx = /{{(.*?)}}/g

export const createLib = markup => {
  const matchesArray = getMatches(markup)

  let poem = markup // The straight up text of the default lib.
  let inputFields = []

  poem = poem.replace(/\n/g, '<br>')

  matchesArray.forEach(e => {
    const stringToReplace = e[0]
    const values = e[1].split(',')

    const defaultWord =
      values.length >= 1
        ? values[0].trim()
        : 'please enter a default word and description'

    const description =
      values.length >= 2 ? values[1].trim() : 'please enter a description'

    poem = poem.replace(stringToReplace, defaultWord) // Just the text.

    inputFields.push({ description: description }) // Push the description to the end of the array. These are going to be done in order for now, we can complicate it later.
  })

  return {
    poem: poem,
    inputFields: inputFields,
  }
}

export const makePoem = (lib, inputs) => {
  const matchesArray = getMatches(lib)
  let yours = lib.replace(/\n/g, '<br>')
  let real = yours

  let count = 0

  let inputArray = []
  let show = true

  matchesArray.forEach(e => {
    // Make the users poem.
    const stringToReplace = e[0]
    const values = e[1].split(',')
    const defaultWord = values.length >= 1 ? values[0].trim() : ' ... '
	const input = inputs.length >= ++count ? inputs[count - 1] : false

	if( ! input ){
		show = false
	}

	const yourWord = input
	inputArray.push(yourWord)

    yours = yours.replace(stringToReplace, yourWord)
    real = real.replace(stringToReplace, defaultWord)
  })

  return {
    real: real,
    yours: show ? yours : 'Please fill out all the inputs to see your poem.',
    inputs: inputArray,
  }
}

export const getInputValues = inputDivs => {
  let inputs = []
  for( let input of inputDivs ){
    const value =
      input &&
      input.querySelector('input') &&
      input.querySelector('input').value
        ? input.querySelector('input').value
        : ''

    inputs.push(value)
  }

  return inputs
}

const getMatches = markup => {
  return [...matchAll(markup, libRegEx)]
}
