import { Routes, Route, Navigate } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './components/Home';
import About from './components/About';
import Booking from './components/Booking';
import Price from './components/Price';
import Service from './components/Service';
import Gallery from './components/Gallery';
import Blog from './components/Blog';
import Contact from './components/Contact';
import Login from './components/Login';
import SignUp from './components/Signup';
import Restaurant from './components/Service/Restaurant';
import Decoration from './components/Service/Decoration';
import Dish from './components/Service/Dish';
import Footer from './components/Footer';

const App = () => {
  const isAuthenticated = localStorage.getItem('user') !== null;

  const handleLogin = () => {
    localStorage.setItem('user', 'authenticated');
  };

  const handleLogout = () => {
    localStorage.removeItem('user');
  };

  return (
    <div>
      <Routes>
        {/* Route for the signup page */}
        <Route path='/signup' element={<SignUp onSignUp={handleLogin} />} />
        <Route path='/login' element={<Login onSignUp={handleLogin} />} />
        {/* Routes accessible only to authenticated users */}
        <Route path='/*' element={isAuthenticated ? <AuthenticatedRoutes onLogout={handleLogout} /> : <Navigate to='/signup' />} />
      </Routes>
    </div>
  );
};

const AuthenticatedRoutes = ({ onLogout }) => {
  return (
    <>
      <Navbar onLogout={onLogout} />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/' element={<Home/>}></Route>
            <Route path='/about' element={<About/>}></Route>
            <Route path='/booking' element={<Booking/>}></Route>
            <Route path='/pricing' element={<Price/>}></Route>
            <Route path='/service' element={<Service/>}></Route>
            <Route path='/blog' element={<Blog/>}></Route>
            <Route path='/gallery' element={<Gallery/>}></Route>
            <Route path='/contact' element={<Contact/>}></Route>
            <Route path='/restaurant' element={<Restaurant/>}></Route>
            <Route path='/decoration' element={<Decoration/>}></Route>
            <Route path='/dish' element={<Dish/>}></Route>
            <Route path='/footer' element={<Footer/>}></Route>
      </Routes>
    </>
  );
};

export default App;