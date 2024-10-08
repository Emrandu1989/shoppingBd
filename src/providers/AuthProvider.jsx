import React from 'react';
import { createContext, useEffect, useState } from "react";
import {
  getAuth,
 createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword,
 signOut,
 GoogleAuthProvider,
 signInWithPopup
  
  } from "firebase/auth";
import app from '../firebase/firebase.config';

const googleProvider = new GoogleAuthProvider(); 

export const AuthContext = createContext(null);
const auth = getAuth(app)

const AuthProvider = ( {children}) => {
  const [user, setUser] = useState();
    const [loading, setLoading] = useState(true);

    const createUser = (email, password) => {
        setLoading(true);
        return createUserWithEmailAndPassword(auth, email, password);
      };
      // const updateUserProfile = (name, photo) => {
      //   return updateProfile(auth.currentUser, {
      //     displayName: name,
      //     photoURL: photo,
      //   });
      // };

      const login = (email,password) =>{
        setLoading(true)
       return signInWithEmailAndPassword(auth,email,password)
 }

 const logOut = () =>{
     setLoading(true)
      return signOut(auth)
 }

 const googleLogin = () =>{
  setLoading(true)
   return signInWithPopup(auth,googleProvider)
}

      
 useEffect(()=>{
  const unsubscribe=  onAuthStateChanged(auth, currentUser =>{
          setUser(currentUser);
          console.log("currentUser",currentUser)
          setLoading(false)
   })
   return ()=>{
          unsubscribe()
   }
},[])

const authInfo = {
  user,
  createUser,
  login,
  logOut,
  loading,
  googleLogin,

}
    return (
        <AuthContext.Provider value={authInfo}>
             {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;