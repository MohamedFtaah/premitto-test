import React from 'react'
import CartTextSectionFive from './../Uitily/CartTextSectionFive';

export default function SectionFive() {
    return (
        <div className='mx-auto max-w-2xl   px-4 sm:px-6 lg:px-8  lg:max-w-7xl  flex text-center max-sm:flex-col'>
            <CartTextSectionFive title={'Log in'} text={`Download the mobile app from the
            Apple store.Please enter your details,
            ap register, and get our exclusive one-
            year special discounts membership.`}></CartTextSectionFive>




            <CartTextSectionFive title={'Search for deals'} text={`Search for deals, use our deals and
            offers browser and filter according to
            your location, category, and
            preferences. A list of online offers will
            appear in a few seconds`}></CartTextSectionFive>


            <CartTextSectionFive title={'Save more'} text={`Save more! Select the deal you need,
            enter the amount to pay, and get a
            unique discount voucher. Enjoy a full
            year of discounts and offers`}></CartTextSectionFive>
        </div>
    )
}
