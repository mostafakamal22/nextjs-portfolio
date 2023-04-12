import { useMemo, useState } from "react";
import { LazyLoadComponent } from "react-lazy-load-image-component";

//Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, EffectCards } from "swiper";

//Import Swiper styles
import "swiper/css/bundle";

//Swiper Modules
import { Navigation, Pagination } from "swiper";
import { Project, projects } from "../../constants/constants";
import {
  AutoplayOptions,
  PaginationOptions,
  Swiper as SwiperType,
} from "swiper/types";
import {
  CardInfo,
  ExternalLinks,
  HeaderThree,
  Hr,
  ProjectDescription,
  StackTitle,
  Tag,
  TagList,
  TitleContent,
  UtilityList,
} from "./ProjectsStyles";
import { RiStackFill } from "react-icons/ri";
import { AiFillCode, AiFillPlayCircle } from "react-icons/ai";

export const ProjectCarousel = () => {
  const [_projectId, setProjectId] = useState<string>(projects[0]?.id);
  const [project, setProject] = useState<Project>(projects[0]);

  const pagination: PaginationOptions = {
    type: "bullets",
    clickable: true,
  };

  const autoplay: AutoplayOptions = {
    delay: 5000,
  };

  const CarouselImages = useMemo(
    () =>
      projects.map((project) => (
        <SwiperSlide key={project?.id}>
          <LazyLoadComponent>
            <img src={project?.image} alt={project?.title} loading="lazy" />
          </LazyLoadComponent>
          <div className="swiper-lazy-preloader swiper-lazy-preloader-white"></div>
        </SwiperSlide>
      )),
    []
  );

  //handle Slide Change
  const handleSlideChange = (swiper: SwiperType) => {
    const newProjectIndex = swiper?.activeIndex;

    const newProjectId = projects[newProjectIndex]?.id;

    const newProject = projects.find(
      (project) => project?.id === newProjectId
    )!;

    setProjectId(newProjectId);
    setProject(newProject);
  };

  return (
    <>
      <Swiper
        navigation
        autoplay={autoplay}
        pagination={pagination}
        modules={[Navigation, Pagination, EffectCards, Autoplay]}
        effect="cards"
        className="mySwiper"
        onSlideChange={handleSlideChange}
      >
        {CarouselImages}
      </Swiper>

      <ProjectDescription>
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
      </ProjectDescription>
    </>
  );
};
