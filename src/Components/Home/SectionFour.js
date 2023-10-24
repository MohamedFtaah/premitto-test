import React from 'react'
import GeneralButton from '../Uitily/GeneralButton'
import img from '../../imgs/content.png'
export default function SectionFour() {
    return (
        <div className='mx-auto max-w-2xl  py-8 px-4 sm:px-6 lg:px-8 sm:py-12 lg:max-w-7xl flex justify-center text-center '>
            <div className='mt-10 w-1/2  text-center'>
                <GeneralButton >How it works</GeneralButton>

                <h2 style={{ lineHeight: '55px' }} className=' max-sm:text-3xl max-sm:font-bold   text-5xl my-5  '
                >
                    Amazing online offers
                    are waiting for you!
                </h2>
                <h3 className='mb-5 text-neutral-500 font-semibold'>In 3 simple steps, you can start saving!</h3>
                <p className=' text-xs  text-neutral-500 font-light mb-5 '
                >Log in to Premitto today and discover a unique way to save, with hundreds of in-
                    store deals and offers and online promo codes to enjoy the pleasure of shopping.</p>

                <img src={img} className=' w-full overflow-hidden rounded-md  lg:aspect-none group-hover:opacity-75   ' ></img>

            </div>
        </div>
    )
}
