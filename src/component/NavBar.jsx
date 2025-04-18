import React from 'react'
import { NavLink } from 'react-router'

const NavBar = () => {
    return (

        <>
            <div className='grid grid-cols-2 items-center p-3 w-full bg-white'>
                <div>
                    <h1 className='font-extrabold text-2xl'>Gau Seva</h1>
                </div>
                <div >
                    <ul className='grid grid-cols-4 gap-1.5 *:font-bold  '>
                        <NavLink><li>Home</li></NavLink>
                        <NavLink><li>Work</li></NavLink>
                        <NavLink><li>Contact</li></NavLink>
                        <NavLink><li>About</li></NavLink>
                    </ul>
                </div>
            </div>
        </>
    )
}

export default NavBar