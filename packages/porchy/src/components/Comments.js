/** @jsx jsx */
import { jsx } from 'theme-ui'
import React, { useState, useEffect } from 'react'
import CommentsCount from './CommentsCount'
import CommentsList from './CommentsList'
import CommentForm from './CommentForm'

const Comments = ({ post, location, wordPressUrl }) => {
  // The comments endpoint, hardcoded in, I have no shame.
  const commentsEndpoint = `${wordPressUrl}/wp-json/wp/v2/comments`

  // Each comments component is attached to a post. This is the endpoint to get all comments for that post.
  const postCommentsEndpoint = `${commentsEndpoint}?post=${post.postId}`

  // Setting up state to handle the incoming comments.
  const [comments, setComments] = useState(false)
  // Do this after the page loads.
  useEffect(() => {
    // Need to wait for the comments!
    async function getPostComments() {
      const getComments = await fetch(postCommentsEndpoint)
        .then(response => {
		  // Check the response status, if it's not 200 throw an error.
          if (response.status !== 200) {
            throw Error(response.message)
          }
          return response
        })
        .then(response => {
          return response.json()
        })
        .catch(error => {
		  // Catch the error and fail quietly, no one needs to know.
          console.log(error)
          return []
        })
      return getComments
    }
    // See https://juliangaramendy.dev/use-promise-subscription/. This fixes the "To fix, cancel all subscriptions and asynchronous tasks in a useEffect cleanup function" error.
    let isSubscribed = true
    // Only get all the comments if this is a single page. Otherwise it runs in archive lists and that's not necessary.
    // Although! This means that until the site is rebuilt, comment counts on archive post lists will be incorrect after someone successfully
    // submits a comments. Currently I moderate all comments and really, there are almost none, so I'm ok with this for now.
    // If you wanted it up to date, you could tweak CommentsCount to use comments.length and take of the "single" check so it does
    // the request on archive pages too
    if (location === 'single') {
      getPostComments().then(postComments => {
        if (isSubscribed) {
          setComments(postComments)
        }
      })
    }
    return () => (isSubscribed = false)
  }, [])

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
