import ButtonTheme from '../../components/ButtonTheme';
import { MenuMobile } from '../../components/MenuMobile';

import { ContainerHeader, Header as HeaderStyle, NavBar } from './styles'

import logoWhite from '../../../public/assets/img/logo-white.webp'
import logoDark from '../../../public/assets/img/logo-dark.webp'


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

  const itensNav = [
    {
      id: 'hero',
      label: 'Home'
    },
    {
      id: 'projects',
      label: 'Projetos'
    },
    {
      id: 'ability',
      label: 'Habilidades'
    },
    {
      id: 'certificates',
      label: 'Certificados'
    },
    {
      id: 'contact',
      label: 'Contato'
    }
  ];

  return (
    <HeaderStyle className="container">
      <ContainerHeader>
        <h1><img src={iconTheme ? logoWhite : logoDark} alt="" /></h1>
        <MenuMobile changeTheme={changeTheme} iconTheme={iconTheme} />
        <NavBar>
          <ul>
            {itensNav.map((item) => (
              <li>
                <a onClick={() => scrollToSection(item.id)}>{item.label}</a>
              </li>
            ))}
          </ul>
        </NavBar>
        <div className='contentBtnTheme'>
          <ButtonTheme changeTheme={changeTheme} iconTheme={iconTheme} />
        </div>
      </ContainerHeader>
    </HeaderStyle>
  );
}

export default Header;