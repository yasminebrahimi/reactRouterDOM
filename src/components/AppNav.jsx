// Import the necessary components from the react-router-dom library
import { Link, NavLink } from "react-router-dom";

// Define the AppNav functional component
function AppNav() {
  return (
    // Return a navigation bar (nav element)
    <nav>
      {/* Unordered list to hold the navigation links */}
      <ul>
        {/* List item for the Home link */}
        <li>
          {/* NavLink is used for navigation; the 'to' prop specifies the target route */}
          {/* NavLink adds an active class to the link when it's the current route */}
          <NavLink to="/home">Home</NavLink>
        </li>
        {/* List item for the Posts link */}
        <li>
          {/* NavLink for navigating to the Posts route */}
          <NavLink to="/posts">Posts</NavLink>
        </li>
        {/* List item for the Dashboard link */}
        <li>
          {/* NavLink for navigating to the Dashboard route */}
          {/* Note: There's a typo here in "Dashbord", it should be "Dashboard" */}
          <NavLink to="/dashboard">Dashboard</NavLink>
        </li>
      </ul>
    </nav>
  );
}

// Export the AppNav component as the default export of this module
export default AppNav;

