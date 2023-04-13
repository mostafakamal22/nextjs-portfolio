import { useContext, useEffect, useMemo } from "react";
import {
  IsModalContext,
  IsModalContextType,
} from "../../context/isModalContext";
import { AiOutlineClose } from "react-icons/ai";
import { Project } from "../../constants/constants";
import { StyledProjectModal, CloseModalButton } from "./ProjectsStyles";
import { PaginationOptions, ZoomOptions } from "swiper/types";
import { LazyLoadComponent } from "react-lazy-load-image-component";

//Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

//Import Swiper styles
import "swiper/css/bundle";

//Swiper Modules
import { Navigation, Pagination, Zoom } from "swiper";
import { useSpring, animated } from "react-spring";

type ProjectModalProps = {
  project: Project;
};

export default function ProjectModal({ project }: ProjectModalProps) {
  const { isModal, setIsModal } = useContext(
    IsModalContext
  ) as IsModalContextType;

  const pagination: PaginationOptions = {
    type: "bullets",
    clickable: true,
  };

  const zoom: ZoomOptions = {
    maxRatio: 1.5,
  };

  const modalSpring = useSpring({
    transform: isModal ? "translateX(0%)" : "translateX(100%)",
    delay: isModal ? 0 : 750,
    reverse: !isModal,
  });

  const buttonSpring = useSpring({
    transform: isModal ? "translateX(0px)" : "translateX(400px)",
    delay: isModal ? 300 : 200,
    reverse: !isModal,
  });

  const swiperSpring = useSpring({
    transform: isModal ? "translateY(0vh)" : "translateY(100vh)",
    delay: isModal ? 600 : 400,
    reverse: !isModal,
  });

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

  useEffect(() => {
    if (isModal) {
      document.documentElement.style.overflow = "hidden";
      document.body.style.overflow = "hidden";
    }

    return () => {
      document.documentElement.style.overflow = "auto";
      document.body.style.overflow = "auto";
    };
  }, [isModal]);

  return (
    <StyledProjectModal style={modalSpring}>
      <CloseModalButton style={buttonSpring} onClick={() => setIsModal(false)}>
        <AiOutlineClose size={16} />
      </CloseModalButton>

      <animated.div className="project-modal-swiper" style={swiperSpring}>
        <Swiper
          navigation
          zoom={zoom}
          pagination={pagination}
          modules={[Navigation, Pagination, Zoom]}
          className="project-modal-swiper"
        >
          {CarouselImages}
        </Swiper>
      </animated.div>
    </StyledProjectModal>
  );
}
