/** @jsx jsx */
import { jsx, Styled } from 'theme-ui'
import { useState } from 'react'

const CommentForm = ({ post, commentsEndpoint }) => {
  const postId = post.postId

  const [userName, setUserName] = useState('')
  const [email, setEmail] = useState('')
  const [message, setMessage] = useState('')
  const [commentStatus, setCommentStatus] = useState(false)

  // This handles sending the comment to the WordPress install.
  const createComment = () => {
    // Trying to avoid double clicks here.
    if (commentStatus === 'loading') {
      return // don't send this twice.
	}

	// This is a POST request to the comments endpoint. The body is sent as a JSON string.
	// Once the response is received, we set the comment status accordingly.
    fetch(commentsEndpoint, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        author_email: email,
        author_name: userName,
        post: postId,
        content: message,
      }),
    }).then(response => {
      if (response.status === 201) {
        setCommentStatus('success')
      } else {
        setCommentStatus('error')
      }
    })
  }

  // Renders the comment form elements.
  const renderCommentForm = (

	// This is using Styled components. (I keep playing around with the styles, it's not my strong suit.)
	// When the form is submitted, the comment status is set to "loading", then the submission response will update it.
	// The form inputs are easy with hooks! I updated this a little while ago and love them. 💖
	// All the comments on this are up here otherwise they'll mess up the rendering.
    <div>
      <Styled.h3>Leave a comment</Styled.h3>
      <Styled.p sx={{ a: { variant: `links.decorated` }, color: `text` }}>
        Your email address is required although it will not be shown publicly.
        All comments go through Akismet whose privacy policy can be found here:{' '}
        <a href="https://akismet.com/privacy/">https://akismet.com/privacy/</a>.
        I don't use your Gravatar but will publish whatever name you put in the
        form and the date and, as you might expect, the comment. The data is
        stored on the WordPress install on WP Engine. I have to manually approve
        comments, they won't show up immediately.
      </Styled.p>
      <form
        sx={{ variant: `forms.main` }}
        onSubmit={e => {
          e.preventDefault()
          setCommentStatus('loading')
        }}
      >
        <input type="hidden" name="botField" />
        <div className="field">
          <label htmlFor="userName">Name</label>
          <input
            type="text"
            name="userName"
            id="userName"
            value={userName}
            onChange={e => setUserName(e.target.value)}
          />
        </div>
        <div className="field">
          <label htmlFor="email">Email</label>
          <input
            type="text"
            name="email"
            id="email"
            value={email}
            onChange={e => setEmail(e.target.value)}
          />
        </div>
        <div className="field">
          <label htmlFor="message">Message</label>
          <textarea
            name="message"
            id="message"
            rows="6"
            value={message}
            onChange={e => setMessage(e.target.value)}
          />
        </div>
        <ul className="actions">
          <li>
            <input
              type="submit"
              onClick={createComment}
              value="Send Message"
              className="special"
            />
          </li>
          <li>
            <input
              type="reset"
              value="Clear"
              onClick={e => {
                setMessage('')
                setCommentStatus(false)
                setUserName('')
              }}
            />
          </li>
        </ul>
      </form>
    </div>
  )

  switch (commentStatus) {
    case 'success': // A successful submission.
      return 'Your comment has been successfully submitted.'
    case 'loading': // Just submitted, no response yet.
      return 'Please wait. Your comment is being submitted.'
    case 'error': // Something went wrong.
      return 'There was an error in your submission. Please try again later.'
    default: // No submission, render the form.
      return renderCommentForm
  }
}

export default CommentForm
