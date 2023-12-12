import Image from 'next/image'
import citacao from '../../public/cruz-clara.png'
import separador from '../../public/pattern-divider-desktop.svg'


const texto = [
  "Pois onde estiver o teu tesouro, aí estará também o teu coração.",
  "Não fui eu que ordenei a você? Seja forte e corajoso! Não se apavore nem desanime, pois o Senhor, o seu Deus, estará com você por onde você andar",
  "Consagre ao Senhor tudo o que você faz, e os seus planos serão bem-sucedidos.",
  "Busquem, pois, em primeiro lugar o Reino de Deus e a sua justiça, e todas essas coisas serão acrescentadas a vocês.",
  "Confiai-lhe todas as vossas preocupações, porque ele tem cuidado de vós.",
  "Tudo posso naquele que me fortalece.",
  "O Senhor é o meu pastor nada me faltará.",
  "Diante disso, que vamos dizer? Se Deus é por nós, quem será contra nós?",
  "Amarás o Senhor teu Deus de todo o teu coração, de toda a tua alma e com toda a tua mente"

];

const versiculo = [
  "Mateus 6:21",
  "Josué 1:9",
  "Provérbios 16:3",
  "Mateus 6:33",
  "1 Pedro 5:7",
  "Filipenses 4:13",
  "Salmos 23:1",
  "Romanos 8,31",
  "Mateus 22:37",
  
]


export default function Home() {

  // definindo a aleatoriedade 
  let i = Math.floor(Math.random() * versiculo.length);

  return (
    <div className="w-full h-full flex flex-col justify-center items-center p-2">

      <div className="w-full max-w-xl h-72 lg:h-56 shadow-3xl px-3 bg-darkGrayishBlue rounded-2xl flex flex-col justify-around items-center">

        <Image
          src={citacao}
          alt="icone de citação"
          width={65} 
          className='-mb-2'/>

        <span className='text-lg text-justify text-lightColor font-semibold'>{texto[i]}</span>
        <Image 
          src={separador}
          alt="separador" />
        <span className='text-sm text-white font-bold'>{versiculo[i]}</span>

      </div>

    </div>
  )
}
