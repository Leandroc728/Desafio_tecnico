import React from 'react'
import './FAQ.css'
import  Planta_Azul from '../../assets/FaqImgs/Planta_Azul.svg'
import Accordion from '../../Components/Accordion/Accordion'
import { perguntas } from './Perguntas'

interface Props { }

const FAQ : React.FC<Props> = () => {

    return (
        <main className='w-full h-full estilos-FAQ'>
            <div>
                <div className='flex w-full'>
                    <figure className='min-w-8 min-h-8'>
                        <img className='w-full h-full' src={Planta_Azul} alt="" />
                    </figure>
                    <h1 style={{ fontSize: '38px', fontWeight: '600', marginLeft: '15px' }}>Perguntas Frequentes</h1>
                </div>
                <p style={{ marginTop: '15px' }}>Precisa de informações? Encontre sua resposta sobre os detalhes do evento aqui!<br />Caso possua mais dúvidas, envie uma mensagem, estaremos prontos para ajudar!</p>
            </div>

            <div className='flex w-full flex-col mt-8'>

                {
                    perguntas.map((pergunta, index) => (
                        <Accordion key={index} pergunta={pergunta.titulo} resposta={pergunta.texto} imagem={pergunta.imagem} />
                    ))
                }

            </div>

        </main>
    )
}

export default FAQ