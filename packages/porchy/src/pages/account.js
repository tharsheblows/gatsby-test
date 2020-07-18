import React, { useState, useEffect } from 'react'
import { navigate, Router } from '@reach/router'
import { Link } from 'gatsby'
import Login, { signIn } from '../components/Login'

const Home = () => <p>Account Information</p>
const Settings = () => <p>Settings</p>

const isAuthenticated = () => {
  if (typeof window !== 'undefined') {
    return localStorage.getItem('isAuthenticated') === 'true'
  } else {
    return false
  }
}

const Account = props => {
  const [user, setUser] = useState(null)
  useEffect(() => {
    async function getToken() {
	  const token = await signIn.authClient.tokenManager.get('idToken')
	  console.log( 'token' )
	  console.log( token )
      if (token) {
        console.log(token)
        setUser(token.claims.name)
      } else {
        // Token has expired
        setUser(false)
        localStorage.setItem('isAuthenticated', 'false')
      }
	}
	getToken()
  }, [user])

  const logout = () => {
  	signIn.authClient
      .signOut()
      .then(() => {
        localStorage.setItem('isAuthenticated', 'false')
        setUser(false)
        navigate('/')
      })
      .catch(error => {
        console.error('Sign out error: ' + error)
      })
  }

  if (!isAuthenticated()) {
    return <Login />
  }

  return (
    <div>
      <nav>
        <Link to="/">Home</Link> <Link to="/account">My Account</Link>{' '}
        <Link to="/account/settings">Settings</Link>{' '}
      </nav>
      <h1>My Account</h1>
      <React.Fragment>
        <p>
          Welcome, {user}. <button onClick={logout}>Logout</button>
        </p>
      </React.Fragment>
      <Router>
        <Home path="/account" />
        <Settings path="/account/settings" />
      </Router>
    </div>
  )
}

export default Account
