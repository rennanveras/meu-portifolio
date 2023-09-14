
import HeroLeft from '../../components/HeroLeft';
import foto from '../../../public/assets/img/hero.png'
import HeroStyled, {  HeroRight } from './styles';



const Hero = () => {
  return(
    <HeroStyled>
      <HeroLeft />
      <HeroRight>
        <img src={foto} alt="" />
      </HeroRight>
    </HeroStyled>
  );
}

export default Hero;