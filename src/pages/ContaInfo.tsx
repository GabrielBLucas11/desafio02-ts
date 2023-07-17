import { Box, Button, Center, SimpleGrid, Text } from "@chakra-ui/react"
import { useContext } from "react";
import { Link, useNavigate } from "react-router-dom"
import { AppContext } from "../components/AppContext";
import CardInfo from "../components/CardInfo";

interface UserData {
  email: string;
  password: string;
  name: string;
  balance: number;
  id: string;
}

const ContaInfo = () => {
  const { user } = useContext(AppContext)
  const { isLoggedIn} = useContext(AppContext)
  const navigate = useNavigate()

  return (
    <Center>
      <SimpleGrid columns={2} spacing={8} paddingTop={10}>
        <>
          <CardInfo
            mainContent={`Informações da Conta`}
            content={`Nome: ${user?.name}`}
          />
          <CardInfo mainContent="Email" content={`${user.email}`} />
          <CardInfo mainContent="Pagina do Usuário" content={<Link to={`/conta/${user.id}`}> Clique Aqui </Link>} />
        </>
      </SimpleGrid>
    </Center>
  );
};

export default ContaInfo