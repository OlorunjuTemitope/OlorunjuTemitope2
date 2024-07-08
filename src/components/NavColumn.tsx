import { FunctionComponent } from "react";
import "./NavColumn.css";

export type NavColumnType = {
  className?: string;
};

const NavColumn: FunctionComponent<NavColumnType> = ({ className = "" }) => {
  return (
    <header className={`nav-column ${className}`}>
      <div className="nav-row">
        <div className="nav-item-container">
          <a className="techtrove">TechTrove</a>
        </div>
        <div className="nav-spacer">
          <div className="nav-links">
            <div className="links-column">
              <a className="home">Home</a>
            </div>
            <div className="links-column1">
              <a className="shop">Shop</a>
            </div>
            <div className="links-column2">
              <a className="contact-us">Contact Us</a>
            </div>
          </div>
          <div className="main-content-parent">
            <div className="main-content">
              <img
                className="hero-image-icon"
                loading="lazy"
                alt=""
                src="/vector.svg"
              />
            </div>
            <div className="hero-description-wrapper">
              <div className="hero-description">
                <a className="sign-in">Sign In</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default NavColumn;
