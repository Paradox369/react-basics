import { Link } from "react-router-dom";

const NavNar = () => {
  return (
    <nav className="navbar">
      <h1>the dojo blog</h1>

      <div className="links">
        <Link to="/">home</Link>
        <Link to="/create">new blog</Link>
        <Link to="/blogs">blogs</Link>
      </div>
    </nav>
  );
};

export default NavNar;
