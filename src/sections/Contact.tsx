import {Form} from "../components/Form.tsx";

export function Contact() {
  return (
    <div className='flex flex-col items-center gap-10 pt-12 pb-12 px-4 md:px-8 lg:px-16 lg:ml-48 lg:mr-48 text-center'>
      <h2 className='font-[Inter] font-bold text-[#0D1721] text-2xl sm:text-3xl'>Entre em contato</h2>

      <div className='flex flex-col lg:flex-row gap-10 w-full'>
        <div className='w-full lg:w-1/2'>
          <Form />
        </div>

        <div className='w-full lg:w-1/2 flex flex-col items-start gap-4 text-left'>
          <h3 className="text-3xl sm:text-4xl md:text-5xl font-[Inter] font-extrabold leading-tight">
            <span className='pr-2 sm:inline'>Vamos</span>
            <span className='text-transparent stroke-black [-webkit-text-stroke:3px_black]'>Conversar!</span>
          </h3>
          <p className='font-[Inter] text-base text-start text-[#71717A]'>Busco expandir os limites da tecnologia para desenvolver soluções interativas, eficientes e intuitivas,
            criando experiências impactantes e memoráveis para os usuários.</p>
          <p className='font-[Inter] text-2xl/[1] font-semibold'>contato@luizhamaro.dev</p>
          <p className='font-[Inter] text-2xl/[1] font-semibold'>(13) 98216-6039</p>
        </div>
      </div>
    </div>
  )
}