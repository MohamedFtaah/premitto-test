import React from 'react'
import GeneralButton from '../../Components/Uitily/GeneralButton'
import CircleCheck from '../../Components/Uitily/CircleCheck'

export default function PuyPage() {
    return (
        <div className='mx-auto max-w-2xl  py-8 px-4 sm:px-6 lg:px-8 sm:py-12 lg:max-w-7xl flex flex-col justify-center items-center text-center'>
            <GeneralButton>DO more and spend less</GeneralButton>
            <h2 className='   max-lg:text-3xl lg:text-6xl my-8 w-1/2'
            >You'll wonder how you


                <span className=' bg-gradient-to-r from-fuchsia-800  to-orange-400 text-transparent  bg-clip-text'> lived without it </span>
            </h2>

            <div className=' max-lg:px-8 lg:px-24 py-5 border-2 border-neutral-700 rounded-2xl'>
                <div className=' flex flex-col max-lg:p-8 lg:p-16 max-lg:px-16 lg:px-28 border-b-2 border-neutral-600'>
                    <h className='max-lg:text-3xl lg:text-6xl mb-5'>79 SAR<span className=' text-base text-neutral-500 '>/month</span></h>
                    <p > 1 Year premium membership</p>
                </div>
                <div>
                    <ul className=' text-start max-lg:text-base lg:text-xl'>
                        <li className='my-5 flex items-center'><CircleCheck></CircleCheck> Includes hundreds of offers across six
                            categories</li>
                        <li className='my-5 flex items-center'><CircleCheck></CircleCheck>Unlimited offer usage for the full
                            subscription period</li>
                        <li className='my-5 flex items-center'> <CircleCheck></CircleCheck>Valid for 365 days from the date of
                            purchase</li>
                        <li className='my-5 flex items-center'><CircleCheck></CircleCheck>Includes offers in all the cities in Saudi
                            Arabia</li>
                    </ul>
                    <button className=' w-full bg-fuchsia-800 p-4 rounded-xl mt-6'>Get started</button>
                </div>

            </div>

        </div>
    )
}
