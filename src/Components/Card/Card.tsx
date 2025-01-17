import React from 'react'
import { cores } from './Cores'

interface Props {
    nome: string,
    ocupacao: string,
    palestra: string,
    imagem: string
}

const Card : React.FC<Props> = ({ nome, ocupacao, palestra, imagem }) : JSX.Element => {

    const cor = cores[Math.floor(Math.random() * cores.length)]

    return (
        <div style={{ width: '302px', height: '445px'}} className={`flex rounded-lg flex-col mx-2 items-center p-2 ${cor}`}>
            <figure style={{ width: '268px', height: '325px' }} className='flex items-center justify-center p-2'>
                <img src={imagem} alt="" />
            </figure>
            <div>
                <div>
                    <h3 style={{ fontWeight: '500' }} className='text-xl'>{nome}</h3>
                    <p className='text-sm'>{ocupacao}</p>
                </div>
                <div>
                    <p className='text-sm'>{palestra}</p>
                </div>
            </div>
        </div>
    )
}

export default Card