import React, { useRef } from 'react'
import Planta_Azul from '../../assets/ComponentsImgs/PlantaAzul.svg'
import './Palestrantes.css'
import Carrossel from '../../Components/Carrossel/Carrossel'
import NavButtons from '../../Components/NavButtons/NavButtons'
import { Swiper } from 'swiper'

interface Props { }

const Palestrantes : React.FC<Props> = () => {

  const swiperRef = useRef<Swiper | null>(null);

  return (
    <main className='flex flex-col lg:flex-row min-w-full min-h-full'>
      <div className='w-full min-h-full mb-6 lg:mb-0 lg:w-2/5'>
        <div className='flex flex-col justify-around w-full h-2/5'>
          <div className='flex mb-3 lg:mb-0 h-min items-center w-full'>
            <figure className='flex-shrink-0' style={{ width: '30px', height: 'auto' }}>
              <img className='min-w-full min-h-full' src={Planta_Azul} alt="" />
            </figure>
            <h1 style={{ fontWeight: '600' }} className='text-4xl ml-2'>Nossos Convidados Especiais</h1>
          </div>
          <p className='my-2 mb:my-0'>Conheça os palestrantes, ministrantes e convidados que trazem suas experiências e conhecimentos únicos para o evento.</p>
        </div>
        <div className='lg:flex hidden items-end h-3/5 w-full'>
          <NavButtons swiperRef={swiperRef} />
        </div>
      </div>

      <div className='flex flex-col  lg:flex-row w-full overflow-auto min-h-full items-center over justify-center bg-blue-400-400 lg:w-3/5'>
        <Carrossel swiperRef={swiperRef} />
        <div className='flex lg:hidden w-full items-center justify-center mt-2 lg:mt-0'>
          <NavButtons swiperRef={swiperRef} />
        </div>
      </div>
    </main>
  )
}

export default Palestrantes