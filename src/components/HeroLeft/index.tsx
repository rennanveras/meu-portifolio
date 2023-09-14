import { RedeSocialList } from '../RedeSocialList';
import { HeroLeftStyles } from './styles'

const HeroLeft = () => {

  return (
    <HeroLeftStyles className='hero-left'>
        <div className='hero-left-description'>
          <h3>Bem vindo ao meu mundo!</h3>
          <h2>
            Olá, Eu sou o <span className=''>Rennan Veras</span>
          </h2>
          <p>Tenho 19 anos e estou em busca contínua de aprofundar meu conhecimento na área de programação. Meu interesse pela programação começou a partir dos jogos, e desde então, tenho me dedicado a estudar e aprimorar minhas habilidades em algo que realmente me apaixona. Estou comprometido com o aprendizado constante e estou ansioso para explorar ainda mais as possibilidades empolgantes que o mundo da programação tem a oferecer.</p>
        </div>
        <div className='hero-left-redeSocial'>
          <h3>Onde me encrontrar</h3>
          <RedeSocialList />
        </div>
      </HeroLeftStyles>
  )
}

export default HeroLeft;