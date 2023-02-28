import { Center } from "@chakra-ui/react"
import { useContext } from "react"
import { Route, Routes } from "react-router-dom"
import { AppContext } from "./context/AppContext"
import { Contas } from "./pages/Contas/contas"
import { PageLogin } from "./pages/Login/login"



export const MainRoutes = () => {
    const {isLoggedIn} = useContext(AppContext)

    return (
        <Routes>
            <Route path="/" element={<PageLogin />} />
            <Route path="/conta/:id" element={ 
                        isLoggedIn ?
                        <Contas /> 
                        :
                        <Center>
                            Volte para page de loginss
                        </Center> 
            } 
        />
        </Routes>
    )
}