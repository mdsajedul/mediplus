import {getAuth, signInWithPopup, GoogleAuthProvider,onAuthStateChanged,createUserWithEmailAndPassword,updateProfile ,signOut } from "firebase/auth";
import { useEffect, useState } from "react";
import initializeAuthentication from "../Pages/Login/Firebase/firebase.init";

initializeAuthentication();



const useFirebase =()=>{
    const [user,setUser] =useState({});
    const [isLoading, setIsLoading] = useState(true);

    const auth = getAuth();

    const signInWithGoogle = () => {
        setIsLoading(true);
        const googleProvider = new GoogleAuthProvider();

        signInWithPopup(auth, googleProvider)
            .then(result => {
                setUser(result.user);
            })
            .finally(() => setIsLoading(false));
    }
    
    const signUpWithEmailAndPassword = (email,password)=>{
        createUserWithEmailAndPassword(auth,email,password)
        .then(result=>{
            console.log(result.user)
        })
        console.log(email,password)
        console.log('Register done')
    }

    // const updateProfileName=(name)=>{
    //     updateProfile(auth.currentUser,{displayName:name})
    //     .then(result=>{})
    // }

    useEffect(() => {
        const unsubscribed = onAuthStateChanged(auth, user => {
            if (user) {
                setUser(user);
            }
            else {
                setUser({})
            }
            setIsLoading(false);
        });
        return () => unsubscribed;
    }, [])

   

    const logOut = () => {
        setIsLoading(true);
        signOut(auth)
            .then(() => { })
            .finally(() => setIsLoading(false));
    }

    return{
        user,
        isLoading,
        signInWithGoogle,
        signUpWithEmailAndPassword,
      
        logOut
    }

}

export default useFirebase;