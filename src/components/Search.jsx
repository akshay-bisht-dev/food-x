import React, { useContext, useEffect, useState } from 'react'
import { Cart } from '../context/Context'
import axios from 'axios';
import Card from './Card';

const Search = () => {
    const [query, setQuery] = useState([]);
    const [newQuery, setNewQuery] = useState([]);
    const { API } = useContext(Cart);

    const fetchData = (url) => {
        axios.post(url).then((res) => {
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
        <section className="relative mx-auto w-[500px] my-2">
            <form action="" onSubmit={(e) => e.preventDefault()}>
                <input type="text" onChange={(e) => setQuery(e.target.value)} value={query} placeholder='Enter Your Dish' className='p-2 bg-slate-200 w-full outline-0 border-0' /><button className='uppercase py-2 bg-red-600 w-max absolute right-0 px-2 text-white' type='submit'>Submit</button>
            </form>





            <div className='max-w-full mx-auto'>
                {/* <h2 className='font-bold text-3xl text-red-600 uppercase'>Trending <span className='text-black'>Dish</span></h2> */}
                <div className='grid grid-cols-3 gap-8 my-8'>
                    {
                        newQuery.map((item) => {
                            return <Card item={item} dish={dish} setDish={setDish} key={item.idMeal} />
                        })
                    }
                </div>
            </div>
        </section>


    )
}

export default Search