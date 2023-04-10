import { Link } from "react-router-dom";
import "./Navbar.scss";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import { useState } from "react";

const Navbar = () => {
  const [isMenuOpen, setMenuOpen] = useState(false);

  return (
    <header>
      <div className="header-wrapper container-center">
        <h2>Your Job</h2>

        <div className={`nav-container ${isMenuOpen ? "open-menu" : ""}`}>
          <nav>
            <ul>
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/statistics">Statistics</Link>
              </li>
              <li>
                <Link to="/applied-jobs">Applied Jobs</Link>
              </li>
              <li>
                <Link to="/blog">Blog</Link>
              </li>
            </ul>
          </nav>

          <button className="btn-primary">Start Applying</button>
        </div>

        <button
          onClick={() => setMenuOpen(!isMenuOpen)}
          className="menu-btn"
          aria-label="menu bar"
        >
          {isMenuOpen ? (
            <CloseIcon className="menu-icon" />
          ) : (
            <MenuIcon className="menu-icon" />
          )}
        </button>
      </div>
    </header>
  );
};

export default Navbar;
