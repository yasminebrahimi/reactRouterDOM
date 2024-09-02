import { Link } from "react-router-dom"

function Posts() {
  return (
    <div>
      <h1>Posts page</h1>
      <ul>
        <li>
          <Link to="1?category=free&type=blog">Post 1</Link>
        </li>
        <li>
          <Link to="/posts/2">Post 2</Link>
        </li>
        <li>
        <Link to="/posts/3">POst 3</Link>
        </li>
      </ul>
    </div>
  ); 
}

export default Posts; 
