import { Box, Center, Input} from "@chakra-ui/react";
import { Card } from "../components/Card";
import { useContext, useState } from "react";
import { LoginButton } from "../components/LoginButton";
import { login } from "../services/login";
import { useNavigate } from "react-router-dom";
import { AppContext } from "../components/AppContext";
import { changeLocalStorage } from "../services/storage";
import { api } from "../api";

const Home = () => {
  const [ email, setEmail ] = useState<string>('')
  const [ password, setPassword ] = useState<string>('')
  const navigate = useNavigate()
  const { setIsLoggedIn } = useContext(AppContext)

  const validateUser = async (email: string, password: string) => {
    const loggedIn = await login(email, password)
    const data: any = await api

    if(!loggedIn){
      return alert('Email and/or password is not valid')
    }

    setIsLoggedIn(true)
    changeLocalStorage({ login: true, user: data})
    navigate('/conta/1')   
  }

    return (
      <Box>
        <Card>
          <Center>
            <h1>Faça o login</h1>
          </Center>
          <Input
            placeholder="email"
            type="email"
            value={email}
            onChange={(event) => setEmail(event.target.value)}
          />
          <Input 
            placeholder="password" 
            type="password" 
            value={password}
            onChange={(event) => setPassword(event.target.value)}
          />
          <Center>
            <LoginButton onClick={ () => validateUser(email, password)} />
          </Center>
        </Card>
      </Box>
    );
}

export default Home;