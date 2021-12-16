import LoginComponent from './components/Loggedout/LoginComponent';
import RegisterComponent from './components/Loggedout/RegisterComponent';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Box } from '@chakra-ui/react';
import ProjectComponent from './components/LoggedIn/Project/ProjectComponent';
import HomeComponent from './components/LoggedIn/HomeComponent';
import NoTaskSelectedComponent from './components/LoggedIn/NoProjectSelectedComponent';
import CheckLoggedIn from './components/LoggedIn/CheckLoggedIn';
import { setAppToken, setAppUsername } from './helpers/userhelpers';

function App() {
  const token = localStorage.getItem("jwt")
  const username = localStorage.getItem("username")
  if (token && username) {
    setAppUsername(username)
    setAppToken(token)
  }

  return (
    <Box as="main" minH="100vh" minW="100vw" className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/login" element={<LoginComponent />}></Route>
          <Route path="/register" element={<RegisterComponent />}></Route>
          <Route path="/" element={
            <CheckLoggedIn>
              <HomeComponent />
            </CheckLoggedIn>
          }>
            <Route path="project/:projectId" element={<ProjectComponent />} />
            <Route index element={<NoTaskSelectedComponent />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </Box>
  );
}

export default App;
