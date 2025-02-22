import {CardSkills} from "../components/CardSkills.tsx";

export function Skills() {
  return (
    <div className='flex items-center pl-24 pr-24 text-center z-2 relative -top-20'>
      <h2 className='hidden'>Habilidades</h2>

      <CardSkills
        title='Desenvolvimento Front End'
        description='Gosto de programar coisas do zero e gosto de dar vida a ideias no navegador'
        skills={['HTML', 'CSS', 'JavaScript', 'TypeScript', 'React', 'Vite', 'Tailwind CSS']}
      />
      <CardSkills
        title='Desenvolvimento Back End'
        description='Gosto de programar coisas do zero e gosto de dar vida a ideias no navegador'
        skills={['PHP', 'Laravel', 'WordPress', 'MySQl', 'AWS', 'Apache/nGinx', 'Git', 'Tailwind CSS']}
      />
      <CardSkills
        title='Gerenciamento de Projetos'
        description='Gosto de programar coisas do zero e gosto de dar vida a ideias no navegador'
        skills={['KanBan', 'Scrum', 'UML']}
      />
    </div>
  )
}