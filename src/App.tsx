import './assets/styles/global.css'
import { Navbar } from "./components/Navbar.tsx";
import { Header } from "./sections/Header.tsx";
import { About } from "./sections/About.tsx";
import { Skills } from "./sections/Skills.tsx";
import { Projects } from "./sections/Projects.tsx";
import { Contact } from "./sections/Contact.tsx";
import { Footer } from "./sections/Footer.tsx";

function App() {
  return (
    <>
      <header className='bg-[#F2F2F2]' id={'header'}>
        <Navbar/>
        <Header/>
      </header>

      <main>
        <section className='bg-gradient-to-b from-[#0D1721] to-[#21374B] w-full' id={'about'}>
          <About/>
        </section>

        <section className='bg-[#F2F2F2]' id={'skills'}>
          <Skills/>
        </section>

        <section className='bg-[#F2F2F2]' id={'projects'}>
          <Projects />
        </section>

        <section className='bg-[#F2F2F2]' id={'contacts'}>
          <Contact />
        </section>
      </main>

      <footer className='bg-[#0D1721]'>
        <Footer />
      </footer>
    </>
  );
}

export default App
