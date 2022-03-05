import { useContext } from "react"
import { AuthContext } from "./AuthProviders"

export const useAuth = () =>{
    const value = useContext(AuthContext)
    return value
}