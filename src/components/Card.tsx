import { ChakraProvider, Center, Input, Button, Box, Stack } from "@chakra-ui/react"
import { login } from "../services/login"
import { Header } from "./Header"

export const Card = () => {
  return (
    <Stack>
      <ChakraProvider>
        <Box minHeight='100vh' bgGradient='linear(#ADDFFF, lightblue)' padding='25px'>
          <Header />
          <Box bg='#FFFFFF' borderRadius='25px' padding='15px' >
            <Center>
              <h1>Faça o login</h1>
            </Center>
            <Input placeholder="email" type="email" />
            <Input placeholder="password" type="password" />
            <Center>
              <Button onClick={login} colorScheme='teal' size='sm' width='100%' marginTop='5px'>
                Entrar
              </Button>
            </Center>
          </Box>
        </Box>
      </ChakraProvider>
    </Stack>
  )
}