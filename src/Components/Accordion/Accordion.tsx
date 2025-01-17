import React, { useRef, useState } from 'react'
import Icone_Mais from '../../assets/FaqImgs/Icone_Mais.svg'
import Icone_Menos from '../../assets/FaqImgs/Icone_Menos.svg'

interface Props {
    pergunta: string
    resposta: string
    imagem: string
}

const Accordion : React.FC<Props> = ({ pergunta, resposta, imagem }) : JSX.Element => {

    const contentRef = useRef<HTMLDivElement>(null)

    const [actualImg, setActualImg] = useState<string>(Icone_Mais)

    const toggleAccordion = () => {
     
        if (contentRef.current!.style.maxHeight && contentRef.current!.style.maxHeight !== '0px') {

            contentRef.current!.style.maxHeight = '0'
            setActualImg(Icone_Mais)
            
        } else {

          contentRef.current!.style.maxHeight = contentRef.current!.scrollHeight + 'px'
          setActualImg(Icone_Menos)

        }
    }


    return (
        <div className='font-normal'>
            <button onClick={() => toggleAccordion()} className="w-full flex justify-between items-center py-5 text-slate-800">
                <div className='flex items-center'>
                    <figure style={{ width: '30px', height:'30px' }} className=''>
                        <img className='w-full h-full' src={imagem} alt="" />
                    </figure>
                    <span className="flex-grow text-left" style={{ marginLeft: '26px' }}>{pergunta}</span>
                </div>
                <img src={actualImg} className="text-slate-800 transition-transform duration-300" />
            </button>
            <div style={{ paddingLeft: '60px' }} ref={contentRef} className="max-h-0 overflow-hidden transition-all duration-300 ease-in-out">
                <div className="pb-5 text-sm text-slate-700">
                    {resposta}
                </div>
            </div>
        </div>
    )
}

export default Accordion