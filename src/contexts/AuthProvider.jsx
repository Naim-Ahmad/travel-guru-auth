import { FacebookAuthProvider, GoogleAuthProvider, createUserWithEmailAndPassword, onAuthStateChanged, signInWithPopup, signOut, updateProfile } from 'firebase/auth';
import PropTypes from 'prop-types';
import React, { useEffect, useState } from 'react';
import auth from '../firebase/firebase.config';

export const AuthContext = React.createContext(null)

export default function AuthProvider({ children }) {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);

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

    const logOut = () => {
        return signOut(auth)
    }

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (user) => {
            setUser(user)
            setLoading(false)
        })
        return ()=> unsubscribe()
    },[])
    
    
    const authInfo = {
        loading,
        user, 
        signUpWithEmail,
        updateUserProfile,
        continueWithGoogle,
        continueWithFacebook,
        logOut
    }
  return (
      <AuthContext.Provider value={authInfo}>
          {children}
    </AuthContext.Provider>
  )
}

AuthProvider.propTypes = {
    children: PropTypes.node
}
