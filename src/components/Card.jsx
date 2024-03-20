import React, { useContext } from 'react'
import { Cart } from '../context/Context'

const Card = ({ item }) => {
    const { dish, setDish } = useContext(Cart);
    return (
        <div>
            <img src={item.strMealThumb} alt={item.strMeal} className='w-full' />
            <div className='px-2'>
                <h4 className='font-bold my-2 text-red-600'>{item.strMeal.substr(0, 100)}...</h4>
                <p>{item.strInstructions.substr(0, 100)}...</p>
                <div className='mb-4'>
                    <p className='my-2'>Category: <span className='text-red-600 font-bold'>{item.strCategory}</span></p>
                    <p>Price: <span className='text-red-600 font-bold'>{item.idMeal}</span>$</p>
                </div>

                {
                    dish.includes(item) ? (
                        <button className='uppercase block w-full py-1 bg-red-600 text-center px-2 text-white' onClick={() => setDish(dish.filter((c) => c.idMeal !== item.idMeal))}>Remove to Cart</button>
                    ) : (
                        <button className='uppercase block w-full py-1 bg-black text-center px-2 text-white' onClick={() => setDish([...dish, item])}>Add to Cart</button>
                    )
                }
            </div>
        </div>
    )
}

export default Card