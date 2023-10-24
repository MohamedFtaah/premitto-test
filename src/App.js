import { BrowserRouter, Route, Router, Routes } from 'react-router-dom';
import './App.css';
import HomePage from './pages/Home/HomePage';
import Navbar from './Components/Uitily/Navbar';
import Footer from './Components/Uitily/Footer';
import PuyPage from './pages/Puy/PuyPage';
function App() {
  return (
    <div className=" ">
      <Navbar></Navbar>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<HomePage />} />
          <Route path='/puy' element={<PuyPage />} />
        </Routes>
      </BrowserRouter>
      <Footer></Footer>

    </div>
  );
}

export default App;
