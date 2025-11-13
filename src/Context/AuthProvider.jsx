import React, { useEffect, useRef, useState } from 'react';
import { AuthContext } from './AuthContext';
import { createUserWithEmailAndPassword, GoogleAuthProvider, onAuthStateChanged, sendPasswordResetEmail, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from 'firebase/auth';
import { auth } from '../Firebase/firebase.config';

const googleProvider = new GoogleAuthProvider();

const AuthProvider = ({children}) => {
 const [user, setUser] = useState(null);
 const [loading, setLoading] = useState(true);
 const emailRef = useRef();

//  create user with email and password

const createUsers = (email, password)=>{
    setLoading(true);
    return createUserWithEmailAndPassword(auth, email, password);
}
// sign in user with email and password

const signInUser = (email, password)=>{
    setLoading(true);
    return signInWithEmailAndPassword(auth, email, password);
}
// sign in user with google

const signInWithGoogle = ()=>{
    setLoading(true);
    return signInWithPopup(auth, googleProvider);
}

// sign out user
const signOutUser = ()=>{
    setLoading(true);
    return signOut(auth);
}
// update profile user
const updateUserProfile = (displayName, photoURL)=>{
    return updateProfile(auth.currentUser, {displayName, photoURL});
}
 const forgetPasswordReset = (email)=>{
    return sendPasswordResetEmail(auth, email);
 }

    const authInfo = {
       user,
       setUser,
       loading,
       setLoading,
       createUsers,
       signInUser,
       signInWithGoogle,
       signOutUser,
       updateUserProfile,
       forgetPasswordReset,
       emailRef
       
    }
    useEffect(()=>{
        const unsubscribe = onAuthStateChanged(auth, (currentUser)=>{
            setUser(currentUser);
            
            setLoading(false);
        })
        return ()=> unsubscribe();
    },[])

    return (
        <AuthContext value={authInfo}>
            {children}
        </AuthContext>
    );
};

export default AuthProvider;