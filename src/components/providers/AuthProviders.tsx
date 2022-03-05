import { createContext, FC, useEffect, useMemo, useState } from "react";
import { IUser, TypeSetState } from "../../types";
import { Auth, getAuth, onAuthStateChanged } from 'firebase/auth';
import { user } from '../layout/sidebar/UserData';
import { useNavigate } from 'react-router';
import {Firestore, getFirestore} from 'firebase/firestore'
interface IContext {
    users: IUser | null
    setUsers: TypeSetState<IUser | null>
    ga:Auth,
    db:Firestore
}

export const AuthContext = createContext<IContext>({} as IContext)

export const AuthProvider:FC =  ({children}) => {
    const [users, setUsers] = useState<IUser | null>(null)
    const ga = getAuth()
    const db = getFirestore()
    const navigate = useNavigate()

    useEffect(() =>{
        const unListen = onAuthStateChanged(ga , authUser => {
            if(authUser){
                setUsers(
                    {
                        id: authUser.uid,
                        avatar: user[1].avatar,
                        name:authUser?.displayName || '',
                    } 
                )
            }else{
                setUsers(null)
                navigate('/auth')
            }
        })

        return () =>{
            unListen()
        } 
    } , [])

    const values = useMemo(() => ({
        users , 
        setUsers,
        ga,
        db
    }) , [users , ga , db])

    return (
        <AuthContext.Provider value={values}>
            {children}
        </AuthContext.Provider>
    )
} 