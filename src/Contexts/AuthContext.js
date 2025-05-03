import { createContext, useContext } from "react";

export const authContext = createContext({
    isLogged: false,
    isVendor: false,
    isAdmin: false,
    jwtToken: "",
    setIsLogged() { },
    setIsVendor() { },
    setIsAdmin() { },
    setJwtToken() { }

})

export default function useAuth() {
    return useContext(authContext)
}