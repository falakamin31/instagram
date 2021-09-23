/* eslint-disable no-unused-vars */
import React, { useContext, useState } from 'react'
import { useEffect } from 'react'
import FirebaseContext from '../context/firebase'

const useAuthListener = () => {
    const [user, setUser] = useState(JSON.parse(localStorage.getItem("authUser")));
    const { firebase } =useContext(FirebaseContext);

    useEffect(() =>{
        // eslint-disable-next-line no-unused-vars
        const listener =firebase.auth().onAuthStateChanged((authUser) =>{
            if(authUser)
            {
                localStorage.setItem("authUser",JSON.stringify(authUser));
                setUser(authUser);
            }
            else{
                localStorage.removeItem("authUser");
                setUser(null);
            }
        })
        return () => listener();
        
    },[firebase]);

    return (
       {user}
    )
}

export default useAuthListener
