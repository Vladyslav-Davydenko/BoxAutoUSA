import './App.css'
import Main from './pages/Main/Main.jsx'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from './pages/Login/Login.jsx';
import Register from './pages/Register/Register.jsx';
import Goods from './pages/Goods/Goods.jsx';
import DetailedGood from './pages/DetailedGood/DetailedGood.jsx';

function App() {

  return (
  <BrowserRouter>
    <Routes>
      <Route path='/' element={<Main />} />
      <Route path='/login' element={<Login />} />
      <Route path='/register' element={<Register />} />
      <Route path='/cars' element={<Goods generatedData={"CARS"} />} />
      <Route path='/parts' element={<Goods generatedData={"PARTS"} />} />
      <Route path='/product/:id' element={<DetailedGood />} />
    </Routes>
  </BrowserRouter>

  )
}

export default App
