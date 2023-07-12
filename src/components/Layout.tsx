import { Box } from "@chakra-ui/react"
import { Header } from "./Header"


export const Layout = ({ children }: any) => {
  return(
      <Box minHeight='100vh' bgGradient='linear(#ADDFFF, lightblue)' padding='25px'>
          <Header />
          {children}
      </Box>
  )
}
