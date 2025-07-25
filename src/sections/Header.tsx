import Avatar from "../assets/icons/Avatar.svg";
import Tecnologies from "../assets/images/tecnologies.png";

export function Header () {
  return (
    <div className='flex flex-col items-center gap-4 mt-12 ml-8 mr-8 md:ml-16 md:mr-16 lg:ml-24 lg:mr-24 text-center'>
      <h1 className='font-[Inter] text-4xl font-bold italic'>Desenvolvedor Full Stack</h1>
      <p className='font-[Inter] w-sm text-center'>
        Desenvolvedor Full Stack com foco em soluções que impulsionam o negócio.
      </p>
      <img src={Avatar}
           className="w-50 mt-4 mb-12"
           alt="Foto ilustrativa de Luiz Henrique, desenvolvedor web full stack"/>

      <img src={Tecnologies} alt="Logos das tecnologias utilizadas: HTML, CSS, JavaScript, PHP, Laravel, React, entre outras"/>
    </div>
  )
}