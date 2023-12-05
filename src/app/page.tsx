import Image from 'next/image'
import citacao from '../../public/cruz-clara.png'
import separador from '../../public/pattern-divider-desktop.svg'

export default function Home() {
  return (
    <div className="w-full h-full flex flex-col justify-center items-center p-2">

      <div className="w-full max-w-xl h-72 lg:h-56 shadow-3xl px-3 bg-darkGrayishBlue rounded-2xl flex flex-col justify-around items-center">

        <Image
          src={citacao}
          alt="icone de citação"
          width={65} 
          className='-mb-2'/>

        <span className='text-lg text-justify text-lightColor font-semibold'>"Pois onde estiver o teu tesouro, aí estará também o teu coração."</span>
        <Image 
          src={separador}
          alt="separador" />
        <span className='text-sm text-white font-bold'>Mateus 6:21</span>

      </div>

    </div>
  )
}
