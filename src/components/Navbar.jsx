import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav
      style={{
        display: "flex",
        justifyContent: "space-around",
        alignItems: "center",
        padding: "15px",
        backgroundColor: "#333",
        color: "white",
      }}
    >
      <h2>My Company</h2>
      <div>
        <Link to="/" style={{ margin: "0 10px", color: "white" }}>
          Home
        </Link>
        <Link to="/about" style={{ margin: "0 10px", color: "white" }}>
          About
        </Link>
        <Link to="/services" style={{ margin: "0 10px", color: "white" }}>
          Services
        </Link>
        <Link to="/contact" style={{ margin: "0 10px", color: "white" }}>
          Contact
        </Link>
      </div>
    </nav>
  );
}

export default Navbar;
