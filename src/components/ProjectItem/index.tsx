import { Project } from "../../types/Project";
import { CardProject } from "./styles";

type Props = {
  project: Project;
  openModal: () => void;
}

export const ProjectItem = ({project, openModal}: Props) => {
  return (
    <CardProject onClick={openModal}>
      <div className="thumbnail">
        <img src={`/assets/img/thumbs/${project.thumbnail}`} alt="" />
      </div>
      <h5>{project.tech}</h5>
      <h3>{project.title}</h3>
    </CardProject>
  );
}