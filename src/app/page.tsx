import Image from 'next/image'
import citacao from '../../public/citacao.png'

export default function Home() {
  return (
    <main className="w-full h-full flex flex-col justify-center items-center">
      <Image
        src={citacao}
        alt="icone de citação"
        width={60}
        className='-mb-8 -ml-48 z-0'
      />
      <div className="w-80 h-52 border-4 border-zinc-900 bg-slate-100 rounded-2xl flex flex-col justify-center">
        
        <span className='text-lg text-justify mx-3'>"O SENHOR é o meu pastor, nada me faltará."</span>
        <br/>
        <span className='text-sm font-bold text-right mx-3'>Salmos 23:1</span>

      </div>
      <Image
        src={citacao}
        alt="icone de citação"
        width={60}
        className='-mt-8 -mr-48 z-0'
      />

    </main>
  )
}
