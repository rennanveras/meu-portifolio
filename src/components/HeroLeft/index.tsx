import { RedeSocialList } from '../RedeSocialList';
import { HeroLeftStyles } from './styles'
import { useState, useEffect } from 'react';

const HeroLeft = () => {

  const [age, setAge] = useState(0);

  const dateOfBirth = new Date('2003-12-07');

  useEffect(() => {
    const calculateAge = () => {
      const today = new Date();
      let age = today.getFullYear() - dateOfBirth.getFullYear();

      const birthDateThisYear = new Date(today.getFullYear(), dateOfBirth.getMonth(), dateOfBirth.getDate());

      if (today < birthDateThisYear) {
        age--;
      }

      setAge(age);
    };

    calculateAge();

    const intervalId = setInterval(() => {
      calculateAge();
    }, 24 * 60 * 60 * 1000);

    return () => clearInterval(intervalId);
  }, []);

  return (
    <HeroLeftStyles className='hero-left'>
        <div className='hero-left-description'>
          <h3>Conheça mais sobre mim!</h3>   
          <h2>
            Olá, Eu sou o <span className=''>Rennan Veras</span>
          </h2>
          <p>Tenho {age} anos e estou em busca contínua de aprofundar meu conhecimento na área de programação, enquanto curso Análise e Desenvolvimento de Sistemas. O interesse pela programação surgiu a partir do meu envolvimento com jogos, e desde então, tenho me dedicado incansavelmente a estudar e aprimorar minhas habilidades em algo que verdadeiramente me apaixona. Estou comprometido com o aprendizado constante e ansioso para explorar ainda mais as emocionantes possibilidades que o mundo da programação tem a oferecer</p>
        </div>
        <div className='hero-left-redeSocial'>
          <h3>Onde me encrontrar</h3>
          <RedeSocialList />
        </div>
      </HeroLeftStyles>
  )
}

export default HeroLeft;