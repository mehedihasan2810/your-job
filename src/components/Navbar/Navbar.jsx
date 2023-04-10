import { Link } from "react-router-dom";
import "./Navbar.scss";

const Navbar = () => {
  return (
    <header>
     <div className="container-center">

      <h2>Your Job</h2>

      <div className="nav-container">
      <nav>
        <ul>
          <li>
            <Link to='/'>Home</Link>
          </li>
          <li>
            <Link to='/'>Statistics</Link>
          </li>
          <li>
            <Link to='/'>Applied Jobs</Link>
          </li>
          <li>
            <Link to='/'>Blog</Link>
          </li>
        </ul>
      </nav>

      <button>Start Applying</button>
      </div>

     </div>
    </header>
  );
};

export default Navbar;
