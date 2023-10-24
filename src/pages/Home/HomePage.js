import React from 'react'
import SectionOne from '../../Components/Home/SectionOne'
import SectionTwo from '../../Components/Home/SectionTwo'
import SectionThree from './../../Components/Home/SectionThree';
import SectionFour from './../../Components/Home/SectionFour';

export default function HomePage() {
    return (
        <div className=' w-full '>
            <SectionOne></SectionOne>
            <SectionTwo></SectionTwo>
            <SectionThree></SectionThree>
            <SectionFour></SectionFour>
        </div>
    )
}
