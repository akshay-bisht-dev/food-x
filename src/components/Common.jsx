import React from 'react'
import Header from './Header'
import Footer from './Footer'
import { Outlet } from 'react-router-dom'

const Common = () => {
    return (
        <div className='max-w-[1024px] mx-auto  sm:px-10 px-[10px]'>
            <Header />
            <Outlet />
            <Footer />
        </div>
    )
}

export default Common