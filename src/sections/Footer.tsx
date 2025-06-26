import Facebook from "../assets/icons/facebook-brands-solid.svg";
import Instagram from "../assets/icons/instagram-brands-solid.svg";
import Linkedin from "../assets/icons/linkedin-brands-solid.svg";
import Github from "../assets/icons/github-brands-solid.svg";
import Whatsapp from "../assets/icons/whatsapp-brands-solid.svg";

export function Footer() {
  return (
    <div className='flex flex-col sm:flex-row justify-between gap-4 pt-8 pb-8 px-4 sm:pl-16 sm:pr-16 lg:pl-24 lg:pr-24 text-white'>
      <p className="text-center sm:text-start">© Luiz Henrique Amaro | Todos os direitos reservados</p>

      <div className='flex flex-row justify-between gap-12'>
        <a href="https://www.facebook.com/profile.php?id=100003702517102" target='_blank'><img src={Facebook} alt="facebook"/></a>
        <a href="https://instagram.com/luizh.amaro" target='_blank'><img src={Instagram} alt="instagram"/></a>
        <a href="https://linkedin.com/in/luizhamaro" target='_blank'><img src={Linkedin} alt="linkedin"/></a>
        <a href="https://github.com/luizamaro11" target='_blank'><img src={Github} alt="github"/></a>
        <a href="https://wa.me/5513982166039?text=Ol%C3%A1%2C%20Luiz%21%20Gostaria%20de%20saber%20mais%20sobre%20seu%20trabalho%20como%20desenvolvedor.%20Pode%20me%20ajudar%3F" target='_blank'>
          <img src={Whatsapp} alt="whatsapp"/>
        </a>
      </div>
    </div>
  )
}