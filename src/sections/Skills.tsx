import { CardSkill } from "../components/CardSkill.tsx";

export function Skills() {
  return (
    <div className='flex flex-col lg:flex-row items-center gap-4 p-8 md:p-16 lg:pl-24 lg:pr-24 text-center z-2 lg:relative lg:-top-20'>
      <h2 className='font-[Inter] font-bold text-[#0D1721] text-xl md:text-2xl lg:hidden'>Habilidades</h2>

      <CardSkill
        itemKey={1}
        title='Desenvolvimento Front End'
        description='Gosto de programar coisas do zero e gosto de dar vida a ideias no navegador'
        skills={['HTML', 'CSS', 'JavaScript', 'TypeScript', 'React', 'Vite', 'Tailwind CSS']}
      />
      <CardSkill
        itemKey={2}
        title='Desenvolvimento Back End'
        description='Gosto de desenvolver soluções robustas e escaláveis, criando a lógica e a estrutura que fazem as aplicações funcionarem de forma eficiente.'
        skills={['PHP', 'Laravel', 'WordPress', 'MySQl', 'AWS', 'Apache/nGinx', 'Git', 'Tailwind CSS']}
      />
      <CardSkill
        itemKey={3}
        title='Gerenciamento de Projetos'
        description='Aprender a gerenciar um projeto corretamente é de suma importância para trazer mais produtivade para o dia-a-dia.'
        skills={['KanBan', 'Scrum', 'UML']}
      />
    </div>
  )
}