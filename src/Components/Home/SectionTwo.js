import React from 'react'
import GeneralButton from './../Uitily/GeneralButton';

export default function SectionTwo() {
    return (
        <div className='mx-auto max-w-2xl  py-8 px-4 sm:px-6 lg:px-8 sm:py-12 lg:max-w-7xl  max-lg:flex max-lg:justify-center flex-col'>
            <GeneralButton>Discover the best discounts and offers nears you</GeneralButton>
            <div className='mt-10 lg:w-3/4 max-lg:text-center'>
                <h2 className='   max-sm:text-4xl sm:text-6xl mb-10 '
                >Enjoy the art of purchasing
                    and saving!
                </h2>
                <p className=' text-xs  text-neutral-500 font-light max-w-lg'
                >Our user-friendly mobile app lets you find deals and Offers in-store and
                    promo codes to shop online with o sophisticated geo-location system.</p>
            </div>
        </div>
    )
}
