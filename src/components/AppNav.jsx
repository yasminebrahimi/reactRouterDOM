// Import the necessary components from the react-router-dom library
import { Link, NavLink } from "react-router-dom";

// Define the AppNav functional component
function AppNav() {
  return (
    <nav>
      <ul>
        <li>
          <NavLink end to="/app">
          Home</NavLink>
        </li>
        <li>
          <NavLink to="posts">Posts</NavLink>
        </li>
        <li>
          <NavLink to="dashboard">Dashboard</NavLink>
        </li>
      </ul>
    </nav>
  );
}


export default AppNav;

