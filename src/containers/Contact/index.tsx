
import { useState } from "react";
import { RedeSocialList } from "../../components/RedeSocialList";
import Titulo from "../../components/Titulo";
import { AlertInput, AreaContact, AreaForm, BtnContact, CardContact, FormControl, LabelForm } from "./styles";

type Props = {
  id: string;
}

const Contact = ({ id }: Props) => {

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [cellphone, setCellphone] = useState<number | ''>('');
  const [message, setMessage] = useState('');
  const [erro, setErro] = useState('')

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const inputValue = e.target.value;
    const parsedValue = parseInt(inputValue);
  
    if (!isNaN(parsedValue)) {
      setCellphone(parsedValue);
    } else {
      setCellphone('');
    }
  };

  const verificationForm = () => {
    if (name.length < 3){
      setErro('nome')
    }else{
      setErro('')
    }
  }

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
              <input 
                type="hidden" 
                name="_autoresponse" 
                value="Obrigado por entrar em contato em breve estarei retornando ps:Rennan Veras"
              />
              <input 
                type="hidden" 
                name="_captcha" 
                value="false"
              />
              <LabelForm htmlFor="nome">
                Seu nome
                <input 
                  name="nome"
                  type="text" 
                  id="nome" 
                  required
                  value={name}
                  onChange={e => setName(e.target.value)}
                />
                {erro === 'nome' &&
                  <AlertInput>Adicione um nome valido</AlertInput>
                }
              </LabelForm>
              <LabelForm htmlFor="celular">
                Número de celular
                <input 
                  name="celular"
                  type="tel" 
                  id="celular"
                  value={cellphone}
                  onChange={handleInputChange}
                  maxLength={11}
                  
                />

              </LabelForm>
              <LabelForm htmlFor="email">
                Email
                <input 
                  name="email"
                  type="email" 
                  id="email" 
                  required
                  value={email}
                  onChange={e => setEmail(e.target.value)}
                  />
                  
              </LabelForm>
              <LabelForm htmlFor="mensagem">
                Sua mensagem
                <textarea 
                  name="mensagem"
                  id="mensagem"  
                  rows={6}
                  required
                  value={message}
                  onChange={e => setMessage(e.target.value)}
                ></textarea>
              </LabelForm>
              <BtnContact type="submit"
                onClick={verificationForm}
              >Envias</BtnContact>
            </FormControl>
          </AreaForm>
        </AreaContact>
      </section>
    </>
  );
}

export default Contact;