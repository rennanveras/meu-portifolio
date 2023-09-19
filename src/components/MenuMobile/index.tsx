import { FaBars } from'react-icons/fa';
import { useState } from 'react';
import SideBar from '../SideBar';
import { MobileMenu } from './styles';


export const MenuMobile = () => {
  const [isVisible, setIsVisible] = useState<boolean>(false);

  const showSideBar = () => setIsVisible(!isVisible);
  


  return (
    <MobileMenu>
      <FaBars size={30} onClick={showSideBar} />
      { isVisible && 
        <SideBar active={isVisible} setActive={setIsVisible}/>
      }
    </MobileMenu>
  );
};
