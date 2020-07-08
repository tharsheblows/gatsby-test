/** @jsx jsx */
import { jsx, Styled } from 'theme-ui'
import SubscriptionForm from './SubscriptionForm'
import React from 'react'

const FourOhFour = () => {
  return (
    <div sx={{ variant: `cards.muted` }}>
      <Styled.h1>Page missing</Styled.h1>
      <article>
        <p>I&rsquo;m sorry, somethings not where it should be!</p>
        <p>
          If you would like better content than this 404 page you can sign up
          for my newsletter.{' '}
          <span role="img" aria-label="happy face emoji">
            😊
          </span>{' '}
        </p>
        <SubscriptionForm />
      </article>
    </div>
  )
}

export default FourOhFour
