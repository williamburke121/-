import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { FreeMode, Pagination } from "swiper";
import MovieCard from "./MovieCard";


function MovieCollectionSlider({movies, onCardClick}) {

  return (
      <Swiper
        slidesPerView={5}
        spaceBetween={10}
        freeMode={true}
        pagination={{
          clickable: true,
        }}
        modules={[FreeMode, Pagination]}
        className="mySwiper"
      >
        {movies.map((movie) => {
        return (
        <SwiperSlide key={movie.id}>
        <MovieCard movie={movie}  onClick={onCardClick}/>
        </SwiperSlide>
        )})}
      </Swiper>
  );
}




export default MovieCollectionSlider; 