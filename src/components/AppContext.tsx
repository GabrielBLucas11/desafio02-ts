import { createContext, useEffect, useState } from "react"
import { getAllLocalStorage } from "../services/storage"

interface IAppContext {
  user: IUser
  setUser: (user: IUser) => void
  isLoggedIn: boolean,
  setIsLoggedIn: (isLoggedIn: boolean) => void
}

interface IUser {
  email: string
    password: string
    name: string
    balance: number
    id: string
}

export const AppContext = createContext({} as IAppContext)

export const AppContextProvider = ({ children }: any) => {
  const [ isLoggedIn, setIsLoggedIn ] = useState<boolean>(false)
  const [ user, setUser] = useState<IUser>({} as IUser)
  const storage = getAllLocalStorage()

  useEffect(() => {
    if(storage){
      const { login, user } = JSON.parse(storage)
      setIsLoggedIn(login)
      setUser(user)
    }
  }, [])

  

  return (
    <AppContext.Provider value={{ user, setUser , isLoggedIn, setIsLoggedIn }}>
      { children }
    </AppContext.Provider>
  )
}