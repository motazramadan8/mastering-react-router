import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="navbar max-w-lg mx-auto mt-7 mb-20 app-navbar">
      <ul className="flex items-center justify-between">
        <li className="hover:bg-[#333A45] rounded-2xl duration-200">
          <NavLink className="px-3 py-2" to="/">
            Home
          </NavLink>
        </li>
        <li className="hover:bg-[#0a0e13] rounded-2xl duration-200">
          <NavLink className="px-3 py-2" to="/contact">
            Contact
          </NavLink>
        </li>
        <li className="hover:bg-[#333A45] rounded-2xl duration-200">
          <NavLink className="px-3 py-2" to="/about">
            About Us
          </NavLink>
        </li>
        <li className="hover:bg-[#333A45] rounded-2xl duration-200">
          <NavLink className="px-3 py-2" to="/learn">
            Learn
          </NavLink>
        </li>
        <li className="hover:bg-[#333A45] rounded-2xl duration-200">
          <NavLink className="px-3 py-2" to="/contribute">
            Contribute
          </NavLink>
        </li>
        <li className="hover:bg-[#333A45] rounded-2xl duration-200">
          <NavLink className="px-3 py-2" to="/login">
            Login
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
