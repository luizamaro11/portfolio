import {CardProject} from "../components/CardProject.tsx";
import fylo from "../assets/images/cover-fylo.png";
import onm from "../assets/images/cover-onm.png";
import restCountries from "../assets/images/cover-rest-countries.png";
import quiosque from "../assets/images/cover-quiosque.png";
import imprimirPedido from "../assets/images/cover-freelancer-hours.png";
import freelancerHours from "../assets/images/cover-freelancer-hours.png";

export function Projects() {
  return (
    <div className='flex flex-col items-center gap-10 pt-12 pb-12 px-8 md:px-16 lg:ml-24 lg:mr-24 text-center'>
      <h2 className='font-[Inter] font-bold text-[#0D1721] text-3xl'>Principais Projetos</h2>

      <div className='flex flex-wrap justify-center gap-4 w-full'>
        <CardProject
          title='Fylo landing page'
          description='Solução do desafio Fylo no Frontend Mentor: desenvolvimento de uma landing page moderna e responsiva.'
          link='#'
          image={fylo}
        />

        <CardProject
          title='ONM Landing Page'
          description='Landing page para O Novo Mercado: escola de marketing digital, promovendo formação de Gestor de Marketing Digital.'
          link='#'
          image={onm}
        />

        <CardProject
          title='Rest Countries API'
          description='Desafio Frontend Mentor: integração com API de países, exibição, filtro por nome e página de detalhes interativa.'
          link='#'
          image={restCountries}
        />

        <CardProject
          title='Gerenciador de Quiosque'
          description='Sistema para quiosques de praia: organiza comandas, vendas e mesas, facilitando o registro de pedidos e gestão.'
          link='#'
          image={quiosque}
        />

        <CardProject
          title='Imprimir Pedido'
          description='Impressão Automática: pedidos do WhatsApp são registrados e impressos automaticamente via Google Sheets e PHP.'
          link='#'
          image={imprimirPedido}
        />

        <CardProject
          title='Freelancer Hours'
          description='Plataforma em Laravel para freelancers enviarem propostas de horas em projetos.'
          link='#'
          image={freelancerHours}
        />
      </div>
    </div>
  )
}