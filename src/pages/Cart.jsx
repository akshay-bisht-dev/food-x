import React from 'react'
import item from '../assets/logo.jpg'

const Cart = () => {
    return (
        <>
            <div className='w-[1300px] mx-auto'>
                <h1 className='text-3xl font-semibold mt-4 uppercase text-black'>All <span className='text-red-600'>Cart</span> Items</h1>

                <div className='grid grid-cols-4 gap-4'>
                    <div className='col-span-3'>
                        <div className='flex gap-4 shadow-md my-4 py-4'>
                            <img src={item} alt='cart' width={100} />

                            <div className='flex justify-between items-center w-full'>
                                <div>
                                    <h2>Lorem ipsum dolor sit.</h2>
                                    <p>Price : <span>150</span>$</p>
                                    <p>Qunatity : <span><button className='bg-red-600 text-white py-1 px-2 cursor-pointer'>+</button><input type="number" name="number" id="number" value={1} className='w-[20px] text-center appearance-none' /> <button className='bg-red-600 text-white py-1 px-2 cursor-pointer'>-</button></span></p>
                                </div>
                                <div>
                                    <button className='uppercase py-1 bg-red-600 w-max my-4 px-2 text-white'>Remove</button>
                                </div>
                            </div>
                        </div>


                        <div className='flex gap-4 shadow-md my-4 py-4'>
                            <img src={item} alt='cart' width={100} />

                            <div className='flex justify-between items-center w-full'>
                                <div>
                                    <h2>Lorem ipsum dolor sit.</h2>
                                    <p>Price : <span>150</span>$</p>
                                    <p>Qunatity : <span><button className='bg-red-600 text-white py-1 px-2 cursor-pointer'>+</button><input type="number" name="number" id="number" value={1} className='w-[20px] text-center appearance-none' /> <button className='bg-red-600 text-white py-1 px-2 cursor-pointer'>-</button></span></p>
                                </div>
                                <div>
                                    <button className='uppercase py-1 bg-red-600 w-max my-4 px-2 text-white'>Remove</button>
                                </div>
                            </div>
                        </div>



                        <div className='flex gap-4 shadow-md my-4 py-4'>
                            <img src={item} alt='cart' width={100} />

                            <div className='flex justify-between items-center w-full'>
                                <div>
                                    <h2>Lorem ipsum dolor sit.</h2>
                                    <p>Price : <span>150</span>$</p>
                                    <p>Qunatity : <span><button className='bg-red-600 text-white py-1 px-2 cursor-pointer'>+</button><input type="number" name="number" id="number" value={1} className='w-[20px] text-center appearance-none' /> <button className='bg-red-600 text-white py-1 px-2 cursor-pointer'>-</button></span></p>
                                </div>
                                <div>
                                    <button className='uppercase py-1 bg-red-600 w-max my-4 px-2 text-white'>Remove</button>
                                </div>
                            </div>
                        </div>




                        <div className='flex gap-4 shadow-md my-4 py-4'>
                            <img src={item} alt='cart' width={100} />

                            <div className='flex justify-between items-center w-full'>
                                <div>
                                    <h2>Lorem ipsum dolor sit.</h2>
                                    <p>Price : <span>150</span>$</p>
                                    <p>Qunatity : <span><button className='bg-red-600 text-white py-1 px-2 cursor-pointer'>+</button><input type="number" name="number" id="number" value={1} className='w-[20px] text-center appearance-none' /> <button className='bg-red-600 text-white py-1 px-2 cursor-pointer'>-</button></span></p>
                                </div>
                                <div>
                                    <button className='uppercase py-1 bg-red-600 w-max my-4 px-2 text-white'>Remove</button>
                                </div>
                            </div>
                        </div>





                        <div className='flex gap-4 shadow-md my-4 py-4'>
                            <img src={item} alt='cart' width={100} />

                            <div className='flex justify-between items-center w-full'>
                                <div>
                                    <h2>Lorem ipsum dolor sit.</h2>
                                    <p>Price : <span>150</span>$</p>
                                    <p>Qunatity : <span><button className='bg-red-600 text-white py-1 px-2 cursor-pointer'>+</button><input type="number" name="number" id="number" value={1} className='w-[20px] text-center appearance-none' /> <button className='bg-red-600 text-white py-1 px-2 cursor-pointer'>-</button></span></p>
                                </div>
                                <div>
                                    <button className='uppercase py-1 bg-red-600 w-max my-4 px-2 text-white'>Remove</button>
                                </div>
                            </div>
                        </div>





                        <div className='flex gap-4 shadow-md my-4 py-4'>
                            <img src={item} alt='cart' width={100} />

                            <div className='flex justify-between items-center w-full'>
                                <div>
                                    <h2>Lorem ipsum dolor sit.</h2>
                                    <p>Price : <span>150</span>$</p>
                                    <p>Qunatity : <span><button className='bg-red-600 text-white py-1 px-2 cursor-pointer'>+</button><input type="number" name="number" id="number" value={1} className='w-[20px] text-center appearance-none' /> <button className='bg-red-600 text-white py-1 px-2 cursor-pointer'>-</button></span></p>
                                </div>
                                <div>
                                    <button className='uppercase py-1 bg-red-600 w-max my-4 px-2 text-white'>Remove</button>
                                </div>
                            </div>
                        </div>




                    </div>



                    <div className='flex flex-col gap-2 items-start relative'>
                        <div className='sticky top-4 bottom-4 w-full'>
                            <h2 className='text-center py-2 bg-green-600 uppercase'>Checkout</h2>

                            <p className='text-black'>Quatity: <span className='text-red-600 font-bold'>14</span> Items</p>
                            <p className='text-black'>Sub Total: <span className='text-red-600 font-bold'>4500</span>$</p>
                            <p className='text-black text-right'>Total: <span className='text-red-600 font-bold'>5000</span>$</p>

                            <button className='w-full bg-red-600 py-4 uppercase text-white hover:bg-black hover:text-white'>Proceed to Pay</button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Cart