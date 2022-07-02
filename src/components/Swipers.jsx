import React from 'react';
import QuotesIcon from './assets/quote_left.svg';
import PfpOne from './assets/pfp_1.png';
import PfpTwo from './assets/pfp_2.png';
import TestimonialCard from './TestimonialCard';

import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

const Swipers = () => {
  return (
    <Swiper 
      modules={[Navigation, Pagination, Scrollbar, A11y]}
      // Default parameters
      breakpoints={{
        // when window width is >= 640px
        320: {
          width: 320,
          spaceBetween: 400,
          slidesPerView: 1,
        },
        // when window width is >= 768px
        1100: {
          width: 1100,
          spaceBetween: 210,
          slidesPerView: 2,
        },
      }}
      navigation
      pagination={{ clickable: true }}
      scrollbar={{ draggable: true, hide: true }}
      onSlideChange={() => console.log('slide change')}
      onSwiper={(swiper) => console.log(swiper)}
    >
      <SwiperSlide>
        <TestimonialCard
          icon={QuotesIcon}
          iconName="Quotations"
          para="Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia,
          molestiae quas vel sint commodi repudiandae consequuntur voluptatum laborum."
          date="29 December, 2021"
          img={PfpOne}
          imgName="Lee Hesham"
          personName="Lee Hesham"
          personStatus="Founder of Soul Tribe"
        />
      </SwiperSlide>
      <SwiperSlide>
        <TestimonialCard
          icon={QuotesIcon}
          iconName="Quotations"
          para="Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia,
          molestiae quas vel sint commodi repudiandae consequuntur voluptatum laborum."
          date="19 March, 2022"
          img={PfpTwo}
          imgName="Farah Zeiad"
          personName="Farah Zeiad"
          personStatus="High School Graduate"
        />
      </SwiperSlide>
      <SwiperSlide>
        <TestimonialCard
          icon={QuotesIcon}
          iconName="Quotations"
          para="Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia,
          molestiae quas vel sint commodi repudiandae consequuntur voluptatum laborum."
          date="19 March, 2023"
          img={PfpTwo}
          imgName="Farah Zeiad"
          personName="Malak Ragaie"
          personStatus="High School Graduate"
        />
      </SwiperSlide>
      <SwiperSlide>
        <TestimonialCard
          icon={QuotesIcon}
          iconName="Quotations"
          para="Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia,
          molestiae quas vel sint commodi repudiandae consequuntur voluptatum laborum."
          date="29 December, 2027"
          img={PfpOne}
          imgName="Lee Hesham"
          personName="Judy Olama"
          personStatus="Founder of Soul Tribe"
        />
      </SwiperSlide>
      {/* <SwiperSlide>
        <TestimonialCard
          icon={QuotesIcon}
          iconName="Quotations"
          para="Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia,
          molestiae quas vel sint commodi repudiandae consequuntur voluptatum laborum."
          date="29 December, 2027"
          img={PfpOne}
          imgName="Lee Hesham"
          personName="Hatem Soliman"
          personStatus="Founder of Soul Tribe"
        />
      </SwiperSlide>
      <SwiperSlide>
        <TestimonialCard
          icon={QuotesIcon}
          iconName="Quotations"
          para="Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia,
          molestiae quas vel sint commodi repudiandae consequuntur voluptatum laborum."
          date="29 December, 2027"
          img={PfpOne}
          imgName="Lee Hesham"
          personName="Lina El Karamany"
          personStatus="Founder of Soul Tribe"
        />
      </SwiperSlide> */}
    </Swiper>
  );
}

export default Swipers;
