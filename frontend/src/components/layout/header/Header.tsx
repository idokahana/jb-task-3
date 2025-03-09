import { NavLink } from "react-router-dom";
import "./Header.css";

export default function Header() {
  return (
    <div className="Header">
      <div>
        <nav>
          <NavLink to="/list">Meetings</NavLink>
          <NavLink to="/add">New Meeting</NavLink>
        </nav>
      </div>
    </div>
  );
}
