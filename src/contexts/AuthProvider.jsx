import { FacebookAuthProvider, GoogleAuthProvider, createUserWithEmailAndPassword, signInWithPopup, updateProfile } from 'firebase/auth';
import React, { useState } from 'react';
import auth from '../firebase/firebase.config';

export const AuthContext = React.createContext()

export default function AuthProvider({ children }) {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);
    const [message, setMessage] = useState({})

    const signUpWithEmail = ( email, password) => {
        return createUserWithEmailAndPassword(auth, email, password)
    }

    const continueWithGoogle = () => {
        const googleProvider = new GoogleAuthProvider()
        return signInWithPopup(auth, googleProvider)
    }
    const continueWithFacebook = () => {
        const facebookProvider = new FacebookAuthProvider()
        return signInWithPopup(auth, facebookProvider)
    }

    const updateUserProfile = (name, photoURL) => {
        return updateProfile(auth.currentUser, {
            displayName: name,
            photoURL: photoURL
        })
    }
    
    
    const authInfo = {
        signUpWithEmail,
        updateUserProfile,
        continueWithGoogle,
        continueWithFacebook,
        message
    }
  return (
      <AuthContext.Provider value={authInfo}>
          {children}
    </AuthContext.Provider>
  )
}
