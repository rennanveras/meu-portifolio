import { Project } from "../../types/Project";
import { AreaClose, AreaDesc, AreaInfo, BackgroundModal, ContentButtons, ContentDesc, ContentImg, ContentModal, Modal, ButtonModal } from "./styles";
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
            <span onClick={closeModal}></span>
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
                <ButtonModal target="_blank" href={projectSelected.urlProjeto}>Visitar Projeto</ButtonModal>
                <ButtonModal target="_blank" href={projectSelected.urlGithub}>Ver o código</ButtonModal>
              </ContentButtons>
            </AreaInfo>
          </ContentModal>
        </Modal>
      </BackgroundModal>
    </>
  )
}