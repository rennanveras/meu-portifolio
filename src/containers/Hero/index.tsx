
import HeroLeft from '../../components/HeroLeft';
import foto from '/assets/img/tec-hero.png'
import HeroStyled, { HeroRight } from './styles';


type Props = {
  id: string;
}

const Hero = ({ id }: Props) => {
  return (
    <HeroStyled id={id}>
      <HeroLeft />
      <HeroRight>
        <img src={foto} alt="Foto de um computador com linhas de códigos saindo dele" />
      </HeroRight>
    </HeroStyled>
  );
}

export default Hero;