import './components/Navbar.tsx'
import './assets/styles/global.css'
import { Navbar } from "./components/Navbar.tsx";
import { Header } from "./sections/Header.tsx";
import { About } from "./sections/About.tsx";
import {Skills} from "./sections/Skills.tsx";

function App() {
  return (
    <>
      <div className='bg-[#F2F2F2]'>
        <Navbar/>

        <Header/>
      </div>

      <div className='bg-linear-to-b from-[#0D1721] to-[#21374B]'>
        <About />
      </div>

      <div className='bg-[#F2F2F2]'>
        <Skills />
      </div>
    </>
  );
}

export default App
