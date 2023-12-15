import React from 'react'
import Search from '../components/Search'
import Card from '../components/Card'

const Home = () => {
    return (
        <>
            <h1 className='uppercase text-center text-5xl my-4 font-bold'>Food-<span className='text-red-600'>X</span></h1>

            <Search />

            <div className='w-[1300px] mx-auto'>
                <h2 className='font-bold text-3xl text-red-600 uppercase'>Trending <span className='text-black'>Dish</span></h2>
                <div className='grid grid-cols-3 gap-8 my-4'>
                    <Card />
                    <Card />
                    <Card />
                </div>
            </div>
        </>
    )
}

export default Home