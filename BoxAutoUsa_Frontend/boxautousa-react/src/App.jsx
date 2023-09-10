import './App.css'
import Main from './components/Main/Main.jsx'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from './components/Login/Login.jsx';
import Register from './components/Register/register.jsx';
import Goods from './components/Goods/Goods.jsx';
import DetailedGood from './components/Goods/DetailedGood/DetailedGood';

function App() {

  return (
  <BrowserRouter>
    <Routes>
      <Route path='/' element={<Main />} />
      <Route path='/login' element={<Login />} />
      <Route path='/register' element={<Register />} />
      <Route path='/cars' element={<Goods data={"CARS"} />} />
      <Route path='/parts' element={<Goods data={"PARTS"} />} />
      <Route path='/product/:id' element={<DetailedGood />} />
    </Routes>
  </BrowserRouter>

  )
}

export default App
