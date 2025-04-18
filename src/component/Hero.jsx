import React from 'react'
import Gaumata from '../assets/image/gaumata.jpg'
import Form from './Form'
const Section = () => {
    return (
        <>
            <Form />
            <div className='flex justify-center items-center'>
                <div>
                    <img src={Gaumata} alt="gaumata" className='border rounded-2xl m-5' />
                </div>
            </div>
        </>
    )
}

export default Section