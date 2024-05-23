// import logo from './logo.svg';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import NavBar from './Components/NavBar';
import Home from './Components/Home';
import Signup from './Components/Signup';
import AuthProvider from './Components/auth';
import Footer from './Components/Footer';
import Signin from './Components/Signin';
import OurDoctors from './Components/OurDoctors';
import ContactUs from './Components/ContactUs';
import NavBar1 from './Components/Navbar1';

function App() {
  return (
    <div className="App">
      <AuthProvider>
        <NavBar1/>
      <NavBar/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/OurDoctors' element={<OurDoctors/>}/>
        <Route path='/ContactUs' element={<ContactUs/>}/>
        <Route path='/Signup' element={<Signup/>}/>
        <Route path='/Signin' element={<Signin/>}/>
      </Routes>
      <Footer/>
      </AuthProvider>
    </div>
  );
}

export default App;
