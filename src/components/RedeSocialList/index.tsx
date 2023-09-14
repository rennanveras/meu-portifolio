import { RedeSocialStyles } from "./styles";
import { AiOutlineMail, AiFillGithub, AiFillLinkedin } from 'react-icons/ai'

export const RedeSocialList = () => {
  return (
    <RedeSocialStyles>
      <li>
        <a href="https://www.linkedin.com/in/rennan-veras/" target='_blank'>
          <AiFillLinkedin />
        </a>
      </li>
      <li>
        <a href="https://github.com/rennanveras" target='_blank'>        
          <AiFillGithub />
        </a>
      </li>
      <li>
        <a href="mailto:rennanhenriqueneves@gmail.com" target='_blank'>
          <AiOutlineMail/>
        </a>
      </li>
    </RedeSocialStyles>
  );
}