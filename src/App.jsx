
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import SignUp from './pages/SignUp';
import Profile from './pages/Profile';
import About from './pages/About';
import Signin from './pages/SignIn';


export default function App() {

  return (
  <BrowserRouter>
    <Routes>
      <Route path = '/' element = {<Home />} />
      <Route path = '/sign-up' element = {<SignUp />} />
      <Route path = '/sign-in' element = {<Signin />} />
      <Route path = '/profile' element = {<Profile />} />
      <Route path = '/about' element = {<About />} />
    </Routes>
  </BrowserRouter>)
}
