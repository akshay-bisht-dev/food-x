import React from 'react'
import main from '../assets/main.jpg'

const Card = () => {
    return (
        <div>
            <img src={main} alt="main" />
            <div className='px-2'>
                <h4 className='font-bold my-2 text-red-600'>Lorem ipsum dolor sit.</h4>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. In atque iure nihil asperiores quas ipsum minus illum necessitatibus harum amet!</p>
                <div className='flex justify-between items-center'>
                    <p className='mt-2'>⭐ <span className='text-red-600 font-bold'>4.5</span></p>
                    <p><span className='text-red-600 font-bold text-3xl'>150</span>$</p>
                </div>
                <button className='uppercase py-1 bg-red-600 w-max my-4 px-2 text-white'>Add to Cart</button>
            </div>
        </div>
    )
}

export default Card