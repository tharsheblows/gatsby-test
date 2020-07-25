/** @jsx jsx */
import { jsx, Styled } from 'theme-ui'
import React from 'react'

const MJJContentHolder = ( { block } ) => {
	const { attributes } = block

	const createHtml = () => {
		return { __html: attributes.html }
	}
	return (
    <Styled.root
      sx={{
        a: {
          variant: 'links.decorated',
          color: `primary`,
        },
      }}
      className="entry-content"
      dangerouslySetInnerHTML={createHtml()}
    />
  )
}

export default MJJContentHolder
