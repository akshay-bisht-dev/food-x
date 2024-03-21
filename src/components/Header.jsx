import React, { useContext, useState } from 'react'
import { NavLink } from 'react-router-dom'
import { Cart } from '../context/Context'
import { RiMenu2Line } from "react-icons/ri";

const Header = () => {
    const { dish } = useContext(Cart);
    const [toggle, setToggle] = useState(false);

    const toggleMenu = () => {
        setToggle(!toggle);
    }

    return (
        <nav className='px-4 max-w-full flex justify-between items-center h-[50px] mx-auto'>
            <NavLink to='/' className='text-2xl'>Food <span className='text-red-600 font-bold'>X</span></NavLink>

            <div className={toggle ? 'h-screen fixed left-0 right-0 top-0 bottom-0 z-10' : 'sm:block hidden'}>
                <ul className={toggle ? 'flex flex-col gap-4 h-screen justify-center items-center bg-black text-white' : 'flex gap-4'}>
                    <NavLink to='/' onClick={() => setToggle(!toggle)}>Home</NavLink>
                    <NavLink to='/products' onClick={() => setToggle(!toggle)}>Products</NavLink>
                    <NavLink to='/category' onClick={() => setToggle(!toggle)}>Category</NavLink>
                    <NavLink to='/cart' onClick={() => setToggle(!toggle)}>Cart <span>({dish.length})</span></NavLink>
                </ul>
            </div>

            <div className='sm:hidden block z-10 text-red-600 font-bold text-2xl' onClick={toggleMenu}>
                <RiMenu2Line />
            </div>
        </nav>
    )
}

export default Header