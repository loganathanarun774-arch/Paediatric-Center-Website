import React from 'react'
import Button from '../../Layouts/button.jsx'
function Contact({closeForm}) {
    return (
        <div className='fixed inset-0 flex items-center justify-center bg-transparent bg-opacity-50'>
            <div className='popup-form absolute mt-12 text-black'>
                <form className='w-80 md:w-96 space-y-5 bg-blue-50 p-5 rounded-xl'>
                    <h2 className='text-4xl font-semibold text-center'>Book Now </h2>
                    <div className='flex flex-col'>
                        <input
                            type="text"
                            name='userFirstName'
                            id='userFirstName'
                            placeholder='First Name'
                            className='py-3 px-2 bg-[#def2ec] rounded-lg'
                        />
                    </div>
                    <div className='flex flex-col'>
                        <input
                            type="text"
                            name='userLastName'
                            id='userLastName'
                            placeholder='Last Name'
                            className='py-3 px-2 bg-[#def2ec] rounded-lg'
                        />
                    </div>
                    <div className='flex flex-col'>
                        <input
                            type="email"
                            name='userEmail'
                            id='userEmail'
                            placeholder='Email Address'
                            className='py-3 px-2 bg-[#def2ec] rounded-lg'
                        />
                    </div>
                    <div className='flex flex-col'>
                        <input
                            type="Number"
                            name='userNumber'
                            id='userNumber'
                            placeholder='Phone Number'
                            className='py-3 px-2 bg-[#def2ec] rounded-lg'
                        />
                    </div>
                    <div className='flex gap-4 flex-col md:flex-row'>
                        <Button title='Appoinment' />
                        <button className='bg-yellow-500 hover:bg-brightColor text-green font-semibold px-6 py-3 rounded-lg mt-3 w-full' onClick={closeForm}>
                            Close
                        </button>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default Contact