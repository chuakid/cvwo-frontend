import LoginComponent from './components/Loggedout/LoginComponent';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Box } from '@chakra-ui/react';
import ProjectComponent from './components/LoggedIn/ProjectComponent';
import HomeComponent from './components/LoggedIn/HomeComponent';
import NoTaskSelectedComponent from './components/LoggedIn/NoProjectSelectedComponent';
import { useAppDispatch } from './store/typedHooks';
import { setJwt } from './store/jwtSlice';
import CheckLoggedIn from './components/CheckLoggedIn';
import { setAPIToken } from './services/api';

function App() {
  const dispatch = useAppDispatch()
  let token = localStorage.getItem("jwt")
  if (token) {
    dispatch(setJwt(token))
    setAPIToken(token)
  }

  return (
    <Box as="main" minH="100vh" minW="100vw" className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/login" element={<LoginComponent />}></Route>
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
