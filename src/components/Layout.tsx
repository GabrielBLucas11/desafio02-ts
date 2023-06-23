import { Box, ChakraProvider } from "@chakra-ui/react"
import { Header } from "./Header"


export const Layout = ({ children }: any) => {
  return(
    <ChakraProvider>
      <Box minHeight='100vh' bgGradient='linear(#ADDFFF, lightblue)' padding='25px'>
          <Header />
          {children}
      </Box>
    </ChakraProvider>
  )
}
