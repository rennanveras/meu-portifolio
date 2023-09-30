import { Project } from "../../types/Project";
import { AreaClose, AreaDesc, AreaInfo, BackgroundModal, ContentButtons, ContentDesc, ContentImg, ContentModal, Modal } from "./styles";
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
          <AreaClose>
            <GrClose onClick={closeModal} size="38" />
          </AreaClose>
          <ContentModal>           
            <ContentImg>
              <a target="_blank" href={projectSelected.urlProjeto}>
                <img src={`/assets/img/thumbs/${projectSelected.thumbnail}`} alt="" />
              </a>
            </ContentImg>
            <AreaInfo>
              <ContentDesc>
                <h5>{projectSelected.tech}</h5>
                <h2>{projectSelected.title}</h2>
                <AreaDesc>
                  <p>{projectSelected.desc}</p>
                </AreaDesc>
              </ContentDesc>
              <ContentButtons>
                <a target="_blank" href={projectSelected.urlProjeto}>Visitar Projeto</a>
                <a target="_blank" href={projectSelected.urlGithub}>Ver o código</a>
              </ContentButtons>
            </AreaInfo>
          </ContentModal>
        </Modal>
      </BackgroundModal>
    </>
  )
}