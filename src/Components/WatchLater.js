import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { FreeMode, Pagination } from "swiper";
import MovieCard from "./MovieCard";


function WatchLater({movies, onCardClick}) {

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
          <SwiperSlide key={movie.id} onCardClick={onCardClick}>
          <MovieCard movie={movie} onCardClick={onCardClick}/> 
          </SwiperSlide>
          )})}
        </Swiper>
    );

 }

export default WatchLater;