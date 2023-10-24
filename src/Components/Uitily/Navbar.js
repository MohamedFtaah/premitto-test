import React, { useState } from 'react'
import logo from '../../imgs/1.png'
import { useNavigate } from 'react-router-dom'
export default function Navbar() {
    const [menu, setMenu] = useState('hidden')

    return (



        <div className=' items-center mx-auto max-w-2xl  py-6 px-4 sm:px-6 lg:px-8 lg:max-w-7xl flex justify-between max-sm:flex-col '>
            <div className=' flex justify-between max-sm:w-full'>
                <h1 className=' w-24' ><a href='/'><img src={logo} className=' cursor-pointer w-full overflow-hidden rounded-md  lg:aspect-none group-hover:opacity-75 ' ></img></a></h1>
                <button onClick={() => { menu === 'hidden' ? setMenu('flex') : setMenu('hidden') }}
                    className=' w-10 h-10 flex flex-col justify-around items-end hover:scale-105 sm:hidden'>
                    <span style={{ height: '2px' }} className=' bg-black  w-full '></span>
                    <span style={{ height: '2px' }} className=' bg-black w-full '></span>
                    <span style={{ height: '2px' }} className=' bg-black  w-full '></span>
                </button>
            </div>
            <div className={`${menu}  sm:ml-6 sm:flex justify-around w-full max-sm:flex-col`}>
                <ul className='  items-center flex sm:ml-6 max-sm:flex-col text-center   cursor-pointer'>

                    <li onClick={() => { }} className='max-sm:py-3 px-6 text-xs hover:font-medium'><a href='/puy'>Buy</a></li>

                    <li className='max-sm:py-3 px-6 text-xs hover:font-medium'>Discover Deals</li>
                    <li className='max-sm:py-3 px-6 text-xs hover:font-medium'>How it Works</li>
                    <li className='max-sm:py-3 px-6 text-xs hover:font-medium '>For partners</li>
                    <li className='max-sm:py-3 px-6 text-xs hover:font-medium'>Blog</li>
                </ul>
                <button className=' text-white  text-sm px-3 rounded-md py-2' style={{ backgroundColor: '#861889' }}>Become a partner</button>
            </div>
        </div >
    )
}
