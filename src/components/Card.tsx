import { ChakraProvider, Center, Input, Button, Box, Stack } from "@chakra-ui/react"
import { login } from "../services/login"
import { Header } from "./Header"
import { LoginButton } from "./LoginButton"

export const Card = () => {
  return (
    <Stack>
      <ChakraProvider>
        <Box bg='#FFFFFF' borderRadius='25px' padding='15px' >
          <Center>
            <h1>Faça o login</h1>
          </Center>
          <Input placeholder="email" type="email" />
          <Input placeholder="password" type="password" />
          <Center>
            <LoginButton
              onClick={login}
            />
          </Center>
        </Box>
      </ChakraProvider>
    </Stack>
  )
}