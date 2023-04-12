import { useContext } from "react";
import {
  IsModalContext,
  IsModalContextType,
} from "../../context/isModalContext";
import {
  AiFillCloseSquare,
  AiFillCode,
  AiFillPlayCircle,
} from "react-icons/ai";
import { projects } from "../../constants/constants";
import {
  CardInfo,
  ExternalLinks,
  HeaderThree,
  Hr,
  Img,
  StackTitle,
  Tag,
  TagList,
  TitleContent,
  UtilityList,
} from "./ProjectsStyles";
import { LazyLoadComponent } from "react-lazy-load-image-component";
import { RiStackFill } from "react-icons/ri";

export default function ProjectModal() {
  const { projectId, setIsModal, isModal } = useContext(
    IsModalContext
  ) as IsModalContextType;

  console.log(projectId);
  const project = projects.find((project) => project.id === projectId);

  if (!project) return null;

  return (
    <div style={{ display: isModal ? "flex" : "none" }} className="modal">
      <button className="btn btn-close-modal" onClick={() => setIsModal(false)}>
        <AiFillCloseSquare size={25} />
      </button>

      <LazyLoadComponent>
        <Img src={project.image} loading="lazy" alt="Project" />
      </LazyLoadComponent>
      <TitleContent>
        <HeaderThree header>{project.title}</HeaderThree>
        <Hr />
      </TitleContent>
      <CardInfo className="card-info">{project.description}</CardInfo>
      <div style={{ marginTop: "auto" }}>
        <StackTitle>
          Stack
          <RiStackFill size={25} />
        </StackTitle>
        <TagList>
          {project.tags.map((tag, i) => {
            return <Tag key={i}>{tag}</Tag>;
          })}
        </TagList>
      </div>
      <UtilityList>
        {project?.visit && (
          <ExternalLinks href={project.visit} target="_blank">
            Demo
            <AiFillPlayCircle size={20} />
          </ExternalLinks>
        )}

        <ExternalLinks href={project.source} target="_blank">
          Source
          <AiFillCode size={20} />
        </ExternalLinks>
      </UtilityList>
    </div>
  );
}
