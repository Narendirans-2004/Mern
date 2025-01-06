import '../../assets/CSS/NavBar.css';
import{Link} from 'react-router-dom'
// Define NavBar component
const NavBar = () => {
  return (
    <header>
      <nav>
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/About">About</Link></li>
          <li><Link to="/contact">Contact</Link></li>
          <li><Link to="/Login">Login</Link></li>
          <li><Link to="/SignUp">SignUp</Link></li>
        </ul>
      </nav>
    </header>
  );
};

export default NavBar;
