import React from 'react'
import Card from '../components/Card'

const Products = () => {
    return (
        <div className='w-[1300px] mx-auto'>

            <div className='flex justify-center items-center gap-4'>
                <button className='px-4 uppercase py-1 text-white bg-red-600 border-red-600 border-2 rounded'>Veg</button>
                <button className='px-4 uppercase py-1 text-black bg-transparent border-red-600 border-2 rounded'>Non-Veg</button>
                <button className='px-4 uppercase py-1 text-black bg-transparent border-red-600 border-2 rounded'>Drinks</button>
                <button className='px-4 uppercase py-1 text-black bg-transparent border-red-600 border-2 rounded'>Snacks</button>
            </div>

            <div className='grid grid-cols-3 gap-8 my-8'>
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
            </div>
        </div>
    )
}

export default Products