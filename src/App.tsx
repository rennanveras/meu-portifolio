import EstiloGlobal, { Container } from './global';
import Header from './containers/Header';
import Hero from './containers/Hero';
import Projects from './containers/Projects';

const Page = () => {
  

  return (
    <>
      <EstiloGlobal />
      <Container>
        <Header/>
        <main>
          <Hero />
          <Projects />
        </main>
      </Container>
      
    </>
  )
}

export default Page;