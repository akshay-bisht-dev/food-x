import React, { useContext, useState } from 'react';
import { NavLink } from 'react-router-dom';
import { Cart } from '../context/Context';
import { RiMenu2Line } from 'react-icons/ri';

const Header = () => {
    const { dish } = useContext(Cart);
    const [toggle, setToggle] = useState(false);

    const toggleMenu = () => {
        setToggle(!toggle);
    };

    return (
        <nav className='px-4 max-w-full flex justify-between items-center h-[50px] mx-auto'>
            <NavLink to='/' className='text-2xl'>
                Food <span className='text-red-600 font-bold'>X</span>
            </NavLink>

            <div className='sm:flex hidden'>
                <ul className='flex gap-4'>
                    <NavLink to='/'>Home</NavLink>
                    <NavLink to='/products'>Products</NavLink>
                    <NavLink to='/category'>Category</NavLink>
                    <NavLink to='/cart'>Cart <span>({dish.length})</span></NavLink>
                </ul>
            </div>

            <div className='sm:hidden block z-50 text-red-600 font-bold text-2xl' onClick={toggleMenu}>
                <RiMenu2Line />
            </div>

            {toggle && (
                <div className='sm:hidden fixed inset-0 z-10 bg-black bg-opacity-95' onClick={toggleMenu}>
                    <div className='flex flex-col gap-4 h-full justify-center items-center text-white'>
                        <NavLink to='/' onClick={toggleMenu}>
                            Home
                        </NavLink>
                        <NavLink to='/products' onClick={toggleMenu}>
                            Products
                        </NavLink>
                        <NavLink to='/category' onClick={toggleMenu}>
                            Category
                        </NavLink>
                        <NavLink to='/cart' onClick={toggleMenu}>
                            Cart <span>({dish.length})</span>
                        </NavLink>
                    </div>
                </div>
            )}
        </nav>
    );
};

export default Header;
