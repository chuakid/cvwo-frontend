import LoginComponent from './components/Loggedout/LoginComponent';
import './App.css';
import { Container } from '@chakra-ui/react';

function App() {
  return (
    <main className="App">
      <Container>
        <LoginComponent />
      </Container>
    </main>
  );
}

export default App;
