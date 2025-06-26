import { useState } from 'react'
import Avatar from '../assets/icons/Avatar.svg'
import MenuIcon from '../assets/icons/MenuIcon.svg'
import CloseIcon from '../assets/icons/CloseIcon.svg'

export function Navbar() {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => setIsOpen(!isOpen);

    return (
        <div className='md:pl-16 md:pr-16 mx-auto p-2'>
            <nav className='flex justify-between items-center'>
                <div className='flex items-center gap-2'>
                    <img src={Avatar}
                         className="w-12"
                         alt="Avatar Luiz Henrique - Desenvolvedor Web" />
                    <span className='font-semibold'>Luiz Henrique</span>
                </div>

                <button onClick={toggleMenu} className='md:hidden'>
                    <img src={isOpen ? CloseIcon : MenuIcon} alt={isOpen ? 'Fechar menu' : 'Abrir menu'} className='w-6 h-6' />
                </button>

                <ul className='hidden md:flex gap-4 cursor-pointer'>
                    <a href="#header"><li className='hover:text-[#21374B]'>Home</li></a>
                    <a href="#about"><li className='hover:text-[#21374B]'>Sobre</li></a>
                    <a href="#skills"><li className='hover:text-[#21374B]'>Habilidades</li></a>
                    <a href="#projects"><li className='hover:text-[#21374B]'>Projetos</li></a>
                    <a href="#contacts"><li className='hover:text-[#21374B]'>Contato</li></a>
                </ul>
            </nav>

            {isOpen && (
                <ul className='flex flex-col gap-4 mt-4 md:hidden bg-white p-4 rounded-lg shadow-md'>
                    <a href="#header" onClick={toggleMenu}><li className='hover:text-[#21374B]'>Home</li></a>
                    <a href="#about" onClick={toggleMenu}><li className='hover:text-[#21374B]'>Sobre</li></a>
                    <a href="#skills" onClick={toggleMenu}><li className='hover:text-[#21374B]'>Habilidades</li></a>
                    <a href="#projects" onClick={toggleMenu}><li className='hover:text-[#21374B]'>Projetos</li></a>
                    <a href="#contacts" onClick={toggleMenu}><li className='hover:text-[#21374B]'>Contato</li></a>
                </ul>
            )}
        </div>
    )
}