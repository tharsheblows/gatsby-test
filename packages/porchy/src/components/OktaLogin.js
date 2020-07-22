import signIn from '@okta/okta-signin-widget'
import '@okta/okta-signin-widget/dist/css/okta-sign-in.min.css'
import React, { useEffect } from 'react'

const config = {
  baseUrl: 'https://dev-704702.okta.com',
  logo: '//logo.clearbit.com/gatsbyjs.org',
  clientId: '0oal2p7kq5jKvy70i4x6',
  redirectUri:
     typeof window !== 'undefined' && window.location.origin + '/account',
  el: '#signIn',
  authParams: {
    issuer: 'https://dev-704702.okta.com/oauth2/ausl2vjw55vgBn2Wt4x6',
    responseType: ['token', 'id_token'],
    display: 'page',
  },
}

export const oktaSignIn = typeof window !== 'undefined' && new signIn(config)

// signIn.showSignInToGetTokens({
//   clientId: '0oal2p7kq5jKvy70i4x6',

//   // must be in the list of redirect URIs enabled for the OIDC app
//   redirectUri:
//     typeof window !== 'undefined' && window.location.origin + '/account',

//   // Return an access token from the authorization server
//   getAccessToken: true,

//   // Return an ID token from the authorization server
//   getIdToken: true,
//   scope: 'openid profile email',
// })

const OktaLogin = props => {
  useEffect(() => {
    if (oktaSignIn.hasTokensInUrl()) {
      oktaSignIn.authClient.token.parseFromUrl().then(
        tokens => {

          // Save the tokens for later use, e.g. if the page gets refreshed:
          // Add the token to tokenManager to automatically renew the token when needed
          tokens.forEach(token => {
            if (token.idToken) {
              oktaSignIn.authClient.tokenManager.add('idToken', token)
            }
            if (token.accessToken) {
              oktaSignIn.authClient.tokenManager.add('accessToken', token)
            }
		  })

          // Say hello to the person who just signed in:
          oktaSignIn.authClient.tokenManager
            .get('idToken')
            .then(function(idToken) {
              console.log('Hello, ' + idToken.claims.email)
            })

          // Remove the tokens from the window location hash
          window.location.hash = ''
        },
        err => {
          // handle errors as needed
          console.error(err)
        }
      )
    } else {
      oktaSignIn.authClient.session.get().then(res => {

        // Session exists, show logged in state.
        if (res.status === 'ACTIVE') {
          console.log('Welcome back, ' + res.login)
          return
        }
        // No session, show the login form
        oktaSignIn.remove()
        oktaSignIn.renderEl(
          { el: '#signIn' },
          res => {
            // Nothing to do in this case, the widget will automatically redirect
            // the user to Okta for authentication, then back to this page if successful
          },
          err => {
            // handle errors as needed
            console.error(err)
          }
        )
      })
    }
    console.log(oktaSignIn.token)
  }, [])

  return <div id="signIn" />
}

export default OktaLogin
