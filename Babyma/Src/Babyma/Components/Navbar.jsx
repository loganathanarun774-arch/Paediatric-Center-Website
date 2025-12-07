import React, { useState } from 'react'
import { Link } from 'react-scroll'
import { AiOutlineClose, AiOutlineMenu } from 'react-icons/ai'
import Contact from './Modules/Contact'
function Navbar() {

    const [menu, setMenu] = useState(false);
    const [showForm, setShowForm] = useState(false);
    const handleChange = () => {
        setMenu(!menu);
    };
    const closeMenu = () => {
        setMenu(false);
    };
    const openForm = () => {
        setShowForm(true);
        setMenu(false);
    };
    const closeForm = () => {
        setShowForm(false);
    };

    return (
        <div >
            <div>
                <div className='flex flex-row justify-between p-5 md:px-5 bg-emerald-200 border-border-green-200 bg-blend-color'>
                    <div className='flex flex-row items-center cursor-pointer'>
                        <Link to='home' spy={true} smooth={true} offset={-70} duration={500} className='curser-pointer'>
                            <h1 className='txl-3xl font-semibold'>BABYMA</h1>
                        </Link>
                    </div>
                    <nav className='hidden lg:flex flex-row items-center text-lg font-medium gap-12'>
                        <Link to='home' spy={true} smooth={true} offset={-70} duration={500} className=' hover:text-orange-200 transition-all ease-in-out curser-pointer' >HOME</Link>
                        <Link to='service' spy={true} smooth={true} offset={-70} duration={500} className=' hover:text-orange-200 transition-all ease-in-out curser-pointer'>Service</Link>
                        <Link to='about' spy={true} smooth={true} offset={-70} duration={500} className=' hover:text-orange-200 transition-all ease-in-out curser-pointer'>About</Link>
                        <Link to='blog' spy={true} smooth={true} offset={-70} duration={500} className=' hover:text-orange-200 transition-all ease-in-out curser-pointer'>Blog</Link>
                        <Link to='doctor' spy={true} smooth={true} offset={-70} duration={500} className=' hover:text-orange-200 transition-all ease-in-out curser-pointer'>Doctor</Link>

                    </nav>
                    <div>
                        <button className='text-white bg-yellow-300 px-4 py-2 rounded-md hover:border-amber-300 transition-all ease-in-out' onClick={openForm}>
                            Contact us
                        </button>
                    </div>
                    {showForm && <Contact closeForm={closeForm} />}
                    <div className='lg:hidden flex items-center'>
                        {menu ? (
                            <AiOutlineClose size={28} onClick={handleChange} />
                        ) : (
                            <AiOutlineMenu size={28} onClick={handleChange} />
                        )}
                    </div>
                </div>
                <div className={menu ? 'absolute bg-emerald-200 w-full px-8 py-4  flex flex-col text-center gap-6 transition-all ease-in-out' : 'hidden'}>
                    <Link to='home' spy={true} smooth={true} offset={-70} duration={500} className=' hover:text-orange-200 transition-all ease-in-out curser-pointer'onClick={closeMenu}>HOME</Link>
                    <Link to='service' spy={true} smooth={true} offset={-70} duration={500} className=' hover:text-orange-200 transition-all ease-in-out curser-pointer'onClick={closeMenu}>Service</Link>
                    <Link to='about' spy={true} smooth={true} offset={-70} duration={500} className=' hover:text-orange-200 transition-all ease-in-out curser-pointer'onClick={closeMenu}>About</Link>
                    <Link to='blog' spy={true} smooth={true} offset={-70} duration={500} className=' hover:text-orange-200 transition-all ease-in-out curser-pointer'onClick={closeMenu}>Blog</Link>
                    <Link to='doctor' spy={true} smooth={true} offset={-70} duration={500} className=' hover:text-orange-200 transition-all ease-in-out curser-pointer'onClick={closeMenu}>Doctor</Link>
                </div>
            </div>
        </div>
    )
}

export default Navbar