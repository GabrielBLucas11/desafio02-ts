import { 
  Center,
  ChakraProvider,
  Input,
  Box,
  Button
} from '@chakra-ui/react'
import { login } from './services/login';
import { Header } from './components/Header';
import { Card } from './components/Card';

function App() {
  return (
    <ChakraProvider>
      <Card />
    </ChakraProvider>
  );
}

export default App;
