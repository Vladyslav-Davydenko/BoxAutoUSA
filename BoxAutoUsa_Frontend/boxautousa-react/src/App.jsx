import Main from './components/Main/Main.jsx'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from './components/Login/Login.jsx';
import './App.css'
import Register from './components/Register/register.jsx';

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Main />}/>
        <Route path='/login' element={<Login />}/>
        <Route path='/register' element={<Register />}/>
      </Routes>
    </BrowserRouter>
  )
}

export default App
