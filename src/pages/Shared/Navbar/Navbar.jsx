import React from "react";
import { Logo } from "../../../components/logo/logo";
import { Link, NavLink } from "react-router";
import useAuth from "../../../hooks/useAuth";

const Navbar = () => {

const {user,logOut}=useAuth();


const handlelogOut=()=>{
  logOut()
  .then()
  .catch(err=>console.log(err));
}

  const links = (
    <>
      <li>
        <NavLink to={'/'}>Services</NavLink>
      </li>

      <li>
        <NavLink to={'/'}>About Us</NavLink>
      </li>
      <li>
        <NavLink to={'/covarage'}>Covarage</NavLink>
      </li>
    </>
  );
  return (
    <div>
      <div className="navbar bg-base-100 shadow-sm">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                {" "}
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />{" "}
              </svg>
            </div>
            <ul
              tabIndex="-1"
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
            >
              {links}
            </ul>
          </div>
          <NavLink to={"/"} className="btn btn-ghost text-xl">
            <Logo></Logo>
          </NavLink>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">{links}</ul>
        </div>
        <div className="navbar-end">
          {user ? (
            <a onClick={handlelogOut} className="btn">
              Log Out
            </a>
          ) : (
            <Link to={"/login"} className="btn">
              Login
            </Link>
          )}

          <Link to={"/beARider"} className=" mx-4 text-black btn btn-primary">
            Be a Rider
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
