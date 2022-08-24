import React, { useEffect, useState, createContext, useContext } from 'react'
import {createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut, onAuthStateChanged, GoogleAuthProvider, signInWithPopup} from 'firebase/auth'
import {auth} from '../firebase'

const AuthContext = createContext()

export function useAuth() {
  return useContext(AuthContext)
}

export function AuthProvider({ children }){
  const [currentUser, setCurrentUser] = useState();

  function signup(email, password){
    return createUserWithEmailAndPassword(auth, email, password)
  }

  function login(email, password){
    return signInWithEmailAndPassword(auth, email, password)
  }

  function logOut(){
    return signOut(auth);
  }

  function googleSign(){
    const googleAuthProvider = new GoogleAuthProvider();
    return signInWithPopup(auth, googleAuthProvider);
  }

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      setCurrentUser(user)
    })
    return () => {
      unsubscribe();
    }
  }, [])

  const value = {
    currentUser, 
    signup,
    login,
    logOut, 
    googleSign
  }
  
  return(
    <AuthContext.Provider value={value}>
      {children}
    </AuthContext.Provider>
  )
}