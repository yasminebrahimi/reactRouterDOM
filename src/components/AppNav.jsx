import { Link, NavLink } from "react-router-dom";

function AppNav() {
  return (
<nav>
  <ul>
    <li>
      <NavLink to="/home">Home</NavLink>
    </li>
    <li>
      <NavLink to="/posts">Posts</NavLink>
    </li>
    <li>
      <NavLink to="/dashboard">Dashbord</NavLink>
    </li>
  </ul>
</nav>
  )
}

export default AppNav; 
