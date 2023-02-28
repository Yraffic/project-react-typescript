import {
  Input,
  Box,
  Button
} from '@chakra-ui/react'
import { useContext, useState } from 'react';
import { Login } from '../../Services/Login';
import { useNavigate } from 'react-router-dom';
import { AppContext } from '../../context/AppContext';



export const PageLogin = () => {
  const [email, setEmail] = useState<string>('')
  const [password, setPassword] = useState<string>('')
  const {setIsLoggedIn} = useContext(AppContext)
  const navigate = useNavigate()

  const handleLogin = async (email: string) => {
    const loggedIn = await Login(email)

    if (!loggedIn) {
      return alert("email invalido")
    }

    setIsLoggedIn(true)
    navigate('/conta/1') 
  }

  return (
    <Box
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
        <Input
          placeholder='Email'
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <Input
          placeholder='Password'
          type='password'
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <Button
          onClick={()=> handleLogin(email)}
          colorScheme='teal'
          variant='ghost'
          width='100%'
        >
          Entrar
        </Button>
      </Box>
    </Box>
  );
}