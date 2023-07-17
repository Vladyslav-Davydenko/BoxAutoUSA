import Main from './components/Main/Main.jsx'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from './components/Login/Login.jsx';
import './App.css'

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Main />}/>
        <Route path='/login' element={<Login />}/>
      </Routes>
    </BrowserRouter>
  )
}

export default App
