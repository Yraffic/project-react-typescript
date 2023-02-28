import { Box, Text } from "@chakra-ui/react"

interface ICard {
    title : string
    infor: string
}

export const CardInfo = ({title, infor}: ICard) => {

    return (
        <Box
            backgroundColor="white"
            padding={8}
            textAlign='center'
            borderRadius='1.5rem'
        >
           <Text
            fontSize="2xl"
            fontWeight='bold'
            padding={'1rem'}
           >
            {title}
           </Text>
           <Text
            fontSize="xl"
           >
            {infor}
           </Text>
        </Box>
    )
}