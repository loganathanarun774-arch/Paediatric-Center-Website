import React from 'react'

function button({ title }) {
    return (
        <div>
            <button className='bg-green-500 hover:bg-brightColor text-green font-semibold px-6 py-3 rounded-lg mt-3 w-full '>
                {title} 
            </button>
        </div>
    )
}

export default button