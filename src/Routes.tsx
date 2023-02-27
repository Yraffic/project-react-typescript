import { ChakraProvider, Box } from "@chakra-ui/react";
import {
   BrowserRouter,
   Routes,
   Route
} from "react-router-dom";
import { Layout } from "./components/Layout/Layout";
import { AppContextProvider } from "./context/AppContext";
import { Contas } from "./pages/Contas/contas";
import { PageLogin } from "./pages/Login/login";


export function Pages() {
   return (
      <BrowserRouter>
         <AppContextProvider>
            <ChakraProvider>
               <Layout >
                  <Routes>
                     <Route path="/" element={<PageLogin />} />
                     <Route path="/contas/:id" element={<Contas />} />
                  </Routes>
               </Layout>
            </ChakraProvider>
         </AppContextProvider>
      </BrowserRouter>
   )
}


