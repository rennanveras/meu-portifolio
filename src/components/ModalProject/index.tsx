import { Project } from "../../types/Project";
import { AreaDesc, BackgroundModal, ContentModal, Modal } from "./styles";
import { GrClose } from 'react-icons/gr'
type Props = {
  projectSelected: Project;
  closeModal: (e: React.MouseEvent) => void;
}

export const ModalProject = ({ projectSelected, closeModal }: Props) => {
  if (!projectSelected) {
    return null
  }

  return (
    <>
      <BackgroundModal onClick={closeModal}>
        <Modal>
          <div  className="areaClose">
            <GrClose onClick={closeModal} size="38" />
          </div>
          <ContentModal>           
            <div className="content-image">
              <a target="_blank" href={projectSelected.urlProjeto}>
                <img src={`/assets/img/thumbs/${projectSelected.thumbnail}`} alt="" />
              </a>
            </div>
            <div className="area-info">
              <div className="content-desc">
                <h5>{projectSelected.tech}</h5>
                <h2>{projectSelected.title}</h2>
                <AreaDesc>
                  <p>{projectSelected.desc}</p>
                </AreaDesc>
              </div>
              <div className="content-buttons">
                <a target="_blank" href={projectSelected.urlProjeto}>Visitar Projeto</a>
                <a target="_blank" href={projectSelected.urlGithub}>Ver o código</a>
              </div>
            </div>
          </ContentModal>
        </Modal>
      </BackgroundModal>
    </>
  )
}