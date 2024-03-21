import React, { useContext, useEffect } from 'react'
import { Cart } from '../context/Context'
import axios from 'axios';
import { NavLink } from 'react-router-dom';

const Category = () => {
    const { API, dishList, setDishList } = useContext(Cart);

    const fetchData = (url) => {
        axios.get(url)
            .then((res) => {
                setDishList(res.data.categories);
            })
            .catch((err) => {
                console.log(err);
            });
    }

    useEffect(() => {
        fetchData(`${API}/categories.php`);
    }, []);

    useEffect(() => {
        document.title = 'Category';
    }, [])

    return (
        <div className='grid grid-cols-2 lg:grid-cols-4 sm:grid-cols-3 gap-6 my-8'>
            {
                dishList.map((item) => {
                    return (
                        <>
                            <NavLink to={`/product/${item.strCategory}`}>
                                <div key={item.idCategory} className='border border-red-500 rounded-lg'>
                                    <img src={item.strCategoryThumb} alt={item.strCategory} className='w-full' />
                                    <div className='px-2'>
                                        <h4 className='font-bold my-2 text-red-600'>{item.strCategory}</h4>
                                    </div>
                                </div>
                            </NavLink>
                        </>
                    )
                })
            }
        </div>
    )
}

export default Category