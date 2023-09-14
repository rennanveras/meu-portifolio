import React from 'react';
import { Container, Content } from './styles';
import { FaTimes, FaHome, FaCode } from 'react-icons/fa';
import SidebarItem from '../SidebarItem';

type Props = {
  active: boolean;
  setActive: (isActive: boolean) => void;
};

const Sidebar = ({ active, setActive }: Props) => {
  const closeSidebar = () => {
    if (setActive) {
      setActive(false);
    }
  };

  return (
    <Container sidebar={active}>
      <FaTimes onClick={closeSidebar} />
      <Content>
        <SidebarItem src='www.google.com' Icon={FaHome} Text="Home" />
        <SidebarItem Icon={FaCode} Text="Projetos" />
      </Content>
    </Container>
  );
};

export default Sidebar;
