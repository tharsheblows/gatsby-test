import OktaSignIn from '@okta/okta-signin-widget'
import '@okta/okta-signin-widget/dist/css/okta-sign-in.min.css'
import React, { useState, useEffect } from 'react'

const config = {
  baseUrl: 'https://dev-704702.okta.com',
  clientId: '0oal2p7kq5jKvy70i4x6',
  logo: '//logo.clearbit.com/gatsbyjs.org',
  redirectUri:
    typeof window !== 'undefined' && window.location.origin + '/account',
  el: '#signIn',
  authParams: {
    pkce: true,
    issuer: 'https://dev-704702.okta.com/oauth2/ausl2vjw55vgBn2Wt4x6',
    responseType: ['token', 'id_token'],
    responseMode: 'query',
  },
}

export const isBrowser = () => typeof window !== 'undefined'
export const signIn = isBrowser() && new OktaSignIn(config)

const Login = props => {
  const [user, setUser] = useState(null)

  useEffect(() => {
    const authClient = signIn.authClient

    async function getSession() {
      const session = await authClient.session.get()

      // Session exists, show logged in state.
      if (session.status === 'ACTIVE') {
        // clear parameters from browser window
        window.location.hash = ''
        // set username in state
        setUser(session.login)

        localStorage.setItem('isAuthenticated', 'true')

        // get access and ID tokens
        authClient.token
          .getWithoutPrompt({
            scopes: ['openid', 'email', 'profile'],
          })
          .then(tokenObject => {
            const tokens = tokenObject.tokens
            if (tokens.idToken) {
              authClient.tokenManager.add('idToken', tokens.idToken)
            }
            if (tokens.accessToken) {
              console.log(tokens.accessToken)
              authClient.tokenManager.add('accessToken', tokens.accessToken)
            }

            // Say hello to the person who just signed in
            authClient.tokenManager.get('idToken').then(idToken => {
              console.log(
                `Hello, ${idToken.claims.name} (${idToken.claims.email})`
              )
              window.location.reload()
            })
          })
          .catch(error => console.error(error))
        return
      } else {
        signIn.remove()
        signIn.renderEl({ el: '#signIn' })
      }
    }
    getSession()
  }, [])

  return <div id="signIn" />
}

export default Login
