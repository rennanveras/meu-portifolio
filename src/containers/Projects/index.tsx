import React, { useState } from 'react'

import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';

import { EffectCoverflow, Pagination } from 'swiper/modules';

import { projectList } from "../../data/projectsList";

import { Project } from "../../types/Project";

import { ModalProject } from "../../components/ModalProject";
import { ProjectItem } from "../../components/ProjectItem";
import Titulo from "../../components/Titulo";

import { ContainerProject } from "./styles";


type Props = {
  id: string;
}

const Projects = ({ id }: Props) => {


  const [showModal, setShowModal] = useState(false);
  const [projectSelected, setProjectSelected] = useState<Project | undefined>(undefined);


  const openModal = (id: number) => {
    const project = projectList.find(item => item.id === id);
    if (project) {
      setProjectSelected(project)
      setShowModal(true)
    }
  }

  const closeModal = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (e.target === e.currentTarget) {
      setShowModal(false);
    }
  }

  return (
    <ContainerProject id={id}>
      <Titulo>Meus projetos</Titulo>
      <>
        <Swiper
          effect={'coverflow'}
          grabCursor={true}
          centeredSlides={true}
          slidesPerView={'auto'}
          coverflowEffect={{
            rotate: 50,
            stretch: 0,
            depth: 100,
            modifier: 1,
            slideShadows: true,
          }}
          pagination={true}
          modules={[EffectCoverflow, Pagination]}
          className="mySwiper"
        >
          {projectList.map((item) => (
            <SwiperSlide key={item.id}>
              <ProjectItem project={item} openModal={() => openModal(item.id)} />
            </SwiperSlide>
          ))}
        </Swiper>
      </>


      {showModal && projectSelected &&
        <ModalProject projectSelected={projectSelected} closeModal={closeModal} />
      }


    </ContainerProject >
  );
}

export default Projects;