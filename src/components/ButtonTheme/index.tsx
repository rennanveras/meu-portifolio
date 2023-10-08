import { BsMoonStarsFill, BsFillSunFill } from 'react-icons/bs'
import { BtnTheme } from './styles';

type Props = {
  changeTheme: () => void;
  iconTheme: boolean;
}

const ButtonTheme = ({ changeTheme, iconTheme }: Props) => {
  return (
    <>
      <BtnTheme onClick={changeTheme}>
        {iconTheme ? <BsFillSunFill /> : <BsMoonStarsFill/>}
      </BtnTheme>
    </>
  );
}

export default ButtonTheme;