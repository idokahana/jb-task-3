import { NavLink } from "react-router-dom";
import "./Header.css";

export default function Header() {
  return (
    <div className="Header">
      <div>
        <nav>
          <NavLink to="/list">Products</NavLink>
          <NavLink to="/add">Add Product</NavLink>
        </nav>
      </div>
    </div>
  );
}
