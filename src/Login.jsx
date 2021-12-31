import React from 'react'
import './Login.css'
import { signInWithGoogle } from './firebase'

export default function Login() {
    return (
        <div className="login_main">
            <div className="login_cont">
                <h1> Bruh Chat </h1>
                <button onClick={signInWithGoogle}>
                    <span> Signin with Google</span>
                </button>
            </div>
        </div>
    )
}
