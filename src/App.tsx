import {
  ChakraProvider,
  Input,
  Box,
  Button
} from '@chakra-ui/react'
import { login } from './Services/login';

function App() {
  return (
    <ChakraProvider>
      <Box
        minHeight='100vh'
        backgroundColor='purple.500'
        padding='1.5rem'
        display="flex"
        alignItems="center"
        justifyContent="center"
        flexDirection="column"
      >
        <Box
          backgroundColor='white'
          padding='1rem'
          borderRadius='0.5rem'
          gap="1rem"
          display="flex"
          alignItems="center"
          justifyContent="center"
          flexDirection="column"
          width="600px"
        >
          <h1>Faça seu login</h1>
          <Input placeholder='Email' />
          <Input placeholder='Password' type='password'/>
          <Button 
            colorScheme='teal' 
            variant='ghost' 
            width='100%'
            onClick={login}
          >
            Entrar
          </Button>
        </Box>
      </Box>
    </ChakraProvider>
  );
}

export default App;
