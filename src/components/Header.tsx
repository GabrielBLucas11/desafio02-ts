import { Box, Button, Center, Flex, Heading, Spacer } from "@chakra-ui/react";
import { useContext } from "react";
import { AppContext } from "./AppContext";
import { useNavigate } from "react-router-dom";
import { changeLocalStorage } from "../services/storage";
import { api } from "../api";

export const Header = () => {
  const { isLoggedIn, setIsLoggedIn } = useContext(AppContext)
  const navigate = useNavigate()

  const logout = async () => {
    const data: any = await api
    setIsLoggedIn(false)
    changeLocalStorage({login: false, user: data})
    navigate('/')
  }

  return (
    <Flex padding="5px">
      <Heading size="2x1" fontSize={"3xl"}>
        <Box bg="white" padding="15px" borderRadius="25px">
          <Center>
            <h1>Gears Bank</h1>
          </Center>
        </Box>
        <Box padding="5px"></Box>
      </Heading>
      {isLoggedIn && (
        <>
          <Spacer />
          <Button onClick={() => logout()}>Sair</Button>
        </>
      )}
    </Flex>
  );
};
