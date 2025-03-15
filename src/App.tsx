import './assets/styles/global.css'
import { Navbar } from "./components/Navbar.tsx";
import { Header } from "./sections/Header.tsx";
import { About } from "./sections/About.tsx";
import { Skills } from "./sections/Skills.tsx";
import { Projects } from "./sections/Projects.tsx";
import { Contact } from "./sections/Contact.tsx";

function App() {
  return (
    <>
      <header className='bg-[#F2F2F2]'>
        <Navbar/>
        <Header/>
      </header>

      <main>
        <section className='bg-gradient-to-b from-[#0D1721] to-[#21374B]'>
          <About/>
        </section>

        <section className='bg-[#F2F2F2]'>
          <Skills/>
        </section>

        <section className='bg-[#F2F2F2]'>
          <Projects />
        </section>

        <section className='bg-[#F2F2F2]'>
          <Contact />
        </section>
      </main>
    </>
  );
}

export default App
