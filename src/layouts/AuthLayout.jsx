import React from 'react'
import { Logo } from '../components/logo/logo'
import { Outlet } from 'react-router'
import authImage from '../assets/authImage.png'
const AuthLayout = () => {
  return (
    <div>
        <Logo></Logo>
        <div>
            <div>
                <Outlet></Outlet>
            </div>
            <div>
                <img src={authImage} alt="" />
            </div>
        </div>
    </div>
  )
}

export default AuthLayout