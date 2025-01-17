import React from 'react'
import { InfoPessoas } from './Information'
import Card from '../Card/Card'
import { Swiper as SwiperComponent, SwiperSlide } from 'swiper/react';
import { A11y } from 'swiper/modules';

import type Swiper from 'swiper';

import 'swiper/css'

import './Carrossel.css'

interface Props { 
  swiperRef: React.MutableRefObject<Swiper | null>
}

const Carrossel : React.FC<Props> = ({ swiperRef }) : JSX.Element => {

  return (
    <div className='flex w-full h-full items-center justify-center overflow-visible'>
      <SwiperComponent
        modules={[ A11y]}
        slidesPerView="auto"
        centerInsufficientSlides
        onSwiper={(swiper) => swiperRef!.current = swiper}
        onSlideChange={() => console.log('slide change')}
      >
        {InfoPessoas.map((info, index) => (
          <SwiperSlide key={index}>
            <Card
              nome={info.nome}
              ocupacao={info.ocupacao}
              palestra={info.palestra}
              imagem={info.imagem}
            />
          </SwiperSlide>
        ))}
      </SwiperComponent>
    </div>
  )
}

export default Carrossel