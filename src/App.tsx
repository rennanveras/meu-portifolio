import { ThemeProvider } from 'styled-components';

import { useState } from 'react'
import EstiloGlobal, { Container } from './global';
import Header from './containers/Header';
import Hero from './containers/Hero';
import Projects from './containers/Projects';
import Ability from './containers/Ability';
import Certificates from './containers/Certificate';
import Contact from './containers/Contact';
import Footer from './containers/footer';
import themeLight from './themes/light';
import themeDark from './themes/dark';

const Page = () => {
  const [darkModeActive, setDarkModeActive] = useState(false);
  const [iconTheme, setIconTheme] = useState(false)

  const changeTheme = () => {
    setDarkModeActive(!darkModeActive);
    darkModeActive ? setIconTheme(false) : setIconTheme(true);
  }

  return (
    <ThemeProvider theme={darkModeActive ? themeDark : themeLight}>
      <EstiloGlobal />
      <Header changeTheme={changeTheme} iconTheme={iconTheme}/>
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
    </ThemeProvider>
  )
}

export default Page;