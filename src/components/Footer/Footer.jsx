import { Link } from "react-router-dom";
import "./Footer.scss";

const Footer = () => {
  return (
    <footer>
      <div className="container-center">
        <div className="footer-first">
          <div>
            <h5>Your Job</h5>
            <p>
              There are many variations of passages of Lorem Ipsum , but the
              majority have suffered alteration in some form.
            </p>
            <img src="./assets/Icons/Group 9969.png" alt="social icons" />
          </div>

          <div>
            <h6>Company</h6>
            <Link className="link" to="/">
              About Us
            </Link>
            <Link className="link" to="/">
              Work
            </Link>
            <Link className="link" to="/">
              Latest News
            </Link>
            <Link className="link" to="/">
              Careers
            </Link>
          </div>

          <div>
            <h6>Product</h6>
            <Link to="/" className="link">
              Prototype
            </Link>
            <Link to="/" className="link">
              Plans & Pricing
            </Link>
            <Link to="/" className="link">
              Customers
            </Link>
            <Link to="/" className="link">
              Integrations
            </Link>
          </div>

          <div>
            <h6>Support</h6>
            <Link to="/" className="link">
              Help Desk
            </Link>
            <Link to="/" className="link">
              Sales
            </Link>
            <Link to="/" className="link">
              Become a Partner
            </Link>
            <Link to="/" className="link">
              Developers
            </Link>
          </div>

          <div>
            <h6>Contact</h6>
            <p>524 Broadway , NYC</p>
            <p>+1 777 - 978 - 5570</p>
          </div>
        </div>

        <hr />

        <div className="footer-end">
          <p>@2023 CareerHub. All Rights Reserved</p>
          <p>Powered by CareerHub</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
