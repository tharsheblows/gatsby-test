/** @jsx jsx */
import { jsx } from 'theme-ui'
import React, { useState } from 'react'

const SubscriptionForm = props => {
  const [status, setStatus] = useState(null)
  const YOUR_FORM_ID = '1512706'
  const YOUR_FORM_URL = `https://app.convertkit.com/forms/${YOUR_FORM_ID}/subscriptions` // https://app.convertkit.com/forms/1512706/subscriptions.

  const handleSubmit = async e => {
    e.preventDefault()
    const data = new FormData(e.target)

    try {
      const response = await fetch(YOUR_FORM_URL, {
        method: 'post',
        body: data,
        headers: {
          accept: 'application/json',
        },
      })

      const json = await response.json()

      if (json.status === 'success') {
        setStatus('SUCCESS')
        return
      }

      setStatus('ERROR')
    } catch (err) {
      setStatus('ERROR')
    }
  }

  return (
    <div
      sx={{
        textAlign: `center`,
        fontSize: `1.2rem`,
        border: t => `2px solid ${t.colors.secondary}`,
        background: t => `${t.colors.backgroundBlue}`,
        padding: `1rem`,
        margin: `1rem auto`,
        width: `50%`,
        minWidth: `325px`,
        borderRadius: `10px`,
      }}
    >
      <h3
        sx={{
          fontWeight: `normal`,
          fontSize: `1.3em`,
        }}
      >
        Join the newsletter
      </h3>
      <p>Subscribe to get the latest content by email.</p>
      <form
        sx={{
          variant: `forms.subscription`,
        }}
        action={YOUR_FORM_URL}
        method="post"
        onSubmit={handleSubmit}
      >
        <div className="field">
          <label htmlFor="email_address">Email address</label>
          <input
            type="email"
            aria-label="Your email"
            name="email_address"
            placeholder="Your email address"
            required
          />
        </div>
        <div
          className="buttons"
          sx={{
            textAlign: `center`,
          }}
        >
          <button type="submit">Subscribe</button>
          {status === 'SUCCESS' && <p>Please go confirm your subscription!</p>}
          {status === 'ERROR' && <p>Oops, try again.</p>}
        </div>
      </form>
      <p
        sx={{
          color: t => `${t.colors.textMuted}`,
          fontSize: `1rem`,
        }}
      >
        Powered by ConvertKit. If you give me your email address, you may
        receive emails from me (JJ) about posts on this site. You can unsubscribe at any time.
      </p>
    </div>
  )
}

export default SubscriptionForm
