import React, { createContext } from 'react';
import { useState } from 'react';
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";
import { useEffect } from 'react';
import app from '../../Firebase/Firebase.config';

export const AuthContext = createContext()

const auth = getAuth(app)

const AuthProvider = ({ children }) => {

    const [user, setUser] = useState(null)
    const [loading,setLoading]=useState(true)

    const [error, setError] = useState("")

    /* Google Login Provider */

    const googleLogin = (provider) => {
        setLoading(true)
        return signInWithPopup(auth, provider)
    }
    /* LogOut Syestem */
    const logOut = () => {
        setLoading(true)
        return signOut(auth)
    }

    /* Email Password Create account Syestem */

    const emailPasswordCreateAccount = (email, password) => {
        setLoading(true)
        return createUserWithEmailAndPassword(auth, email, password)
    }

    /* Email Login Password */
    const emailPasswordLogin = (email, password) => {
        setLoading(true)
        return signInWithEmailAndPassword(auth, email, password)
    }

    /* User Set In Outside Call */
    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
            console.log("state Change");
            setUser(currentUser)
            setLoading(false)
        })
        return () => {
            unsubscribe()
        }
    }, [])




    let authValue = {loading, user, googleLogin, emailPasswordLogin, setUser, logOut, emailPasswordCreateAccount, error, setError }
    return (
        <AuthContext.Provider value={authValue}>
            {children}
        </AuthContext.Provider>

    );
};

export default AuthProvider;