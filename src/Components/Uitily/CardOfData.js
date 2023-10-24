import React from 'react'

export default function CardData({ CardImg, title, text }) {
    return (
        <div className=' flex justify-start flex-col lg:pr-36 max-lg:items-center max-lg:text-center'>
            <img src={CardImg} className=' w-10 overflow-hidden rounded-md  lg:aspect-none group-hover:opacity-75 pb-5  ' ></img>
            <h3 className='pb-5' >{title}</h3>
            <p className=' text-xs  text-neutral-500 font-light max-w-lg'>{text}</p>
        </div>
    )
}
