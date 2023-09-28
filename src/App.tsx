import EstiloGlobal, { Container } from './global';
import Header from './containers/Header';
import Hero from './containers/Hero';
import Projects from './containers/Projects';
import Ability from './containers/Ability';
import Certificates from './containers/Certificate';
import Contact from './containers/Contact';
import Footer from './containers/footer';

const Page = () => {
  return (
    <>
      <EstiloGlobal />
      <Header/>
      <Container>
        <main>
          <Hero id="hero" />
          <Projects id="projects" />
          <Ability id="ability" />
          <Certificates id="certificates" />
          <Contact id="contact" />
        </main>
      </Container>
      <Footer/>

      
    </>
  )
}

export default Page;