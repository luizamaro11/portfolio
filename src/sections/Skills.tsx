import { CardSkill } from "../components/CardSkill.tsx";

export function Skills() {
  return (
    <div className='flex items-center pl-24 pr-24 text-center z-2 relative -top-20'>
      <h2 className='hidden'>Habilidades</h2>

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