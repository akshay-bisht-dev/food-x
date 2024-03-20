import React from 'react'
import Header from './Header'
import Footer from './Footer'
import { Outlet } from 'react-router-dom'

const Common = () => {
    return (
        <div className='max-w-[1024px] mx-auto px-10'>
            <Header />
            <Outlet />
            <Footer />
        </div>
    )
}

export default Common