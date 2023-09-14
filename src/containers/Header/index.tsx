import { MenuMobile } from '../../components/MenuMobile';
import { Header as HeaderStyle, NavBar } from './styles'

const Header = () => {

  return (
    <HeaderStyle className="container">
        <h1>Rennan Veras</h1>
        <MenuMobile />
        <NavBar>
          <ul>
            <li><a href="">Home</a></li>
            <li><a href="">Projetos</a></li>
            <li><a href="">Habilidades</a></li>
          </ul>
        </NavBar>
    </HeaderStyle>
  );
}

export default Header;