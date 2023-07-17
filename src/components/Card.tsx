import { ChakraProvider, Box, Stack } from "@chakra-ui/react"

export const Card = ({ children }: any) => {
  return (
    <Stack>
      <ChakraProvider>
        <Box bg='#FFFFFF' borderRadius='25px' padding='15px' >
          {children}
        </Box>
      </ChakraProvider>
    </Stack>
  )
}