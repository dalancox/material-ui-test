import "./Nav.css";

import { Link } from "react-router-dom";

export default function Nav() {
  return (
    <>
      <div className="nav-wrapper">
        <ul>
          <Link to="/">
            <li>Home</li>
          </Link>
          <Link to="/customers">
            <li>Customer</li>
          </Link>
        </ul>
      </div>
    </>
  );
}
