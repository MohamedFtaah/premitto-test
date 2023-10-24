import React from 'react'
import img from '../../imgs/mockup-1.jpeg'
import CardData from './../Uitily/CardOfData';
import CardImg from '../../imgs/Featured-icon-1.png'
import CardImg2 from '../../imgs/Featured-icon-2.png'
import CardImg3 from '../../imgs/Featured-icon-3.png'
import CardImg4 from '../../imgs/Featured-icon-4.png'
import CardImg5 from '../../imgs/Featured-icon-5.png'
import CardImg6 from '../../imgs/Featured-icon-6.png'
export default function SectionThree() {
    return (
        <div className='mx-auto max-w-2xl  py-8 px-4 sm:px-6 lg:px-8 sm:py-12 lg:max-w-7xl flex max-lg:flex-col-reverse '>
            <div style={{ flex: 2 }} className='grid grid-cols-2 gap-8  ' >
                <CardData title={'Restaurants & Cafes'} text={`'Get discounts and offers from your favorite restaurants & cafes! Let's enjoy the best experiences for your palate.`} CardImg={CardImg}></CardData>
                <CardData title={'Retail & Services'} text={`Be the first to discover and receive new offers on your favorite brands.Get the most out of your shopping!`} CardImg={CardImg2}></CardData>
                <CardData title={'Beauty & Wellness'} text={`Pamper and take care of yourself with special deals for spas, beauty salons, health, fitness and more.`} CardImg={CardImg3}></CardData>
                <CardData title={'Travel & Hotels'} text={`'The world is yours! Access deals and offers and get the best hotels and travel packages`} CardImg={CardImg4}></CardData>
                <CardData title={'Entertainment'} text={`'Get discounts and offers from yourfavorite restaurants & cafes! Let'senjoy the best experiences for yourpalate.`} CardImg={CardImg5}></CardData>
                <CardData title={'Online Shopping'} text={`Optimize the way you recover, train, and sleep with daily reporting on mobile and desktop apps. Start training smarter, not harder.`} CardImg={CardImg6}></CardData>

            </div>
            <div style={{ flex: 1 }}>
                <img src={img} className=' w-full overflow-hidden rounded-md  lg:aspect-none group-hover:opacity-75 max-lg:p-20 max-sm:p-0 ' ></img>

            </div>
        </div >
    )
}
