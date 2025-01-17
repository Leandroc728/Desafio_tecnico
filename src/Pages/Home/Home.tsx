import { NavLink } from "react-router-dom";

const Home = () : JSX.Element => {
  return (
    <main className='w-full h-full flex flex-col items-center justify-center'>
        <div className='flex flex-col items-center text-center w-full md:w-3/5'>
            <h1 style={{ fontWeight: '500' }} className='text-3xl mb-3'>Bem-vindo!</h1>
            <p>Esse projeto tem como objetivo realizar o desafio técnico proposto pela inforcorp, que consiste em desenvolver duas seções do site SIEGEPAN</p>
        </div>
        <div className='flex flex-col items-center mt-12'>
            <h4 className='text-xl'>Páginas:</h4>
            <div className='flex mt-2'>
                <NavLink to='/palestrantes' className='items-center justify-center px-3 min-w-28 py-2 bg-blue-500 text-white border rounded-2xl'>
                    Palestrantes
                </NavLink>
                <NavLink to='/FAQ' className='flex items-center justify-center px-3 min-w-28 py-2 bg-blue-500 text-white border rounded-2xl'>
                    FAQ
                </NavLink>
            </div>
        </div>
        <div className='flex fixed bottom-0 left-0 right-0 items-center justify-center py-2'>
            <p>Nome do candidato: Leandro Moreira de Carvalho</p>
        </div>
    </main>
  )
}

export default Home