import { Button, Text } from "@chakra-ui/react"
import { Link } from "react-router-dom"

const ContaInfo = () => {
    return (
      <>
        <Text fontSize={"xl"} fontWeight={"bold"}>
          Informações da Conta
        </Text>
        <Link to="/conta/1">
            <Text fontSize={"xl"}>
              Detalhes da Conta
            </Text>
        </Link>
      </>
    );
}

export default ContaInfo