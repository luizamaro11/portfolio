import {Form} from "../components/Form.tsx";

export function Contact() {
  return (
    <div className='flex flex-col items-center gap-10 pt-12 pb-12 ml-48 mr-48 text-center'>
      <h2 className='font-[Inter] font-bold text-[#0D1721] text-3xl'>Entre em contato</h2>

      <div className='flex flex-row gap-10'>
        <div className='w-[50%]'>
          <Form />
        </div>

        <div className='flex flex-col items-start gap-4 w-[50%]'>
          <h3>
            <span className='font-[Inter] font-extrabold text-5xl pr-4'>Vamos</span>
            <span className='font-[Inter] font-extrabold text-5xl text-transparent [-webkit-text-stroke:3px_black]'>Conversar!</span>
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