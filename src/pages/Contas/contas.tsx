import { Center, SimpleGrid, Spinner } from "@chakra-ui/react"
import { CardInfo } from "../../components/CardInfo/CardInfo"
import { useParams, useNavigate } from "react-router-dom";
import { useContext, useEffect, useState } from 'react';
import { api } from "../../api";
import { AppContext } from "../../context/AppContext";
interface UserData {
  email: string
  password: string
  name: string
  balance: number
  id: string
}

export const Contas = () => {
  const [userData, setUserData] = useState<null | UserData>()
  const {id} = useParams()
  const navigate = useNavigate()
  const context = useContext(AppContext)


  !context.isLoggedIn && navigate('/')

  useEffect(() => {
    const getApi = async () => {
      const data: any | UserData = await api
      setUserData(data)
    }

    getApi()
  }, [])
  const actualDate = new Date()

  if(userData && id !== userData.id){
    navigate('/')
  }

  return (
    <Center>
      <SimpleGrid
        columns={2}
        spacing={8}
        paddingTop={16}
      >
        {
          userData === null || userData === undefined ?
            (<Center>
              <Spinner size="xl" />
            </Center>)
            :
            (
              <>
                <CardInfo
                  title={`Bem vindo(a) ${userData?.name}`}
                  infor={`${actualDate.toDateString()}`}
                />
                 <CardInfo
                  title='Saldo'
                  infor={`R$ ${userData.balance}`}
                /> 
              </>
            )
        }

      </SimpleGrid>
    </Center>
  )
}