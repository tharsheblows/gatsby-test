/** @jsx jsx */
import { jsx, Styled } from 'theme-ui'
import { useState } from 'react'
// import { Mutation } from 'react-apollo'
// import CREATE_COMMENT from '../utils/createComment'

// use this https://northstack.com/dynamic-comments-gatsby-wordpress/
// interesting convo: https://github.com/wp-graphql/wp-graphql/issues/827 .
// also if this starts failing, watch for change from post id to Relay global ID https://github.com/wp-graphql/wp-graphql/issues/532 .

const CommentForm = ( props ) => {


  const [userName, setUserName] = useState('');
  const [email, setEmail] = useState('');
  //const [botField, setBotField] = useState('');
  const [message, setMessage] = useState('');
  const [commentStatus, setCommentStatus] = useState(false);
  const [error, setError] = useState('');

  const createComment = () => {
	  alert( 'hey there' )
  }

  // Renders the comment form elements.
 const renderCommentForm = (
      // Wrap it in our mutation.
      // This needs to be cleaned up but for now it's easier to see if it's all in one place.
      // Except for the mutation I guess. It's in utils, maybe it should be somewhere else?
          <div>
            <Styled.h3>Leave a comment</Styled.h3>
            <Styled.p sx={{ a: { variant: `links.decorated` }, color: `text` }}>
              Your email address is required although it will not be shown
              publicly. All comments go through Akismet whose privacy policy can
              be found here:{' '}
              <a href="https://akismet.com/privacy/">
                https://akismet.com/privacy/
              </a>
              . I don't use your Gravatar but will publish whatever name you put
              in the form and the date and, as you might expect, the comment.
              The data is stored on the WordPress install on WP Engine. I have
              to manually approve comments, they won't show up immediately.
            </Styled.p>
            <form
              sx={{ variant: `forms.main` }}
              onSubmit={e => {
                e.preventDefault()
                setCommentStatus('loading')
                createComment()
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
                    onClick={ e => {
							setMessage('')
							setCommentStatus(false)
							setUserName('')
						}
					}
                  />
                </li>
              </ul>
            </form>
          </div>
 )

  switch (commentStatus) {
      case 'success':
        return 'Your comment has been successfully submitted.'
      case 'loading':
        return 'Please wait. Your comment is being submitted.'
      case 'error':
        return 'There was an error in your submission. Please try again later.'
      default:
        return renderCommentForm
  }
}

export default CommentForm
