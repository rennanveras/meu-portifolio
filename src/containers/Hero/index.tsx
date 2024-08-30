
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
        <img src={foto} alt="Foto de Rennan com uma camiseta azul e óculos, e o fundo transparente - Rennan Veras" />
      </HeroRight>
    </HeroStyled>
  );
}

export default Hero;