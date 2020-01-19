/** @jsx jsx */
import { jsx, Styled } from 'theme-ui'
import React from 'react'
import { Mutation } from 'react-apollo'
import CREATE_COMMENT from '../utils/createComment'

// use this https://northstack.com/dynamic-comments-gatsby-wordpress/
// interesting convo: https://github.com/wp-graphql/wp-graphql/issues/827 .
// also if this starts failing, watch for change from post id to Relay global ID https://github.com/wp-graphql/wp-graphql/issues/532 .

export default class CommentForm extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      userName: '',
      email: '',
      botField: '',
      message: '',
      error: '',
      commentStatus: false,
    }
    this.handleInputChange = this.handleInputChange.bind(this)
  }

  handleInputChange = e => {
    const target = e.target
    const value = target.value
    const name = target.name
    this.setState({
      error: '',
      [name]: value,
    })
  }

  handleClear = () => {
    for (const key in this.state) {
      const stateObj = {}
      stateObj[key] = ''
      this.setState(stateObj)
    }
  }

  // Renders the comment form elements.
  renderCommentForm() {
    const { userName, message, email } = this.state
    return (
      // Wrap it in our mutation.
      // This needs to be cleaned up but for now it's easier to see if it's all in one place.
      // Except for the mutation I guess. It's in utils, maybe it should be somewhere else?
      <Mutation
        mutation={CREATE_COMMENT}
        // Set completion state.
        variables={{
          input: {
            author: userName,
            commentOn: this.props.post.postId, // see above, this might change to id at some point.
            content: message,
            authorEmail: email,
            clientMutationId: 'TSTCreateComment',
          },
        }}
        onCompleted={() => {
          this.setState({ commentStatus: 'success' })
        }}
        // Set error state.
        onError={() => {
          this.setState({ commentStatus: 'error' })
        }}
        onSubmit={e => {
          e.preventDefault()
          this.handleClear()
        }}
      >
        {createComment => (
          <>
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
                this.setState({ commentStatus: 'loading' })
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
                  value={this.state.userName}
                  onChange={this.handleInputChange}
                />
              </div>
              <div className="field">
                <label htmlFor="email">Email</label>
                <input
                  type="text"
                  name="email"
                  id="email"
                  value={this.state.email}
                  onChange={this.handleInputChange}
                />
              </div>
              <div className="field">
                <label htmlFor="message">Message</label>
                <textarea
                  name="message"
                  id="message"
                  rows="6"
                  value={this.state.message}
                  onChange={this.handleInputChange}
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
                    onClick={this.handleClear}
                  />
                </li>
              </ul>
            </form>
          </>
        )}
      </Mutation>
    )
  }

  render() {
    // Check comment status from component state and display messages or form.
    switch (this.state.commentStatus) {
      case 'success':
        return 'Your comment has been successfully submitted.'
      case 'loading':
        return 'Please wait. Your comment is being submitted.'
      case 'error':
        return 'There was an error in your submission. Please try again later.'
      default:
        return this.renderCommentForm()
    }
  }
}
