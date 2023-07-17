import { Center, SimpleGrid, Spinner } from "@chakra-ui/react";
import { useParams, useNavigate, Link } from "react-router-dom";
import CardInfo from "../components/CardInfo";
import { useContext, useEffect, useState } from "react";
import { api } from "../api";
import { AppContext } from "../components/AppContext";

interface UserData {
    email: string
    password: string
    name: string
    balance: number
    id: string
  }

const Conta = () => {
  const [userData, setUserData] = useState<null | UserData>();
  const { id } = useParams();
  const navigate = useNavigate();
  const { user } = useContext(AppContext)

  const { isLoggedIn } = useContext(AppContext);

  !isLoggedIn && navigate("/");

  useEffect(() => {
    const getData = async () => {
      const data: any | UserData = await api;
      setUserData(data);
    };

    getData();
  }, []);

  const actualData = new Date();

  if (userData && id !== userData.id) {
    navigate("/");
  }

  return (
    <Center>
      <SimpleGrid columns={2} spacing={8} paddingTop={10}>
        {userData === undefined || userData === null ? (
          <Center>
            <Spinner size={"xl"} color="white" />
          </Center>
        ) : (
          <>
            <CardInfo
              mainContent={`Bem vindo ${userData?.name}`}
              content={`${actualData.getDay()} / ${actualData.getMonth()} / ${actualData.getFullYear()} ${actualData.getHours()} : ${actualData.getMinutes()}`}
            />
            <CardInfo mainContent="Saldo" content={`R$ ${userData.balance}`} />
            <CardInfo mainContent="Pagina da Conta" content={<Link to={`/infoconta`}> Clique Aqui </Link>} />
          </>
        )}
      </SimpleGrid>
    </Center>
  );
};

export default Conta;