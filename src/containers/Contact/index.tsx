
import { RedeSocialList } from "../../components/RedeSocialList";
import Titulo from "../../components/Titulo";
import { AreaContact, AreaForm, BtnContact, CardContact, FormControl, LabelForm } from "./styles";

type Props = {
  id: string;
}

const Contact = ({ id }: Props) => {
  return(
    <>
      <section id={id}>
        <Titulo>Contato</Titulo>
        <AreaContact>
          <>
            <CardContact>
              <div>
                <img src="https://cdn.pixabay.com/photo/2018/05/08/08/42/virtual-coworkers-3382503_1280.jpg" alt="" />
                <>
                  <h2>Rennan Veras</h2>
                  <p>Desenvolver Front-End</p>
                  <br />
                  <p>Estou disponível para novas oportunidades e freelas. Entre em contato comigo via formulario ou rede social</p>
                  <br />
                </>
              </div>
              <div>
                <h4>Fale comigo</h4>
                <RedeSocialList/>
              </div>
            </CardContact>
          </>
          <AreaForm>
            <FormControl action="https://formsubmit.co/rennanhenriqueneves@gmail.com" method="POST">
              <input type="hidden" name="_next" value="https://portifolio-rennanveras.vercel.app/succes.html" />
              <input type="hidden" name="_autoresponse" value="Obrigado por entrar em contato em breve estarei retornando ps:Rennan Veras"/>
              <LabelForm htmlFor="nome">
                Seu nome
                <input name="nome" type="text" id="nome" required/>
              </LabelForm>
              <LabelForm htmlFor="celular">
                Número de celular
                <input name="celular" type="tel" id="celular"/>
              </LabelForm>
              <LabelForm htmlFor="email">
                Email
                <input name="email"  type="email"  id="email" required/>
              </LabelForm>
              <LabelForm htmlFor="mensagem">
                Sua mensagem
                <textarea name="mensagem"  id="mensagem"  rows={6} required></textarea>
              </LabelForm>
              <BtnContact type="submit">Envias</BtnContact>
            </FormControl>
          </AreaForm>
        </AreaContact>
      </section>
    </>
  );
}

export default Contact;