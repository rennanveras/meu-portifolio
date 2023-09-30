
import HeroLeft from '../../components/HeroLeft';
import foto from '/assets/img/hero.png'
import HeroStyled, {  HeroRight } from './styles';


type Props = {
  id: string;
}

const Hero = ({ id }: Props) => {
  return(
    <HeroStyled id={id}>
      <HeroLeft />
      <HeroRight>
        <img src={foto} alt="" />
      </HeroRight>
    </HeroStyled>
  );
}

export default Hero;