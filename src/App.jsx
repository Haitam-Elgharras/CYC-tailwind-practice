import React from 'react'
import { useState } from 'react'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowRight } from '@fortawesome/free-solid-svg-icons'
import MenuButton from './components/MenuButton'

const App = () => {
    const [showMenu, setShowMenu] = useState(false)

  return (
    <>
    <div className="h-screen overflow-y-hidden">
        
        <nav className="w-screen bg-[#6c2ee2] text-white flex justify-between p-4">
            <div className="font-bold">CYC</div>
            <ul className="flex w-64 justify-between max-sm:hidden">
                <li className="menu-item">Home</li>
                <li className="menu-item">About</li>
                <li className="menu-item">Contact</li>
            </ul>
            {/* comp */}
            <MenuButton showMenu={showMenu} setShowMenu={setShowMenu}/>
        </nav>
        
        <div className={`w-full bg-[#6c2ee2] text-white flex flex-col justify-center items-center sm:hidden ${showMenu ? 'block' : 'hidden'}`}>
                <ul className="flex flex-col items-center">
                    <li className="py-2 menu-item">Home</li>
                    <li className="py-2 menu-item">About</li>
                    <li className="py-2 menu-item">Contact</li>
                </ul>
        </div>

        <div className="img-container w-full h-full flex justify-center items-start relative">
            <div className="font-bold lg:text-[76px] md:text-6xl text-4xl absolute text-[#7333e9]  text-center top-1/2 -translate-y-1/2">
            <div className='hover:text-white'>Choose your colors</div>
            
            <div className="font-normal text-xl text-center text-white mt-4 hover:scale-105">
                Explore
                <FontAwesomeIcon className='ml-2' icon={faArrowRight} size='xs'/>
            </div>
            </div>
            <img src="/images/img.webp" alt="" className="w-full h-full object-cover" />
        </div>
    </div>
    </>
  )
}

export default App