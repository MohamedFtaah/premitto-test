import React from 'react'

export default function CartTextSectionFive({ title, text }) {
    return (
        <div className=' bg-neutral-300 z-0 pt-1 hover:bg-gradient-to-r from-fuchsia-800  to-orange-400'>
            <div className='py-8 sm:py-12  hover:text-fuchsia-800 z-10 bg-white h-full'>
                <h3 className=' my-5 font-semibold text-2xl'>{title}</h3>
                <p className='  text-sm  text-neutral-500 font-light max-w-lg p-8  hover:text-fuchsia-800'
                >{text}
                </p>
            </div></div>
    )
}
