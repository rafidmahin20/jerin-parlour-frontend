import { Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './Pages/Home/Home';
import ServicePage from './Pages/Services/ServicePage';
import Footer from './Pages/Shared/Footer/Footer';
import Header from './Pages/Shared/Header/Header';
import Login from './Pages/Shared/Login/Login';

function App() {
  return (
    <div>
      <Header></Header>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/ourproducts' element={<ServicePage/>}/>
        <Route path='/login' element={<Login/>}/>
      </Routes>
      <Footer></Footer>
    </div>
  );
}

export default App;
