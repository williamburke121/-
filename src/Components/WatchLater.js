import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { FreeMode, Pagination } from "swiper";
import MovieCard from "./MovieCard";


function WatchLater({movies, onCardClick}) {

    return (
        <Swiper
          slidesPerView={7}
          spaceBetween={5}
          freeMode={true}
          pagination={{
            clickable: true,
            
          }}
          modules={[FreeMode, Pagination]}
          className="mySwiper"
        >
            {movies.map((movie) => {
          return (
          <SwiperSlide>
          <MovieCard  key={movie.id} movie={movie} onCardClick={onCardClick}/> 
          </SwiperSlide>
          )})}
        </Swiper>
    );

 }

export default WatchLater;