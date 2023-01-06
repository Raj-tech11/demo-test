import "./Header.css";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className="header-container">
      <div className="header-test">
        <div className="logo-section">
          <img
            src="https://demo.smart-school.in/uploads/school_content/admin_logo/1.png"
            alt="text"
          />
        </div>
        <div className="link-section">
          <Link to="/home">
            <span>Home</span>
          </Link>
          <Link to="/about">
            <span>About</span>
          </Link>
          <Link to="/dashboard">
            <span>Dashboard</span>
          </Link>
          <Link to="/parent">
            <span>Parent</span>
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Header; // Ready for export
