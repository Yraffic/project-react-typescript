import { Box } from "@chakra-ui/react"
import { Header } from "../Header/Header"


export const Layout = ({ children }: any) => {
    return (
        <Box
            backgroundColor='purple.500'
            minHeight='100vh'
            width='100vw'
        >
            <Header />
            {children}
        </Box>
    )
}