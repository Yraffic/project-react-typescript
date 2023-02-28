import { createContext, useState } from "react"

interface IAppcontext {
   user: string
   isLoggedIn: boolean
   setIsLoggedIn: ( isLoggedIn: boolean)=> void
}

export const AppContext = createContext({} as IAppcontext)

export const AppContextProvider = ({ children }: any) => {
   const [isLoggedIn, setIsLoggedIn] = useState<boolean>(false)
   const user = 'yuri'


   return (
      <AppContext.Provider value={{ user, isLoggedIn, setIsLoggedIn }}>
         {children}
      </AppContext.Provider>
   )
}
