import './App.css';
import { Route, Routes } from 'react-router-dom';
import Home from './pages/Home/Home';
import About from './pages/About/About';
import Login from './pages/Login/Login';
import ResponsiveAppBar from './components/Navbar/navbar';
import SignUp from './pages/SignUp/SignUp';
import Dashboard from './pages/Dashboard/Dashboard';
function App() {
  return (
    <>
      <ResponsiveAppBar />
      <Routes>
        <Route path='/' element={<Home />}
        />
        <Route path='/About' element={<About />} />
        <Route path='/login' element={<Login />} />
        <Route path='/signup' element={<SignUp />} />
        <Route path='/dashboard' element={<Dashboard />} />

      </Routes>
    </>
  );
}

export default App;
