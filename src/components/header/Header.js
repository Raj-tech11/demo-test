import "./Header.css";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className="header-container">
      <div>
        <Link to="/home">Home</Link>
      </div>
      <div>
        <Link to="/about">About</Link>
      </div>
      <div>
        <Link to="/dashboard">Dashboard</Link>
      </div>
    </header>
  );
};

export default Header; // Ready for export
