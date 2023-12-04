import Image from 'next/image'
import citacao from '../../public/cruz-clara.png'
import separador from '../../public/pattern-divider-desktop.svg'

export default function Home() {
  return (
    <div className="w-full h-full flex flex-col justify-center items-center">

      <div className="max-w-xl h-56 px-3 bg-darkGrayishBlue rounded-2xl flex flex-col justify-around items-center">

        <Image
          src={citacao}
          alt="icone de citação"
          width={65} 
          className='-mb-2'/>

        <span className='text-lg text-justify text-white font-semibold'>"O SENHOR é o meu pastor, nada me faltará."</span>
        <Image 
          src={separador}
          alt="separador" />
        <span className='text-sm text-white font-bold'>Salmos 23:1</span>

      </div>

    </div>
  )
}
