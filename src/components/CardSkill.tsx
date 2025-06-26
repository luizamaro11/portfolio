import CircleCode from '../assets/icons/CircleCode.svg'

interface CardSkillsProps {
  itemKey: number;
  title: string;
  description: string;
  skills: string[];
}
export function CardSkill({ itemKey, title, description, skills }: CardSkillsProps) {
  function formatStringSkills(skills: string[]) {
    const skillFormat:string = skills.join(', ')
    return skillFormat
  }

  const stylesMap: { [key: number]: string } = {
    1: 'rounded-xl lg:rounded-tl-xl lg:rounded-bl-xl border-r-1 border-gray-200',
    2: 'rounded-xl lg:rounded-none border-r-1 border-gray-200',
    3: 'rounded-xl lg:rounded-tr-xl lg:rounded-br-xl lg:rounded-bl-none'
  };

  const styles: string = stylesMap[itemKey] || '';

  return (
    <div className={`bg-white p-10 flex flex-col gap-4 items-center w-full lg:w-100 lg:h-120 xl:h-96 ${styles}`}>
      <img className='w-20' src={ CircleCode } alt="Icone Código em Circulo"/>

      <h3 className='text-[#0D1721] font-bold text-xl'>{ title }</h3>

      <p className='text-[#0D1721] text-sm'>{ description }</p>

      <h4 className='text-[#21374B] text-lg font-bold'>Tecnologias</h4>

      <p className='text-[#0D1721]'>{ formatStringSkills(skills) }</p>
    </div>
  )
}
