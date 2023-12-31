import React, { useState } from 'react'

export default function GeneralButton({ textColor = 'white', children }) {

    return (
        <div className=' self-center'>
            <button style={{ color: textColor }} className=' px-5 py-3 rounded-3xl bg-gradient-to-r from-orange-400  to-fuchsia-800  shadow-2xl shadow-black hover:shadow-none'> {children}</button>
        </div>
    )
}