/** @jsx jsx */
import { jsx } from 'theme-ui'
import React from 'react'
import CommentsCount from './CommentsCount'
import CommentsList from './CommentsList'

const Comments = ({ post, location }) => {

	return (
		<>
		{location === 'single' ? (
			<CommentsList post={post} />
		) : (
			<CommentsCount post={post} />
		)}
		</>
	)
}

export default Comments
