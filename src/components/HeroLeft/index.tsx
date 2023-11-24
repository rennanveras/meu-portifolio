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
          <p>Tenho {age} anos,  sou frelancer e estudante de Análise e Desenvolvimento de Sistemas. Minha paixão pela programação nasceu do envolvimento com jogos, e tenho me dedicado intensamente para aprimorar minhas habilidades. Estou aberto a novos desafios e prontamente disponível para fechar negócios. Se precisar de serviços de programação, é só me chamar. Estou ansioso para contribuir com meu conhecimento em projetos interessantes..</p>
        </div>
        <div className='hero-left-redeSocial'>
          <h3>Onde me encrontrar</h3>
          <RedeSocialList />
        </div>
      </HeroLeftStyles>
  )
}

export default HeroLeft;