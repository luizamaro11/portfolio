import CircleCode from '../assets/icons/CircleCode.svg'

interface CardSkillsProps {
  title: string;
  description: string;
  skills: string[];
}
export function CardSkills({title, description, skills}: CardSkillsProps) {
  function formatStringSkills(skills: string[]) {
    const skillFormat:string = skills.join(', ')
    return skillFormat
  }

  return (
    <div className='bg-white rounded-xl p-10 flex flex-col gap-4 items-center h-94'>
      <img className='w-20' src={ CircleCode } alt="Icone Código em Circulo"/>

      <h3 className='text-[#0D1721] font-bold text-xl'>{ title }</h3>

      <p className='text-[#0D1721]'>{ description }</p>

      <h4 className='text-[#21374B] text-lg font-bold'>Tecnologias</h4>

      <p className='text-[#0D1721]'>{ formatStringSkills(skills) }</p>
    </div>
  )
}
