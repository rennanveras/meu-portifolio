import { ModalProject } from "../../components/ModalProject";
import { ProjectItem } from "../../components/ProjectItem";
import { projectList } from "../../data/projectsList";
import { Project } from "../../types/Project";
import { ContainerProject, ListProjects } from "./styles";
import { useState } from 'react'

const Projects = () => {
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
    <ContainerProject>
      <h2 className="title fontMontserrat">Meus projetos</h2>
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