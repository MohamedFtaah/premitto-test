import React from 'react'
import img from '../../imgs/mobile comment.png'
import img1 from '../../imgs/p1.png'
import img2 from '../../imgs/p2.png'
export default function SectionOne() {
  return (
    <div className='mx-auto max-w-2xl  py-8 px-4 sm:px-6 lg:px-8 sm:py-12 lg:max-w-7xl flex max-lg:flex-col-reverse'>
      <div style={{ flex: 2 }} className='sm:py-12 sm:px-6'>
        <h2 className='  max-sm:text-4xl sm:text-6xl mb-3'
        >Get the best deals and
          offers in your favorite
          <span className=' bg-gradient-to-r from-fuchsia-800  to-orange-400 text-transparent  bg-clip-text'> premium stores!</span>
        </h2>
        <p className=' text-xs  text-neutral-500 font-light max-w-lg'
        >Premitto is your best shopping ally, enjoy a whole year of discounts,
          new offers, and exclusive access to online promo codes for the top best
          products and services. Your options are endless!</p>
        <div className=' flex w-52'>
          <img src={img1} className=' w-full overflow-hidden rounded-md  lg:aspect-none group-hover:opacity-75  mr-3  ' ></img>
          <img src={img2} className=' w-full overflow-hidden rounded-md  lg:aspect-none group-hover:opacity-75  ' ></img>
        </div>
      </div>
      <div style={{ flex: 1 }} className=' '>
        <img src={img} className=' w-full overflow-hidden rounded-md  lg:aspect-none group-hover:opacity-75  lg:pr-12 ' ></img>
      </div>
    </div>

  )
}
