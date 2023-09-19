import { AreaModalCertificate } from "./styles";
import { AiOutlineClose } from 'react-icons/ai'

type Props = {
  certificateSelected: string;
  closeModal: () => void;
}

const ModalCertificate = ({ certificateSelected, closeModal }: Props) => {
  return (
    <AreaModalCertificate onClick={closeModal}>
      <AiOutlineClose/>
      <img src={`/assets/img/certificates/${certificateSelected}`} alt="" />
    </AreaModalCertificate>
  );
}

export default ModalCertificate;