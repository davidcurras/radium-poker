import './style.css'
import React, { Component } from 'react'
import StyledFirebaseAuth from 'react-firebaseui/StyledFirebaseAuth'
import firebase from 'firebase'
import MainLayout from '../../layouts/MainLayout'
import config from '../../../assets/config.json'

const firebaseApp = firebase.initializeApp(config)

class Login extends Component {

    state = {
        isSignedIn: undefined,
    }

    uiConfig = {
        signInFlow: 'popup',
        signInOptions: [
            // firebase.auth.GoogleAuthProvider.PROVIDER_ID,
            // firebase.auth.FacebookAuthProvider.PROVIDER_ID,
            firebase.auth.EmailAuthProvider.PROVIDER_ID,
        ],
        callbacks: {
            signInSuccessWithAuthResult: () => false,
        },
    }

    componentDidMount() {
        this.unregisterAuthObserver = firebaseApp.auth().onAuthStateChanged(
            user => { this.setState({ isSignedIn: !!user }) }
        )
    }

    componentWillUnmount() {
        this.unregisterAuthObserver()
    }

    render() {
        return (
            <MainLayout>
                <h1>Login</h1>
                {this.state.isSignedIn !== undefined && !this.state.isSignedIn &&
                    <div>
                        <StyledFirebaseAuth uiConfig={this.uiConfig} firebaseAuth={firebaseApp.auth()} />
                    </div>
                }
                {this.state.isSignedIn &&
                    <div>
                        Hello {firebaseApp.auth().currentUser.displayName}. You are now signed In!
                        <button onClick={() => firebaseApp.auth().signOut()}>Sign-out</button>
                    </div>
                }
            </MainLayout>
        )
    }
}

export default Login