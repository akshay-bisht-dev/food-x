import React, { useContext, useEffect, useState } from 'react'
// import Search from '../components/Search'
import { Cart } from '../context/Context';
import axios from 'axios';

const Products = () => {

    const [query, setQuery] = useState([]);
    const [newQuery, setNewQuery] = useState([]);
    const { API, setDish, dish } = useContext(Cart);

    const fetchData = (url) => {
        axios.get(url).then((res) => {
            setNewQuery(res.data.meals);
            console.log(res.data.meals);
        }).catch((err) => {
            console.log(err);
        });
    }

    useEffect(() => {
        fetchData(`${API}/search.php?s=${query}`);
    }, [query]);


    return (
        <>
            <h1 className='uppercase text-center text-5xl my-4 font-bold'>All <span className='text-red-600'>Dishes</span></h1>

            {/* <Search /> */}
            <section className="relative mx-auto w-[500px] my-2">
                <form action="" onSubmit={(e) => e.preventDefault()}>
                    <input type="text" onChange={(e) => setQuery(e.target.value)} value={query} placeholder='Enter Your Dish' className='p-2 bg-slate-200 w-full outline-0 border-0' /><button className='uppercase py-2 bg-red-600 w-max absolute right-0 px-2 text-white' type='submit'>Submit</button>
                </form>
            </section>

            <div className='max-w-full mx-auto'>
                <div className='grid grid-cols-3 gap-8 my-8'>
                    {
                        newQuery.map((item) => {
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
                        })
                    }
                </div>
            </div>
        </>
    )
}

export default Products