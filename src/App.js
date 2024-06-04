import React, { useState } from 'react';
import './App.css';
import { Routes, Route } from 'react-router-dom'
import SignUp from './authentication/SignUp';
import LogIn from "./authentication/LogIn"
import Main from './Components/Main/Main';

function App() {

  const [authPages, setauthPages] = useState(true)
  return (
    <>{authPages ? <Routes>
      <Route path='/' element={<SignUp />} />
      <Route path='/login' element={<LogIn setauthPages={setauthPages} />} />
    </Routes> : <Main />}</>

  );
}

export default App;
