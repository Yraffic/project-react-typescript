import { Box } from "@chakra-ui/react"
import { useContext } from "react"
import { AppContext } from "../../context/AppContext" 
export const Header = ()=>{
    const context = useContext(AppContext)

    return(
        <Box
        backgroundColor='orange'
        width='100%'
        padding='2rem'
        textAlign='center'
        fontSize='3rem'
        >
           Dio bank
        </Box>
    )
}