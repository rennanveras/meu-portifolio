import { FaBars } from'react-icons/fa';
import { useState } from 'react';
import SideBar from '../SideBar';
import { MobileMenu } from './styles';

type Props = {
  changeTheme: () => void;
  iconTheme: boolean;
}

export const MenuMobile = ({ changeTheme, iconTheme }: Props) => {
  const [isVisible, setIsVisible] = useState<boolean>(false);

  const showSideBar = () => setIsVisible(!isVisible);
  

  return (
    <MobileMenu>
      <FaBars size={30} onClick={showSideBar} />
      { isVisible && 
        <SideBar  active={isVisible} setActive={setIsVisible} changeTheme={changeTheme} iconTheme={iconTheme}/>
      }
    </MobileMenu>
  );
};
