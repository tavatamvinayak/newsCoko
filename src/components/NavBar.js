import Link from 'next/link'
import React from 'react'

function NavBar() {
    return (
        <div className='bg-[#ffeed6] my-4'>
            <header className="text-gray-600 body-font">
                <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
                    <a className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
                        
                        <span className="ml-3 text-3xl">Coco News</span> 
                    </a>
                    <nav className="md:ml-auto flex flex-wrap items-center text-base justify-center">
                        <Link className="mr-5 hover:text-2xl hover:text-gray-900 cursor-pointer hover:bg-blue" href='/' >USA</Link>
                        <Link className="mr-5 hover:text-2xl hover:text-gray-900 cursor-pointer hover:bg-blue" href='/india' > India </Link>
                        <Link className="mr-5 hover:text-2xl hover:text-gray-900 cursor-pointer hover:bg-blue" href='/southkorea' > South Korea</Link>
                        <Link className="mr-5 hover:text-2xl hover:text-gray-900 cursor-pointer hover:bg-blue" href='/japan' > Japan </Link>
                    </nav>
                   
                </div>
            </header>
        </div>
    )
}

export default NavBar
