import { TiUserOutline } from "react-icons/ti";
import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <div className="navbar">
      <div className="logo">
        <Link to="/">
          <img src="/logo.jpg" alt="Clover Eyewear" />
        </Link>
      </div>

      <div className="login-button">
        <button className="text-base py-2 px-4">
          <TiUserOutline />
        </button>
      </div>
    </div>
  );
}
