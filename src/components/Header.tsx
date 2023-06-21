import { 
  Box,
  Center,
  Heading
} from "@chakra-ui/react"


export const Header  = () => {
  return(
    <Heading size='2x1'>
      <Box bg='white' padding='15px' borderRadius='25px'>
        <Center>
          <h1>Dio Bank</h1>
        </Center>
      </Box>
      <Box padding='5px'>
      </Box>
    </Heading>
  )
}
