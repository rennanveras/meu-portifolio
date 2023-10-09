import ButtonTheme from '../../components/ButtonTheme';
import { MenuMobile } from '../../components/MenuMobile';
import { ContainerHeader, Header as HeaderStyle, NavBar } from './styles'

type Props = {
  changeTheme: () => void;
  iconTheme: boolean;
}

const Header = ({ changeTheme, iconTheme }: Props) => {

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
          <MenuMobile changeTheme={changeTheme} iconTheme={iconTheme} />
          <NavBar>
            <ul>
              <li>
                <a onClick={() => scrollToSection('hero')}>Home</a>
              </li>
              <li>
                <a onClick={() => scrollToSection('projects')}>Projetos</a>
              </li>
              <li>
                <a onClick={() => scrollToSection('ability')}>Habilidades</a>
              </li>
              <li>
                <a onClick={() => scrollToSection('certificates')}>Certificados</a>
              </li>
              <li>
                <a onClick={() => scrollToSection('contact')}>Contato</a>
              </li>
              <li>
                <ButtonTheme changeTheme={changeTheme} iconTheme={iconTheme} />
              </li>
            </ul>
          </NavBar>
        </ContainerHeader>
    </HeaderStyle>
  );
}

export default Header;