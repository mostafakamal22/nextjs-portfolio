import { useContext, useMemo } from "react";
import {
  IsModalContext,
  IsModalContextType,
} from "../../context/isModalContext";
import { AiOutlineClose } from "react-icons/ai";
import { Project } from "../../constants/constants";
import { CloseModalButton, StyledProjectModal } from "./ProjectsStyles";
import { PaginationOptions, ZoomOptions } from "swiper/types";
import { LazyLoadComponent } from "react-lazy-load-image-component";

//Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

//Import Swiper styles
import "swiper/css/bundle";

//Swiper Modules
import { Navigation, Pagination, Zoom } from "swiper";

type ProjectModalProps = {
  project: Project;
};

export default function ProjectModal({ project }: ProjectModalProps) {
  const { setIsModal } = useContext(IsModalContext) as IsModalContextType;

  const pagination: PaginationOptions = {
    type: "bullets",
    clickable: true,
  };

  const zoom: ZoomOptions = {
    maxRatio: 1.5,
  };

  const CarouselImages = useMemo(
    () =>
      project?.images?.map((image, index) => (
        <SwiperSlide key={index}>
          <LazyLoadComponent>
            <div className="swiper-zoom-container">
              <img src={image} alt={project?.title} loading="lazy" />
            </div>
          </LazyLoadComponent>

          <div className="swiper-lazy-preloader swiper-lazy-preloader-white"></div>
        </SwiperSlide>
      )),
    []
  );

  return (
    <StyledProjectModal>
      <CloseModalButton onClick={() => setIsModal(false)}>
        <AiOutlineClose size={16} />
      </CloseModalButton>

      <Swiper
        navigation
        zoom={zoom}
        pagination={pagination}
        modules={[Navigation, Pagination, Zoom]}
        className="project-modal-swiper"
        // onSlideChange={handleSlideChange}
        // onSlideChangeTransitionStart={() => setShowProjectDescription(false)}
        // onSlideChangeTransitionEnd={() => setShowProjectDescription(true)}
      >
        {CarouselImages}
      </Swiper>
    </StyledProjectModal>
  );
}
