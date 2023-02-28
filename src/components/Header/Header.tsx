import { Box, Button } from "@chakra-ui/react"
import { useContext } from "react"
import { useNavigate } from "react-router-dom"
import { AppContext } from "../../context/AppContext" 

export const Header = ()=>{
    const { isLoggedIn ,setIsLoggedIn} = useContext(AppContext)
    const navigate = useNavigate()

    const handleLogOut = ()=> {
        setIsLoggedIn(false)
        navigate('/')
    }

    return(
        <Box
        backgroundColor='orange'
        width='100%'
        padding='2rem'
        fontSize='3rem'
        display="flex"
        alignItems="center"
        justifyContent="space-between"
        >
           <h1>Bank</h1>
           {
            isLoggedIn &&
            <Button
            onClick={()=> handleLogOut()}
           >
             Sair
           </Button>
           }
        </Box>
    )
}