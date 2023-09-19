import { BtnDefault } from "./styles";

type Props = {
  children: string;
  onClick: () => void;
}

const Button = ({ children, onClick }: Props) => {
  return(
    <BtnDefault onClick={onClick}>{children}</BtnDefault>
  )
}

export default Button;