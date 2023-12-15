import React from 'react'

const Search = () => {
    return (
        <section className="relative mx-auto w-[500px] my-2">
            <input type="text" placeholder='Enter Your Dish' className='p-2 bg-slate-200 w-full outline-0 border-0' /><button className='uppercase py-2 bg-red-600 w-max absolute right-0 px-2 text-white'>Submit</button>
        </section>
    )
}

export default Search