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

  const itensNav = [
    {
      id: 'hero',
      label: 'Home',
      icon: FaHome
    },
    {
      id: 'projects',
      label: 'Projetos',
      icon: FaCode
    },
    {
      id: 'ability',
      label: 'Habilidades',
      icon: TbTargetArrow
    },
    {
      id: 'certificates',
      label: 'Certificados',
      icon: PiCertificateFill
    },
    {
      id: 'contact',
      label: 'Contato',
      icon: MdEmail
    }
  ];

  return (
    <Background onClick={closeSidebar}>
      <Container sidebar={active}>
        <FaTimes onClick={closeSidebar} />
        <Content>
          {itensNav.map((item) => (
            <SidebarItem id={item.id} Icon={item.icon} Text={item.label} />
          ))}
          <AreaButtonThemeSideBar>
            <ButtonTheme changeTheme={changeTheme} iconTheme={iconTheme} />
          </AreaButtonThemeSideBar>
        </Content>
      </Container>
    </Background>
  );
};

export default Sidebar;
