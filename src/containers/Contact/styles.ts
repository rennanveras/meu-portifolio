import styled from "styled-components";
import { BtnDefault } from "../../components/button/styles";
import { CardDefault } from "../../components/Cards/styles";

export const AreaContact = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 40px;

  @media (max-width: 768px) {
    flex-direction: column;
  }
`
export const CardContact = styled(CardDefault)`
display: flex;
flex-direction: column;
width: 40%;
border-radius: 20px;
justify-content: space-between;

  @media (max-width: 768px) {
    width: 100%;
    padding: 20px 10px;
  }

  img {
    width: 100%;
    object-fit: cover;
    border-radius: 20px;
  }
`


export const AreaForm = styled(CardDefault)`
  width: 60%;

  @media (max-width: 768px) {
    width: 100%;
    padding: 20px 10px;
  }
`

export const FormControl = styled.form`
  display: flex;
  flex-direction: column;
  border-radius: 10px;
  gap: 14px;

` 

export const LabelForm = styled.label`
  display: flex;
  flex-direction: column;
  text-transform:uppercase;
  font-size: 14px;
  color: #3c3e41;
  input {
    height: 46px;

  }

  textarea {
    resize: none;
  }
  input, textarea {
    font-size: 16px;
    background-color: #fdfefe;
    border: 2px solid #dadada;
    box-shadow: none;
    color: #3c3e41;
    border-radius: 5px;
    padding: 6px;
    outline-color: #044aee;
    width: 100%;
  }
`
export const BtnContact = styled(BtnDefault)`
  width: 100%;

`