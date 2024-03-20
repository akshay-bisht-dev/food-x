import React, { useContext } from 'react'
import Card from '../components/Card'
import { Cart } from '../context/Context'

const Home = () => {
    const { dish, dishList, setDish } = useContext(Cart);
    return (
        <>
            <h1 className='uppercase text-center text-5xl my-4 font-bold'>Food-<span className='text-red-600'>X</span></h1>

            <div className='max-w-full mx-auto'>
                {/* <h2 className='font-bold text-3xl text-red-600 uppercase'>Trending <span className='text-black'>Dish</span></h2> */}
                <div className='grid grid-cols-3 gap-8 my-8'>
                    {
                        dishList.map((item) => {
                            return <Card item={item} dish={dish} setDish={setDish} key={item.idMeal} />
                        })
                    }
                </div>
            </div>
        </>
    )
}

export default Home