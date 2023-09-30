import { AiFillHtml5 } from 'react-icons/ai'
import { DiSass, DiGulp } from 'react-icons/di'
import { 
  BiLogoCss3, 
  BiLogoTailwindCss, 
  BiLogoJavascript,
  BiLogoGithub,
  BiLogoGit,
  BiLogoBootstrap,
  BiLogoReact,
  BiLogoVuejs,
  BiLogoTypescript,
  BiLogoJquery
} from 'react-icons/bi'
import { FaLess } from 'react-icons/fa'
import AbilityItem from '../../components/AbilityItem';
import { AreaCardAbility, ContentAbility } from './styles';
import Titulo from '../../components/Titulo';
import { useState } from 'react';
import Button from '../../components/button';
import { AreaButton } from '../../components/button/styles';

type Props = {
  id: string;
}

const Ability = ({ id }: Props) => {
  const [viewMore, setViewMore] = useState(false);

  const handleViewMore = () => {
    setViewMore(!viewMore)
  }

  return (
    <AreaCardAbility id={id}>
      <Titulo>Habilidades</Titulo>
      <ContentAbility>
        <AbilityItem Icon={BiLogoCss3} Title="CSS3" />
        <AbilityItem Icon={AiFillHtml5} Title="HTML5" />
        <AbilityItem Icon={BiLogoJavascript} Title="JavaScript" />
        <AbilityItem Icon={BiLogoReact} Title="ReactJs" />
        <AbilityItem Icon={BiLogoTypescript} Title="Typescript" />
        <AbilityItem Icon={BiLogoTailwindCss} Title="TailwindCss" />
        {viewMore &&
          <>
            <AbilityItem Icon={BiLogoVuejs} Title="VueJs" />
            <AbilityItem Icon={BiLogoJquery} Title="Jquery" />
            <AbilityItem Icon={BiLogoGit} Title="Git" />
            <AbilityItem Icon={BiLogoGithub} Title="GitHub" />
            <AbilityItem Icon={BiLogoBootstrap} Title="Bootstrap" />
            <AbilityItem Icon={DiGulp} Title="Gulp" />
            <AbilityItem Icon={DiSass} Title="Sass" />
            <AbilityItem Icon={FaLess} Title="Less" />
          </>
        }
      </ContentAbility>
      <AreaButton>
        <Button onClick={handleViewMore}>{viewMore ? "Ver menos" : "Ver mais"}</Button>
      </AreaButton>
    </AreaCardAbility>
  );
}

export default Ability;