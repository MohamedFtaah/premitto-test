import React from 'react'
import GeneralButton from './GeneralButton'

export default function PlacesSliderText() {
    return (
        <div className=' w-full'>
            <GeneralButton>Our Blog</GeneralButton>

            <div className=' flex justify-between w-full py-8'>
                <div className=' w-1/3'>
                    <h2 className=' sm:text-2xl  lg:text-4xl mb-3'>A 3600 tour with the best places for you!</h2>
                </div>
                <p className=' max-md:w-1/3 w-1/4 max-sm:text-xs  text-neutral-500 font-light'>
                    Discover trends and news about the
                    best restaurants, hotels. and
                    shopping places
                </p>
            </div>
        </div>
    )
}
