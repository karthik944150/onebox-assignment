import {Component} from 'react'
import {Redirect} from 'react-router-dom'
import './index.css'

class Login extends Component {
  state = {
    isLoggedIn: false,
  }

  // Handle the Google Sign-In button click
  handleGoogleSignIn = () => {
    console.log('Google login simulated')
    this.setState({isLoggedIn: true})
  }

  render() {
    // Destructuring state for cleaner access
    const {isLoggedIn} = this.state

    // Redirect to OneBox screen if the user is logged in
    if (isLoggedIn) {
      return <Redirect to="/onebox" />
    }

    return (
      <div className="login-page-container">
        <nav className="nav-bar">
          <img
            src="https://s3-alpha-sig.figma.com/img/37f3/2626/1680d9613629542a2474f79f92f7c022?Expires=1725235200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=pEixXZm3Oa~HQGQbPCaHtUvTwKiYNl3z3-96HB4DdYWCyOumtzRcRE6Uxwepwhw1HWCom60ZKU6oZTQTXBYbpdGQHqy1UPQrELDx8qrQSla7EmAYFd~~qzRmBLzxVYXUtpYhNMv2Dmv-vSJBugbZSBf5B38s0R023vuHEW~vZ~~IWlLRSzMMSwCV04Xl9NfaGRCyDbWgu1zdQoSbi7o1SQ5NtcOQDHNkPsn7t7KHJqr4zYDzuerqAJt~E-LjpERfNhZZCYIiHmgMrSuieYwOuYVgO0t8IZHKG5vpvA8xh0iZYmbGO1O122WausqmAux7f899JmutovkNG5J47UeSBA__"
            className="website-logo"
            alt="Website Logo"
          />
        </nav>
        <hr className="under-line" />
        <div className="login-section">
          <div className="form-container">
            <h1 className="form-header">Sign in to your account</h1>
            <button
              className="google-sign-button"
              type="button"
              onClick={this.handleGoogleSignIn}
            >
              Sign In with Google
            </button>
            <button
              className="create-account-button"
              type="button"
              onClick={this.handleGoogleSignIn}
            >
              Create an Account
            </button>
            <p className="sign-message">
              Don&apos;t have an account?{' '}
              <span className="sign-in">Sign up</span>
            </p>
          </div>
        </div>
        <hr className="under-line" />
        <div className="footer">
          <p>© 2023 Reachinbox. All rights reserved.</p>
        </div>
      </div>
    )
  }
}

export default Login
