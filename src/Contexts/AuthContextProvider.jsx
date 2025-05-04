import { useState } from "react"
import { authContext } from "./AuthContext"

export const AuthContextProvider = ({ children }) => {
    const [isLogged, setIsLogged] = useState(false)
    const [isVendor, setIsVendor] = useState(false)
    const [isAdmin, setIsAdmin] = useState(false)
    const [jwtToken, setJwtToken] = useState({})
    
    const toBeDoneLater = {
        email: "",
        first_name: "",
        last_name: "",
        is_business: "",
        business_name: "",
    }


    return (

        <authContext.Provider value={{ isLogged, isVendor, isAdmin, jwtToken, setIsLogged, setIsVendor, setIsAdmin, setJwtToken }}>
            {children}
        </authContext.Provider>
    )
}


