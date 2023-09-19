import { ModalProject } from "../../components/ModalProject";
import { ProjectItem } from "../../components/ProjectItem";
import Titulo from "../../components/Titulo";
import { projectList } from "../../data/projectsList";
import { Project } from "../../types/Project";
import { ContainerProject, ListProjects } from "./styles";
import { useState } from 'react'

type Props = {
  id: string;
}

const Projects = ({ id }: Props) => {
  const [showModal, setShowModal] = useState(false);
  const [projectSelected, setProjectSelected] = useState<Project | undefined>(undefined);


  const openModal = (id: number) => {
    const project = projectList.find( item => item.id === id);
    if(project) {
      setProjectSelected(project)
      setShowModal(true)
    }
  }

  const closeModal = (e:React.MouseEvent) => {
    e.stopPropagation();
    if (e.target === e.currentTarget) {
      setShowModal(false);
    }
  }

  return (
    <ContainerProject id={id}>
      <Titulo>Meus projetos</Titulo>
      <>
        <ListProjects className="projects">
          {projectList.map((item) => (
              <div key={item.id}>
                <ProjectItem  project={item} openModal={() => openModal(item.id)} />
              </div>
          ))}
        </ListProjects>
        {showModal && projectSelected && 
          <ModalProject projectSelected={projectSelected}  closeModal={closeModal}/>
        }
      </>
    </ContainerProject>
  );
}

export default Projects;