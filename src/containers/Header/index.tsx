import { MenuMobile } from '../../components/MenuMobile';
import { ContainerHeader, Header as HeaderStyle, NavBar } from './styles'


const Header = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const headerHeight = 96;
      const offset = element.offsetTop - headerHeight;
      window.scrollTo({
        top: offset,
        behavior: 'smooth',
      });
    }
  };

  return (
    <HeaderStyle className="container">
        <ContainerHeader>
          <h1>Rennan Veras</h1>
          <MenuMobile />
          <NavBar>
            <ul>
              <li><a onClick={() => scrollToSection('hero')}>Home</a></li>
              <li><a onClick={() => scrollToSection('projects')}>Projetos</a></li>
              <li><a onClick={() => scrollToSection('ability')}>Habilidades</a></li>
              <li><a onClick={() => scrollToSection('certificates')}>Certificados</a></li>
              <li><a onClick={() => scrollToSection('contact')}>Contato</a></li>
            </ul>
          </NavBar>
        </ContainerHeader>
    </HeaderStyle>
  );
}

export default Header;