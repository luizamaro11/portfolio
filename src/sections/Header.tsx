import Avatar from "../assets/icons/Avatar.svg";
import Tecnologies from "../assets/images/tecnologies.png";

export function Header () {
  return (
    <div className='flex flex-col items-center gap-4 mt-12 ml-24 mr-24 text-center'>
      <h1 className='font-[Inter] text-4xl font-bold italic'>Desenvolvedor Full Stack</h1>
      <p className='font-[Inter] w-sm text-center'>
        Desenvolvedor Full Stack com foco em soluções que impulsionam o negócio.
      </p>
      <img src={Avatar}
           className="w-50 mt-4 mb-12"
           alt="Avatar Luiz Henrique - Desenvolvedor Web"/>

      <img src={Tecnologies} alt="tecnologias"/>
    </div>
  )
}