/** @jsx jsx */
import { jsx } from 'theme-ui'
import React from 'react'
import CommentsCount from './CommentsCount'
import CommentsList from './CommentsList'
import CommentForm from './CommentForm'

const Comments = ({ post, location }) => {
	// What if... ok, bear with me here... what if someone posts a comment and it hasn't built yet?
	// What then? And OK there aren't a lot of comments on this site but there MIGHT BE ONE DAY or, more likely, I will forget about it.
	// I mean, ok ok ok, I have to approve all comments and so could, theoretically, rebuild after each of them.
	// BUT I DON'T WANT TO.
	// so we should check to see how many comments there actually are then add them into the count and the list.
	// we can do that later but I'm commenting it in here.
	// otherwise I'll forget.
	// Maybe a published comment can trigger a build in a couple of hours.
	return (
		<>
		{location === 'single' ? (
		  <>
			<CommentsList post={post} />
			<CommentForm post={post} />
		  </>
		) : (
			<CommentsCount post={post} />
		)}
		</>
	)
}

export default Comments
