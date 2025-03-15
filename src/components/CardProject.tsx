import { useState } from "react"


interface CardProjectProps {
  title: string;
  description: string;
  link: string;
  image: string;
}
export function CardProject({ title, description, link, image }: CardProjectProps) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className='relative w-90 h-64 rounded-2xl overflow-hidden shadow-lg transition-all duration-300 cursor-pointer'
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div
        className={`absolute inset-0 flex flex-col justify-center items-center text-white p-4 transition-all duration-300 ${
          isHovered ? "bg-[#21374B]" : "bg-cover bg-center"
        }`}
        style={!isHovered ? { background: `linear-gradient(rgba(13, 23, 33, 0.7), rgba(13, 23, 33, 0.7)), url(${image})` } : {}}
      >
        <h3
          className={`font-[Inter] text-[#F2F2F2] font-bold w-[65%] ${isHovered ? 'text-xl' : 'text-4xl'}`}
        >
          {title}
        </h3>

        {isHovered && (
          <>
            <p className="text-sm mt-2 text-center">{description}</p>
            <a
              href={link}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-3 px-4 py-2 border-1 border-white border-solid text-white font-semibold rounded-4xl text-sm hover:bg-gray-200 hover:text-[#21374B] transition"
            >
              Acessar Projeto
            </a>
          </>
        )}
      </div>
    </div>
  )
}