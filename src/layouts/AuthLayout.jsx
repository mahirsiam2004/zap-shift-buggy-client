import React from 'react'
import { Logo } from '../components/logo/logo'
import { Link, Outlet } from 'react-router'
import authImage from '../assets/authImage.png'
const AuthLayout = () => {
  return (
    <div className="max-w-7xl mx-auto ">
      <Link to={'/'}>
        <Logo></Logo>
      </Link>

      <div className="flex items-center  h-full">
        <div className="flex-1">
          <Outlet></Outlet>
        </div>
        <div>
          <img src={authImage} alt="" />
        </div>
      </div>
    </div>
  );
}

export default AuthLayout