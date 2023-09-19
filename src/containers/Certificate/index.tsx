import {Swiper, SwiperSlide} from 'swiper/react'
import { ContentSlide, ImgSlide } from './styles';
import { useState } from 'react';
import { certificatesList } from '../../data/CertificatesList';
import Titulo from '../../components/Titulo';
import ModalCertificate from '../../components/ModalCertificates';

type Props = {
  id: string;
}

const Certificates = ({ id }: Props) => {
  const [certificateSelected, setCertificateSelected] = useState('')
  const [modalIsOpen, setModalIsOpen] = useState(false)

  function handleClick(id: number) {
    const select = certificatesList.find(item => item.id === id);
    if(select) {
      setCertificateSelected(select.image);
      setModalIsOpen(true);
    }
  }

  const closeModal = () => {
    setModalIsOpen(false);
  }
  return (
    <section id={id}>
      <Titulo>Certificados</Titulo>
      <Swiper
        spaceBetween={50}
        slidesPerView={1}
        pagination={{ clickable: true}}
        navigation
      >
        {certificatesList.map((item) => (
          <SwiperSlide key={item.id} >
            <ContentSlide>
              <h3>{item.title}</h3>
              <ImgSlide onClick={() => handleClick(item.id)} src={`/assets/img/certificates/${item.image}`} alt=""/>
            </ContentSlide>
          </SwiperSlide>
        ))}
      </Swiper>
      {modalIsOpen && 
        <ModalCertificate certificateSelected={certificateSelected} closeModal={closeModal} />
      }
    </section>
  );
}

export default Certificates;