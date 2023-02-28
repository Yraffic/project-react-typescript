import { ChakraProvider, Box } from "@chakra-ui/react";
import { useContext } from "react";
import {BrowserRouter,} from "react-router-dom";
import { Layout } from "./components/Layout/Layout";
import { AppContextProvider } from "./context/AppContext";
import { MainRoutes } from "./Routes";


export function App() {
  
   return (
      <BrowserRouter>
         <AppContextProvider>
            <ChakraProvider>
               <Layout >
                  <MainRoutes />
               </Layout>
            </ChakraProvider>
         </AppContextProvider>
      </BrowserRouter>
   )
}


