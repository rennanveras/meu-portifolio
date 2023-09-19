import EstiloGlobal, { Container } from './global';
import Header from './containers/Header';
import Hero from './containers/Hero';
import Projects from './containers/Projects';
import Ability from './containers/Ability';
import Certificates from './containers/Certificate';

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
        </main>
      </Container>
      
    </>
  )
}

export default Page;