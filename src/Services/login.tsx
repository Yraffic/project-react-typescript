
import { useContext } from "react"
import { useNavigate } from "react-router-dom"
import { api } from "../api"
import { AppContext } from "../context/AppContext"

export const login = async (email: string): Promise<void> => {
  const {setIsLoggedIn} = useContext(AppContext)
  const navigate = useNavigate()
  const data: any = await api

  if (email !== data.email) {
    return alert("email invalido")
  }
  setIsLoggedIn(true)
  navigate(`/${data.id}`)
}