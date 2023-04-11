import { useMemo, useState } from "react";
import { LazyLoadComponent } from "react-lazy-load-image-component";

//Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, EffectCards } from "swiper";

//Import Swiper styles
import "swiper/css/bundle";

//Swiper Modules
import { Navigation, Pagination } from "swiper";
import { projects } from "../../constants/constants";
import { PaginationOptions } from "swiper/types";

export const ProjectCarousel = () => {
  const [_, setIsModal] = useState<boolean>(false);

  const pagination: PaginationOptions = {
    type: "bullets",
    clickable: true,
  };

  const CarouselImages = useMemo(
    () =>
      projects.map((project) => (
        <SwiperSlide key={project?.id}>
          <LazyLoadComponent>
            <img
              src={project?.image}
              alt={project?.title}
              loading="lazy"
              onClick={() => setIsModal(true)}
            />
          </LazyLoadComponent>

          <div className="swiper-lazy-preloader swiper-lazy-preloader-white"></div>
        </SwiperSlide>
      )),
    []
  );

  return (
    <Swiper
      navigation
      autoplay
      pagination={pagination}
      modules={[Navigation, Pagination, EffectCards, Autoplay]}
      effect="cards"
      className="mySwiper"
    >
      {CarouselImages}
    </Swiper>
  );
};
