import React, { useEffect, useState } from 'react';
import { AuthContext } from '../Context/AuthContext';
import { auth } from '../../Firebase/firebase.init';
import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, updateProfile } from 'firebase/auth';

const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null)
    const [loading, setLoading] = useState(true)
    const createUser = (email, password) => {
        setLoading(true)
        return createUserWithEmailAndPassword(auth, email, password)
    }

    const logInUser = (email, password) => {
        setLoading(true)
        return signInWithEmailAndPassword(auth, email, password)
    }


    // Updated User
    const updatedUser = (updatedData) => {
        return updateProfile(auth.currentUser, updatedData)
    }
    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
            setLoading(false)
            setUser(currentUser)
        })
        return () => {
            unsubscribe()
        }
    }, [])


    const userInfo = {
        user,
        loading,
        createUser,
        logInUser,
        updatedUser
    }
    return <AuthContext value={userInfo}>
        {children}
    </AuthContext>
};

export default AuthProvider;