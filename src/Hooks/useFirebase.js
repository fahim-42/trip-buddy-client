import { getAuth, signInWithPopup, GoogleAuthProvider, signOut, onAuthStateChanged } from "firebase/auth";
import { useState, useEffect } from 'react';
import initializeAuthentication from './../Pages/Login/Firebase/firebase.init';

initializeAuthentication();

const useFirebase = () => {
    const auth = getAuth();

    const [user, setUser] = useState({});
    const [loading, setLoading] = useState(true);

    const signInUsingGoogle = () => {
        setLoading(true);
        const googleProvider = new GoogleAuthProvider();

        /* signInWithPopup(auth, googleProvider)
            .then(result => {
                setUser(result.user);
            }) */
        return signInWithPopup(auth, googleProvider)
            .finally(() => setLoading(false));
    }

    useEffect(() => {
        const loggedOut = onAuthStateChanged(auth, user => {
            if (user) {
                setUser(user);
            }
            else {
                setUser({})
            }
            setLoading(false);
        });
        return () => loggedOut;
    }, [])

    const logout = () => {
        setLoading(true);
        signOut(auth)
            .then(() => { })
            .finally(() => setLoading(false));
    }

    return {
        user,
        signInUsingGoogle,
        logout,
        loading
    }
}

export default useFirebase;