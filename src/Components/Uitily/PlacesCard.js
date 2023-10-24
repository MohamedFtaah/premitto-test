import React from 'react'

export default function placeCard({ place }) {
    return (
        <div>
            <div key={place.id} className="group relative  text-white max-sm:mx-2 sm:mx-8 lg:w-96 max-lg:w-52">
                <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-md lg:aspect-none group-hover:opacity-75 ">
                    <img
                        src={place.imageSrc}
                        alt={place.imageAlt}
                        className=" w-full object-cover object-center  lg:w-full"
                    />
                </div>
                <div className="mt-4 ">

                    <h3 className="text-sm text-fuchsia-800">
                        <a href={place.href}>
                            <span aria-hidden="true" className="absolute inset-0" />
                            {place.title1}
                        </a>
                    </h3>
                    <div>
                        <p className="mt-1 text-md text-black ">{place.title2}</p>
                    </div>
                    <p className="mt-1 text-sm font-medium text-gray-500">{place.title3}</p>
                </div>
            </div>
        </div >
    )
}
