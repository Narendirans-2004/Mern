import Home from './Components/FunctionalComponents/Home';
import Contact from './Components/FunctionalComponents/Contact';
import About from './Components/FunctionalComponents/About';
import NavBar from './Components/FunctionalComponents/NavBar';
import Login from './Components/FunctionalComponents/Login';
import SignUp from './Components/FunctionalComponents/SignUp';
import{BrowserRouter,Routes,Route} from 'react-router-dom';
var App=()=>{
  return(
  <BrowserRouter>
   <NavBar />
  <Routes>
    <Route path='/'element={<Home/>}/>
    <Route path='/about'element={<About/>}/>
    <Route path='/contact'element={<Contact/>}/>
    <Route path='/Login'element={<Login/>}/>
    <Route path='/SignUp'element={<SignUp/>}/>
  </Routes>
  </BrowserRouter>
  )
}
export default App;