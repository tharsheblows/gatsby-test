/** @jsx jsx */
import { jsx } from 'theme-ui'
import React, { useState, useEffect } from 'react'
import CommentsCount from './CommentsCount'
import CommentsList from './CommentsList'
import CommentForm from './CommentForm'

const Comments = ({ post, location, wordPressUrl }) => {
  const commentsEndpoint = `${wordPressUrl}/wp-json/wp/v2/comments` // I'm hardcoding it, leave me alone.
  const postCommentsEndpoint = `${commentsEndpoint}?post=${post.postId}`
  const [comments, setComments] = useState(false)

  useEffect(() => {
    async function getPostComments() {
      const getComments = await fetch(postCommentsEndpoint)
      return getComments.json()
	}
	let isSubscribed = true
	// only run this on single post pages.
	if( location === 'single' ) {
    	getPostComments().then(postComments => {
    	  if (isSubscribed) {
    	    setComments(postComments)
    	  }
		})
	}
    // See https://juliangaramendy.dev/use-promise-subscription/. This fixes the "To fix, cancel all subscriptions and asynchronous tasks in a useEffect cleanup function" error.
    return () => (isSubscribed = false)
  }, [])

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
          <CommentsList post={post} comments={comments} />
          <CommentForm post={post} commentsEndpoint={commentsEndpoint} />
        </>
      ) : (
        <CommentsCount post={post} />
      )}
    </>
  )
}

export default Comments
