import React, { useState } from 'react'
import PlacesCard from './PlacesCard';
import img1 from '../../imgs/logo-image.png'
import img2 from '../../imgs/logo-image-2.png'
import img3 from '../../imgs/logo-image-3.png'
import img4 from '../../imgs/logo-image-4.png'

const places = [
    {
        id: 1,
        title1: 'Olivia Rhye • 20 Jan 2022',
        href: '#',
        imageSrc: img1,
        imageAlt: "",
        title3: `Like to know the secrets of transforming a 2-14 team into a 3x Super Bowl winning Dynasty?`,
        title2: 'Blog Title goes here',
    }, {
        id: 2,
        title1: 'Phoenix Baker • 19 Jan 2022',
        href: '#',
        imageSrc: img2,
        imageAlt: "",
        title3: `Linear helps streamline software projects, sprints,tasks`,
        title2: 'Blog Title goes here',
    }, {
        id: 3,
        title1: 'ec Whitten • 17 Jan 2022',
        href: '#',
        imageSrc: img3,
        imageAlt: "",
        title3: `The rise of RESTful APIs has been met by a rise in tools for creating, testing, and managing them.`,
        title2: 'Blog Title goes here',
    }, {
        id: 4,
        title1: 'Olivia Rhye • 20 Jan 2022',
        href: '#',
        imageSrc: img4,
        imageAlt: "",
        title3: `Like to know the secrets of transforming a 2-14 team into a 3x Super Bowl winning Dynasty?`,
        title2: 'Blog Title goes here',
    },
]
export default function PlacesSlider() {
    const [slid, setSlid] = useState(0)
    return (
        <div>
            <div className=' relative overflow-hidden h-96 mt-24 mb-14 w-full '>
                <div style={{ left: `-${slid}%` }} className=' flex absolute duration-500'>
                    {places.map((place) => (
                        <PlacesCard place={place}></PlacesCard>
                    ))}
                </div>

            </div>
            <div className=' flex max-sm:justify-center'>
                <span onClick={() => { slid < 0 ? setSlid(100) : setSlid(slid - 25) }} className=' p-5 rounded-full border border-black mr-2 cursor-pointer'>
                    <svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 448 512"><path d="M9.4 233.4c-12.5 12.5-12.5 32.8 0 45.3l160 160c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L109.2 288 416 288c17.7 0 32-14.3 32-32s-14.3-32-32-32l-306.7 0L214.6 118.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0l-160 160z" /></svg>
                </span>
                <span onClick={() => { slid >= 100 ? setSlid(0) : setSlid(slid + 25) }} className=' p-5 rounded-full border border-black ml-2 cursor-pointer'>
                    <svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 448 512"><path d="M438.6 278.6c12.5-12.5 12.5-32.8 0-45.3l-160-160c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L338.8 224 32 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l306.7 0L233.4 393.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l160-160z" /></svg>
                </span>
            </div>
        </div>
    )
}
