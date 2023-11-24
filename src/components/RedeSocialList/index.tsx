import * as S from "./styles";
import { AiOutlineMail, AiFillGithub, AiFillLinkedin } from 'react-icons/ai'

export const RedeSocialList = () => {
  return (
    <S.RedeSocialStyles>
      <li>
        <S.BtnRedeSocial href="https://www.linkedin.com/in/rennan-veras/" target='_blank'>
          <AiFillLinkedin />
        </S.BtnRedeSocial>
      </li>
      <li>
        <S.BtnRedeSocial href="https://github.com/rennanveras" target='_blank'>        
          <AiFillGithub />
        </S.BtnRedeSocial>
      </li>
      <li>
        <S.BtnRedeSocial href="mailto:rennanhenriqueneves@gmail.com" target='_blank'>
          <AiOutlineMail/>
        </S.BtnRedeSocial>
      </li>
      <li className="cv">
        <S.BtnCv href="/assets/curriculo-rennan.pdf" download>Baixar CV</S.BtnCv>
      </li>
    </S.RedeSocialStyles>
  );
}