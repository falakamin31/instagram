/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */
import React from 'react'
import {useState ,useContext,useEffect} from "react"
import { getUserByUserId } from '../services/firebase';
import UserContext from '../context/user';
const useUser = () => {

    const [activeUser, setActiveUser] = useState({});
    const {user} = useContext(UserContext);

    useEffect(() => {
    
        async function getUserObjByUserId(){

            const [response] =await getUserByUserId(user.uid);

            setActiveUser(response);
        }
        if(user?.uid){
            getUserObjByUserId();
        }
    }, [user]);
   return {user :activeUser}
}

export default useUser
