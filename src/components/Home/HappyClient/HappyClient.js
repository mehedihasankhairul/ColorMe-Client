import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
// import 'swiper/swiper.scss';
import carousel1 from '../../../images/p1.jpg';
import carousel2 from '../../../images/p2.jpg';
import carousel3 from '../../../images/p-3.jpg'
import carousel4 from '../../../images/p4.jpg'
import {
    GlassMagnifier,
  } from "react-image-magnifiers";

const HappyClient = () => {
  // const style = {
  //   width: '100%',
  //   height: '',
  //   marginTop: '10%',
  // }
  return (
    <section style={{ backgroundColor: '#111430', paddingTop: '5%' }} className="services-container mt-5">
      <div className="text-center">
        <h1 style={{ color: '#fff', fontWeight: 'bold' }}>Here is Some  Awesome Work!</h1>
      </div>
      <Swiper
        className="services-container mt-5"
        spaceBetween={50}
        slidesPerView={3}
        onSlideChange={() => console.log('slide change')}
        onSwiper={(swiper) => console.log(swiper)}
      >
        <SwiperSlide className="img-fluid mb-3">
          <GlassMagnifier
            style={{ height: '350px', marginTop: '10%' }}
            imageSrc={carousel1}
            imageAlt="Example"
          />
        </SwiperSlide>
        <SwiperSlide className="img-fluid mb-3">
          <GlassMagnifier
            style={{ height: '350px', marginTop: '10%' }}
            imageSrc={carousel2}
            imageAlt="Example"
          />
        </SwiperSlide>
        <SwiperSlide className="img-fluid mb-3">
          <GlassMagnifier
            style={{ height: '350px', marginTop: '10%' }}
            imageSrc={carousel3}
            imageAlt="Example"
          />
        </SwiperSlide>
        <SwiperSlide className="img-fluid mb-3">
          <GlassMagnifier
            style={{ height: '350px', marginTop: '10%'}}
            imageSrc={carousel4}
            imageAlt="Example"
          />
        </SwiperSlide>
        <SwiperSlide className="img-fluid mb-3">
          <GlassMagnifier
            style={{ height: '350px', marginTop: '10%' }}
            imageSrc={carousel1}
            imageAlt="Example"
          />
        </SwiperSlide>
        <SwiperSlide className="img-fluid mb-3">
          <GlassMagnifier
            style={{ height: '350px', marginTop: '10%' }}
            imageSrc={carousel2}
            imageAlt="Example"
          />
        </SwiperSlide>
        <SwiperSlide className="img-fluid mb-3">
          <GlassMagnifier
            style={{ height: '350px', marginTop: '10%' }}
            imageSrc={carousel3}
            imageAlt="Example"
          />
        </SwiperSlide>
        <SwiperSlide className="img-fluid mb-3">
          <GlassMagnifier
            style={{ height: '350px', marginTop: '10%' }}
            imageSrc={carousel4}
            imageAlt="Example"
          />
        </SwiperSlide>
        <div className="text-center">
          <h1 style={{ color: '#fff', fontWeight: 'bold' }}>. . .</h1>
        </div>
      </Swiper>
    </section>

  );
};

export default HappyClient;