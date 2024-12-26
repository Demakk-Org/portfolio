"use client";

import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import { Navigation, Pagination } from "swiper/modules";
import TestimonialCard from "./testimonial-card";
import useTestimonialData, {
  TestimonialType,
} from "../../hooks/useTestimonialData";

const TestimonialsSection = () => {
  const { data, isLoading, error } = useTestimonialData({ itemQuantity: 5 });

  return (
    <section
      id="testimonials"
      className="flex flex-col items-center justify-center pt-[10%] dark:text-white px-[5%] tablet:px-[10%] desktop:px-[17%]"
    >
      <h1 className="text-3xl tablet:text-3xl mb-0">Testimonials</h1>
      <p className=" tablet:px-[100px]">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati ipsam
        a tempore sapiente, nobis labore atque, corrupti rerum itaque unde neque
        fugit eos similique quasi odio quo laudantium, minus sunt.
      </p>
      <Swiper
        modules={[Navigation, Pagination]}
        centeredSlides={true}
        loop={true}
        navigation
        pagination={{ clickable: true }}
        scrollbar={{ draggable: true }}
        className="w-[350px] tablet:w-[600px] laptop:w-[1000px]"
        breakpoints={{
          320: {
            slidesPerView: 1,
            spaceBetween: 20,
          },
          640: {
            slidesPerView: 1,
            spaceBetween: 20,
          },
          1024: {
            slidesPerView: 2,
            spaceBetween: 20,
          },
          1440: {
            slidesPerView: 3,
            spaceBetween: 20,
          },
          1920: {
            slidesPerView: 3,
            spaceBetween: 20,
          },
        }}
        onSwiper={(swiper) => swiper.update()}
      >
        {isLoading ? (
          <p>Loading</p>
        ) : error ? (
          <p>getting error when fetching the data</p>
        ) : (
          data.map((testimonial: TestimonialType) => {
            return (
              <SwiperSlide key={testimonial.id}>
                <TestimonialCard
                  name={testimonial.name}
                  title={testimonial.title}
                  feedback={testimonial.feedback}
                  imageUrl={testimonial.imageUrl}
                />
              </SwiperSlide>
            );
          })
        )}
      </Swiper>
    </section>
  );
};

export default TestimonialsSection;
