import LoginComponent from './components/Loggedout/LoginComponent';
import './App.css';
import { useState } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import HomeComponent from './components/LoggedIn/HomeComponent';
import CheckLoggedIn from './components/CheckLoggedIn';

function App() {
  const [loggedIn, setLoggedIn] = useState(false)


  return (
    <main className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<CheckLoggedIn isLoggedIn={loggedIn}>
            <HomeComponent />
          </CheckLoggedIn>}></Route>
          <Route path="/login" element={<LoginComponent setLoggedIn={setLoggedIn} />}></Route>
        </Routes>
      </BrowserRouter>
    </main>
  );
}

export default App;
