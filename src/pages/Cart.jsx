import React, { useContext, useEffect, useState } from 'react';
import { Cart } from '../context/Context';

const CartPage = () => {
    const { dish, setDish } = useContext(Cart);
    const [total, setTotal] = useState(0);

    useEffect(() => {
        const calculateTotal = () => {
            const totalPrice = dish.reduce((acc, curr) => {
                return acc + Number(curr.idMeal);
            }, 0);
            setTotal(totalPrice);
        };
        calculateTotal();
    }, [dish]);

    useEffect(() => {
        document.title = 'Checkout';
    }, []);

    return (
        <>
            <div className='max-w-full mx-auto'>
                <h1 className='text-3xl font-semibold mt-4 uppercase text-black'>All <span className='text-red-600'>Cart</span> Items</h1>

                <div className='grid sm:grid-cols-4 grid-cols-1 gap-0 sm:gap-4 w-full'>
                    <div className='col-span-3'>
                        {dish.length === 0 ? (
                            <p className='text-center text-2xl my-8'>No items in the cart</p>
                        ) : (
                            dish.map((item) => (
                                <div key={item.idMeal} className='flex gap-4 shadow-md my-4 py-4'>
                                    <img src={item.strMealThumb} alt='cart' width={100} />

                                    <div className='flex justify-between items-center w-full'>
                                        <div>
                                            <h2 className='text-2xl text-red-600 font-bold'>{item.strMeal.substr(0, 100)}</h2>
                                            <h2>{item.strCategory}</h2>
                                            <p>Price : <span className='text-red-600 font-bold'>{item.idMeal}</span>$</p>
                                        </div>
                                        <div>
                                            <button className='uppercase py-1 bg-red-600 w-max my-4 px-2 text-white' onClick={() => setDish(dish.filter((e) => e.idMeal !== item.idMeal))}>Remove</button>
                                        </div>
                                    </div>
                                </div>
                            ))
                        )}
                    </div>

                    <div className='flex flex-col gap-2 items-start relative mb-4'>
                        <div className='sticky top-4 bottom-4 w-full'>
                            <h2 className='text-center py-2 bg-green-600 uppercase'>Checkout</h2>

                            <p className='text-black mt-4'>Quatity: <span className='text-red-600 font-bold'>{dish.length}</span> Items</p>
                            <p className='text-black text-left my-4'>Total: <span className='text-red-600 font-bold'>{total}</span>$</p>

                            <button className='w-full bg-red-600 py-4 uppercase text-white hover:bg-black hover:text-white'>Proceed to Pay</button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default CartPage;
