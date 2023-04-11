import { Link, NavLink } from "react-router-dom";
import "./Navbar.scss";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import { useState } from "react";

const Navbar = () => {
  const [isMenuOpen, setMenuOpen] = useState(false);

  return (
    <header>
      <div className="header-wrapper container-center">
        <Link to="/">
          <h2>
            Your <span className="logo-gradient">Job</span>
          </h2>
        </Link>

        <div className={`nav-container ${isMenuOpen ? "open-menu" : ""}`}>
          <nav>
            <ul>
              <li>
                <NavLink
                  className={({ isActive, isPending }) =>
                    isActive ? "active" : isPending ? "pending" : ""
                  }
                  to="/"
                >
                  Home
                </NavLink>
              </li>
              <li>
                <NavLink to="/statistics">Statistics</NavLink>
              </li>
              <li>
                <NavLink to="/applied-jobs">Applied Jobs</NavLink>
              </li>
              <li>
                <NavLink to="/blog">Blog</NavLink>
              </li>
            </ul>
          </nav>
          <a href="#apply">
            <button className="btn-primary">Start Applying</button>
          </a>
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
