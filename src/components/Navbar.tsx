import Avatar from '../assets/icons/Avatar.svg'

export function Navbar() {
    return (
        <div className='w-7xl mx-auto p-2'>
            <nav className='flex justify-between items-center'>
                <div className='flex items-center gap-2'>
                    <img src={Avatar}
                         className="w-12"
                         alt="Avatar Luiz Henrique - Desenvolvedor Web" />
                    <span>Luiz Henrique</span>
                </div>
                <ul className='flex gap-4 cursor-pointer'>
                    <li className='hover:text-[#21374B]'>Home</li>
                    <li className='hover:text-[#21374B]'>Sobre</li>
                    <li className='hover:text-[#21374B]'>Habilidades</li>
                    <li className='hover:text-[#21374B]'>Projetos</li>
                    <li className='hover:text-[#21374B]'>Contato</li>
                </ul>
            </nav>
        </div>
    )
}