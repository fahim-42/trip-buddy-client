import { getAuth, signInWithPopup, GoogleAuthProvider, signOut, onAuthStateChanged } from "firebase/auth";
import { useState, useEffect } from 'react';
import initializeAuthentication from './../Pages/Login/Firebase/firebase.init';

initializeAuthentication();

const useFirebase = () => {
    const auth = getAuth();

    const [user, setUser] = useState({});

    const signInUsingGoogle = () => {
        const googleProvider = new GoogleAuthProvider();

        /* signInWithPopup(auth, googleProvider)
            .then(result => {
                setUser(result.user);
            }) */
        return signInWithPopup(auth, googleProvider)
    }

    useEffect(() => {
        onAuthStateChanged(auth, user => {
            if (user) {
                setUser(user);
            }
            else {
                setUser({})
            }
        });
    }, [auth])

    const logout = () => {
        signOut(auth)
            .then(() => {
                setUser({});
            })
    }

    return {
        user,
        signInUsingGoogle,
        logout
    }
}

export default useFirebase;