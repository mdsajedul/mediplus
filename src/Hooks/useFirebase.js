import {getAuth, signInWithPopup, GoogleAuthProvider,onAuthStateChanged,createUserWithEmailAndPassword,updateProfile ,signInWithEmailAndPassword,signOut } from "firebase/auth";
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

        return signInWithPopup(auth, googleProvider);
           
    }
    
    const signUpWithEmailAndPassword = (email,password)=>{
        setIsLoading(true);
        return createUserWithEmailAndPassword(auth,email,password)
    }

    const LoginWithEmailAndPassword=(email,password)=>{
        setIsLoading(true);
        return signInWithEmailAndPassword(auth,email,password)
        
      }

    const  updateProfileName=(name)=>{
        updateProfile( auth.currentUser,{displayName:name})
        .then(()=>{
            console.log("Profile Updated");
        })
        .catch((error)=>{
            console.log(error)
        })
    }

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
        setUser,
        setIsLoading,
        user,
        isLoading,
        signInWithGoogle,
        signUpWithEmailAndPassword,
        LoginWithEmailAndPassword,
        logOut,
        updateProfileName
    }

}

export default useFirebase;