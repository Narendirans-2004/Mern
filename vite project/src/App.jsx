import Home from './Components/FunctionalComponents/Home';
import Contact from './Components/FunctionalComponents/Contact';
import About from './Components/FunctionalComponents/About';
import NavBar from './Components/FunctionalComponents/NavBar';
import{BrowserRouter,Routes,Route} from 'react-router-dom';
var App=()=>{
  return(
  <BrowserRouter>
   <NavBar />
  <Routes>
    <Route path='/'element={<Home/>}/>
    <Route path='/about'element={<About/>}/>
    <Route path='/contact'element={<Contact/>}/>
  </Routes>
  </BrowserRouter>
  )
}
export default App;