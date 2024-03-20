import React, { useContext } from 'react'
import logo from '../assets/logo.jpg'
import { NavLink } from 'react-router-dom'
import { Cart } from '../context/Context'

const Header = () => {
    const { dish } = useContext(Cart);
    return (
        <nav className='px-4 max-w-full flex justify-between items-center h-[50px] mx-auto'>
            <div><img src={logo} height={50} width={50} alt='logo' /></div>

            <div>
                <ul className='flex gap-4'>
                    <NavLink to='/'>Home</NavLink>
                    <NavLink to='/products'>Products</NavLink>
                    <NavLink to='/category'>Category</NavLink>
                    <NavLink to='/cart'>Cart <span>({dish.length})</span></NavLink>
                </ul>
            </div>
        </nav>
    )
}

export default Header