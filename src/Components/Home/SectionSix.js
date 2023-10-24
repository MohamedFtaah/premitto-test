import React from 'react'
import PlacesSliderText from './../Uitily/PlacesSliderText';
import PlacesSlider from '../Uitily/PlacesSlider';
import img from '../../imgs/mobile comment.png'
import img2 from '../../imgs/app-store-white.png'
import img3 from '../../imgs/google-play-white.png'
export default function SectionSix() {
    return (
        <div className='mx-auto max-w-2xl   px-4 sm:px-6 lg:px-8  lg:max-w-7xl  '>
            <PlacesSliderText></PlacesSliderText>
            <PlacesSlider></PlacesSlider>



            <div className=' lg:w-full lg:h-96 bg-gradient-to-r from-fuchsia-800  to-orange-400 text-transparent my-48 rounded-2xl flex max-lg:flex-col-reverse'>
                <div className=' flex-1 flex items-center justify-center px-14 flex-col max-lg:m-5'>

                    <h2 style={{ color: '#ffffff57' }} className='    text-5xl mb-3 text-neutral-50'
                    >Enjoy the experience
                        of shopping more and

                        <span className=' text-white'> paying less!</span>

                    </h2>
                    <div className=' text-white flex w-full max-lg:m-5 '>
                        <img src={img2} className=' h-full overflow-hidden rounded-md  lg:aspect-none group-hover:opacity-75 mr-5' ></img>
                        <img src={img3} className=' h-full overflow-hidden rounded-md  lg:aspect-none group-hover:opacity-75 mr-auto' ></img>

                    </div>

                </div>
                <div className=' flex-1  pl-10'>
                    <img src={img} className=' h-full overflow-hidden rounded-md  lg:aspect-none group-hover:opacity-75 ' ></img>
                </div>
            </div>
        </div>
    )
}
