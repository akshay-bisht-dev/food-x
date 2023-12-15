import React from 'react'
import logo from '../assets/logo.jpg'
import { NavLink } from 'react-router-dom'

const Header = () => {
    return (
        <nav className='px-4 w-[1300px] flex justify-between items-center h-[50px] mx-auto'>
            <div><img src={logo} height={50} width={50} alt='logo' /></div>

            <div>
                <ul className='flex gap-4'>
                    <NavLink to='/'>Home</NavLink>
                    <NavLink to='/products'>Products</NavLink>
                    <NavLink to='/'>Category</NavLink>
                    <NavLink to='/cart'>Cart <span>(0)</span></NavLink>
                </ul>
            </div>
        </nav>
    )
}

export default Header