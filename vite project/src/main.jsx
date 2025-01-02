import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import About  from'./Components/FunctionalComponents/About.jsx'
import Home from './Components/FunctionalComponents/Home.jsx'
import NavBar from './Components/FunctionalComponents/NavBar.jsx'
import Contact from './Components/FunctionalComponents/Contact.jsx'
import App from './App.jsx';
import UseContext from './Components/FunctionalComponents/UseContext.jsx'
import UseState from './Components/FunctionalComponents/UseState.jsx'
import UseEffect from './Components/FunctionalComponents/UseEffect.jsx'
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <UseEffect/>
  </StrictMode>
)
