import { useState } from "react";
import SwiperCore from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";

import MovieCard, { WithTrending } from "./MovieCard";

SwiperCore.use([Navigation, Pagination]);

const MovieSlider = ({ heading, data }) => {
  const [slidesPerGroup, setSlidesPerGroup] = useState(2);
  // const TrendingMovieCard = WithTrending(MovieCard);

  const handleResize = () => {
    const slidesInView = Math.floor(window.innerWidth / 200); // Adjust 200 to your slide width
    setSlidesPerGroup(slidesInView);
  };

  if (!data) return;
  const movies = data;

  return (
    <div className="movie-slider">
      <h1 className=" m-4 p-2 text-4xl text-white font-bold font-sans">
        {heading}
      </h1>
      <Swiper
        slidesPerView={"4"}
        spaceBetween={0}
        slidesPerGroup={1}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Navigation]}
        onResize={handleResize}
        className="mySwiper flex overflow-visibleF"
      >
        {movies.map((movie, index) => (
          // <SwiperSlide key={movie.id} className={`${type === 'trending' ? 'w-52' : 'w-28 md:w-36'} cursor-pointer flex-grow-0 flex-shrink-0 overflow-hidden rounded`}>
          //   {type === 'trending' ? <TrendingMovieCard index={index + 1} data={movie} /> : <MovieCard data={movie} />}
          // </SwiperSlide>
          <SwiperSlide
            key={movie.id}
            className="w-80 h-25 cursor-pointer flex-grow-0 flex-shrink-0 overflow-hidden rounded"
          >
            <MovieCard moviedata={movie} />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default MovieSlider;
