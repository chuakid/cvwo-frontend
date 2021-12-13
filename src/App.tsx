import LoginComponent from './components/Loggedout/LoginComponent';
import './App.css';
import { useState } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import CheckLoggedIn from './components/CheckLoggedIn';
import { Box } from '@chakra-ui/react';
import ProjectComponent from './components/LoggedIn/ProjectComponent';
import HomeComponent from './components/LoggedIn/HomeComponent';
import NoTaskSelectedComponent from './components/LoggedIn/NoProjectSelectedComponent';

function App() {
  const [loggedIn, setLoggedIn] = useState(false)
  

  return (
    <Box as="main" minH="100vh" minW="100vw" className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/login" element={<LoginComponent setLoggedIn={setLoggedIn} />}></Route>
          <Route path="/" element={<CheckLoggedIn isLoggedIn={loggedIn}><HomeComponent /></CheckLoggedIn>}>
            <Route path="project/:projectId" element={<ProjectComponent />} />
            <Route index element={<NoTaskSelectedComponent />} />

          </Route>
        </Routes>
      </BrowserRouter>
    </Box>
  );
}

export default App;
