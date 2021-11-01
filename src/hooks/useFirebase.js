import { useEffect, useState } from "react"
import { getAuth, signInWithPopup, GoogleAuthProvider, onAuthStateChanged, signOut } from "firebase/auth";
import initializeAuthentication from "../Firebase/firebase.init";

initializeAuthentication();

const useFirebase = () => {
    const auth = getAuth();
    const [user, setUser] = useState('');
    const [error, seterror] = useState('');
    const [isLoading, setIsLoding] = useState(true);

    const googleProvider = new GoogleAuthProvider();

    //Sign In with google
    const signInWithGoogle = () => {
        setIsLoding(true);
        return signInWithPopup(auth, googleProvider);
    };

    //logout 
    const logout = () => {
        setIsLoding(true);
        signOut(auth)
            .then(() => {
                // setUser({});
            })
            .catch(error => {
                console.log(error.message);
            })
            .finally(() => setIsLoding(false));
    };

    //user auth state observer
    useEffect(() => {
        onAuthStateChanged(auth, (user) => {
            if (user) {
                setUser(user);
            }
            setIsLoding(false);
        });
    });

    return {
        error,
        user,
        isLoading,
        seterror,
        logout,
        signInWithGoogle,
    }
}

export default useFirebase;