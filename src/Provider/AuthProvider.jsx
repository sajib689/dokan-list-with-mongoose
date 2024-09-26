import { useEffect, useState } from "react";
import auth from './../Firebase/Firebase.config';
import { onAuthStateChanged } from "firebase/auth";

export const AuthContext = null;
const AuthProvider = ({children}) => {
    const [user, setUser] = useState(null)
    const [loading, setLoading] = useState(true)

    const createAccount = (email,password) => {
        return createUserWithEmailAndPassword(auth,email,password)
        setLoading(true)
    }

    useEffect( () => {
     const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
            setUser(currentUser)
            setLoading(false)
        })
        return () => {
            unsubscribe()
        }
    },[])

    const authInfo = {

    }
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;