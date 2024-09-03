import { Link, NavLink } from "react-router-dom";

function AppNav() {
  return (
    <nav>
      <ul>
        <li>
          <NavLink end to="/app">
            Home
          </NavLink>
        </li>
        <li>
          <NavLink to="posts">Posts</NavLink>
        </li>
        <li>
          <NavLink to="dashboard">dashboard</NavLink>
        </li>
        <li>
          <NavLink end to="login">
            Login
          </NavLink>
        </li>
      </ul>
    </nav>
  );
}
export default AppNav;
