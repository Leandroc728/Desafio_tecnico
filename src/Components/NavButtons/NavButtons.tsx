import React from 'react'
import RightButton from '../../assets/ComponentsImgs/RightButton.svg'
import LeftButton from '../../assets/ComponentsImgs/LeftButton.svg'
import Swiper from 'swiper';

interface Props { 
  swiperRef: React.MutableRefObject<Swiper | null>
}

const NavButtons : React.FC<Props> = ({ swiperRef }) : JSX.Element => {

  return (
    <>
        <div className='flex'>
          <button onClick={() => swiperRef.current?.slidePrev()} className="btn-base btn-style1 mr-2">
            <img src={LeftButton} alt="" />
          </button>
            
          <button onClick={() => swiperRef.current?.slideNext()} className="btn-base btn-style2">
            <img src={RightButton} alt="" />
            </button>
        </div>
    </>
  )
}

export default NavButtons