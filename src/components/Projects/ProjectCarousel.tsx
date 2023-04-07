import { useMemo, useState } from "react";

//Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

//Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

//Swiper Modules
import { Navigation, Pagination } from "swiper";
import { projects } from "../../constants/constants";

export const ProjectCarousel = () => {
  const [_, setIsModal] = useState<boolean>(false);

  // const pagination = {
  //   bulletElement: "img",
  //   clickable: true,
  //   renderBullet: function (index: number, className: string) {
  //     return (
  //       '<img src="' +
  //       carouselThumbnails[index] +
  //       '" class="' +
  //       className +
  //       '"/>'
  //     );
  //   },
  // };

  const CarouselImages = useMemo(
    () =>
      projects.map((project) => (
        <SwiperSlide key={project?.id}>
          <img
            src={project?.image}
            alt={project?.title}
            loading="lazy"
            onClick={() => setIsModal(true)}
          />
        </SwiperSlide>
      )),
    []
  );

  return (
    <>
      <Swiper
        //   pagination={pagination}
        navigation={true}
        modules={[Navigation, Pagination]}
        className="mySwiper"
      >
        {CarouselImages}
      </Swiper>
    </>
  );
};
