import { AreaButtonThemeSideBar, Background, Container, Content } from './styles';
import { FaTimes, FaHome, FaCode } from 'react-icons/fa';
import { TbTargetArrow } from 'react-icons/tb'
import { PiCertificateFill } from 'react-icons/pi'
import { MdEmail } from 'react-icons/md'
import SidebarItem from '../SidebarItem';
import ButtonTheme from '../ButtonTheme';


type Props = {
  active: boolean;
  setActive: (isActive: boolean) => void;
  changeTheme: () => void;
  iconTheme: boolean;
};

const Sidebar = ({ active, setActive, changeTheme, iconTheme }: Props) => {
  const closeSidebar = () => {
    if (setActive) {
      setActive(false);
    }
  };

  return (
    <Background onClick={closeSidebar}>
      <Container sidebar={active}>
        <FaTimes onClick={closeSidebar} />
        <Content>
            <SidebarItem id='hero' Icon={FaHome} Text="Home" />
            <SidebarItem id='projects' Icon={FaCode} Text="Projetos" />
            <SidebarItem id='ability' Icon={TbTargetArrow} Text="Habilidades" />
            <SidebarItem id='certificates' Icon={PiCertificateFill} Text="Certificações" />
            <SidebarItem id='contact' Icon={MdEmail} Text="Contato" />
          <AreaButtonThemeSideBar>
            <ButtonTheme changeTheme={changeTheme} iconTheme={iconTheme}/>
          </AreaButtonThemeSideBar>
        </Content>
      </Container>
    </Background>
  );
};

export default Sidebar;
