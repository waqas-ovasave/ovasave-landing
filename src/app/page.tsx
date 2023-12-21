"use client";
import styles from './page.module.scss'
import React from 'react';
import Header from '@/components/header';
import Link from 'next/link';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/effect-fade';
import { Pagination, EffectFade, Autoplay } from 'swiper/modules';
import Footer from "@/components/footer";

const Home: React.FC = () => {
  return (
    <main className={styles.main}>
      <Header />
      <div className={styles.container}>
        <h1 className={styles.title}>Freeze now, Grow later</h1>
        <div className={styles.flexContainer}>
          <div className={styles.textBlock}>
            <div className={styles.row}>
              <p className={styles.text}>Buy a test kit to learn more about your future</p>
              <Link href={'https://www.ovasave.com/product/amh-kit/'} target='_blank' className={styles.link}>Buy an at home test</Link>
            </div>
            <div className={styles.row}>
              <p className={styles.text}>Book a consultation to know more about your options</p>
              <Link href={'https://www.ovasave.com/sign-in/?okadoc2=1'} target='_blank' className={styles.link}>Book consultation</Link>
            </div>
            <div className={styles.row}>
              <p className={styles.text}>Still not sure where to start?<br/>Request a call back!</p>
              <Link href={'https://www.ovasave.com/contact-us/'} target='_blank' className={styles.link}>Request call back</Link>
            </div>
            <div className={styles.row}>
              <p className={styles.text}>Learn more about Ovasave</p>
              <Link className={styles.link} href={'https://www.ovasave.com/our-story/'} target={'_blank'}>About us</Link>
            </div>
          </div>
          <Swiper
            effect={'fade'}
            navigation={true}
            autoHeight={true}
            pagination={{
              dynamicBullets: true,
            }}
            centeredSlides={true}
            autoplay={{
              delay: 2500,
              disableOnInteraction: false,
            }}
            modules={[Pagination, EffectFade, Autoplay]}
            className={styles.swiper}
          >
            <SwiperSlide className={styles.slide}>
              <img className={styles.image} src="/images/swiper/slide1.png" alt=""/>
            </SwiperSlide>
            <SwiperSlide className={styles.slide}>
              <img className={styles.image} src="/images/swiper/slide2.png" alt=""/>
            </SwiperSlide>
            <SwiperSlide className={styles.slide}>
              <img className={styles.image} src="/images/swiper/slide3.png" alt=""/>
            </SwiperSlide>
            <SwiperSlide className={styles.slide}>
              <img className={styles.image} src="/images/swiper/slide4.jpg" alt=""/>
            </SwiperSlide>
            <SwiperSlide className={styles.slide}>
              <img className={styles.image} src="/images/swiper/slide5.jpg" alt=""/>
            </SwiperSlide>
          </Swiper>
        </div>
        <Footer />
      </div>
    </main>
  )
}

export default Home;