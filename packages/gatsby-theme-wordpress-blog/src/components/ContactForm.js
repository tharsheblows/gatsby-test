/** @jsx jsx */
import { jsx } from 'theme-ui'
import React from 'react'

export default class ContactForm extends React.Component {
  state = {
    userName: '',
    email: '',
    botField: '',
    message: '',
    error: '',
  }

  handleInputChange = event => {
    const target = event.target
    const value = target.value
    const name = target.name
    this.setState({
	  error: '',
      [name]: value,
    })
  }

  handleSubmit = e => {
	e.preventDefault()

    this.setState({
      error: '',
	})

    if (this.botField) {
      this.setState({
        error: 'Verification failed',
	  })
	  alert('Fill out all fields')
      return
    }

    if (!this.state.userName || !this.state.email || !this.state.message) {
      this.setState({
        error: 'Please fill out all fields',
	  })
	  alert('Please fill out all fields')
      return
	}

    const formMeta = {
      'form-name': 'contact',
	  'data-netlify': 'true',
	}

    fetch('/', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
      },
      body: JSON.stringify({
        userName: this.state.userName,
        email: this.state.email,
        message: this.state.message,
        ...formMeta,
      }),
    })
      .then(() => alert('Success!'))
      .catch(error => alert(error))
  }

  handleClear = e => {
    for (const key in this.state) {
      const stateObj = {}
      stateObj[key] = ''
      this.setState(stateObj)
    }
  }
  render() {
    return (
      <form sx={{ variant: `forms.main` }} onSubmit={this.handleSubmit}>
        <input type="hidden" name="botField" />
        <div className="field">
          <label htmlFor="userName">Name</label>
          <input
            type="text"
            name="userName"
            id="userName"
            value={this.state.name}
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
            value={this.state.messsage}
            onChange={this.handleInputChange}
          />
        </div>
        <ul className="actions">
          <li>
            <input type="submit" value="Send Message" className="special" />
          </li>
          <li>
            <input type="reset" value="Clear" onClick={this.handleClear} />
          </li>
        </ul>
      </form>
    )
  }
}
