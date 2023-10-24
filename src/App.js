import { BrowserRouter, Route, Router, Routes } from 'react-router-dom';
import './App.css';
import HomePage from './pages/Home/HomePage';
import Navbar from './Components/Uitily/Navbar';
function App() {
  return (
    <div className=" ">
      <Navbar></Navbar>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<HomePage />} />
        </Routes>
      </BrowserRouter>


    </div>
  );
}

export default App;
