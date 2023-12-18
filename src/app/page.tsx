import Image from 'next/image'
import citacao from '../../public/cruz-clara.png'
import separador from '../../public/pattern-divider-desktop.svg'


const palavra = [
  {
    texto: "Pois onde estiver o teu tesouro, aí estará também o teu coração.",
    versiculo: "Mateus 6:21"
  },
  {
    texto: "Não fui eu que ordenei a você? Seja forte e corajoso! Não se apavore nem desanime, pois o Senhor, o seu Deus, estará com você por onde você andar.",
    versiculo: "Josué 1:9"
  },
  {
    texto: "Consagre ao Senhor tudo o que você faz, e os seus planos serão bem-sucedidos.",
    versiculo: "Provérbios 16:3"
  },
  {
    texto: "Busquem, pois, em primeiro lugar o Reino de Deus e a sua justiça, e todas essas coisas serão acrescentadas a vocês.",
    versiculo: "Mateus 6:33"
  },
  {
    texto: "Confiai-lhe todas as vossas preocupações, porque ele tem cuidado de vós.",
    versiculo: "1 Pedro 5:7"
  },
  {
    texto: "Tudo posso naquele que me fortalece.",
    versiculo: "Filipenses 4:13"
  },
  {
    texto: "O Senhor é o meu pastor nada me faltará.",
    versiculo: "Salmos 23:1"
  },
  {
    texto: "Diante disso, que vamos dizer? Se Deus é por nós, quem será contra nós?",
    versiculo: "Romanos 8,31"
  },
  {
    texto: "Amarás o Senhor teu Deus de todo o teu coração, de toda a tua alma e com toda a tua mente.",
    versiculo: "Mateus 22:37"
  },
  {
    texto: "Eu disse essas coisas para que em mim vocês tenham paz. Neste mundo vocês terão aflições; contudo, tenham ânimo! Eu venci o mundo.",
    versiculo: "João 16:33"
  },
  {
    texto: "Não vos inquieteis com nada! Em todas as circunstâncias apresentai a Deus as vossas preocupações, mediante a oração, as súplicas e a ação de graças.",
    versiculo: "Filipenses 4,6"
  },
  {
    texto: "Que teu coração deposite toda a sua confiança no Senhor! Não te firmes em tua própria sabedoria!",
    versiculo: "Provérbios 3:5"
  },
  {
    texto: "Não vos preocupeis, pois, com o dia de amanhã: o dia de amanhã terá as suas preocupações próprias. A cada dia basta o seu cuidado.",
    versiculo: "Mateus 6:34"
  },
  {
    texto: "Por isso não tema, pois estou com você; não tenha medo, pois sou o seu Deus. Eu o fortalecerei e o ajudarei; eu o segurarei com a minha mão direita vitoriosa.",
    versiculo: "Isaías 41:10"
  },
  {
    texto: "Honra teu pai e tua mãe, a fim de que tenhas vida longa na terra que o Senhor, o teu Deus, te dá.",
    versiculo: "Êxodo 20:12"
  },
  {
    texto: "Porque Deus tanto amou o mundo que deu o seu Filho Unigênito, para que todo o que Nele crer não pereça, mas tenha a vida eterna.",
    versiculo: "João 3:16"
  },
  {
    texto:  "Tudo o que vocês fizerem façam de coração, como quem obedece ao Senhor, e não aos homens.",
    versiculo: "Colossenses 3:23"
  },
  {
    texto: "Sejam fortes e corajosos! Não tenham medo, porque Javé seu Deus é quem vai com você. Ele não o deixará, e jamais o abandonará.",
    versiculo: "Deteronômio 31:6"
  },
  {
    texto: "A fé é o fundamento da esperança, é uma certeza a respeito do que não se vê.",
    versiculo: "Hebreus 11:1"
  },
  {
    texto: "O Senhor é bom, é um refúgio na tribulação; conhece os que nele confiam.",
    versiculo: "Naum 1:7"
  },
  {
    texto: "Procurai a paz com todos e ao mesmo tempo a santidade, sem a qual ninguém pode ver o Senhor.",
    versiculo: "Hebreus 12:14"
  },
  {
    texto: "Só em Deus repousa a minha alma, é Dele que me vem o que eu espero",
    versiculo: "Salmos 61:6"
  }
]


export default function Home() {

  // definindo a aleatoriedade 
  let i = Math.floor(Math.random() * palavra.length);

  return (
    <div className="w-full h-full flex flex-col justify-center items-center p-2">

      <div className="w-full max-w-xl h-72 lg:h-56 shadow-3xl px-3 bg-darkGrayishBlue rounded-2xl flex flex-col justify-around items-center">

        <Image
          src={citacao}
          alt="icone de citação"
          width={65}
          className='-mb-2' />

        <span className='text-lg text-justify text-lightColor font-semibold'>"{palavra[i].texto}"</span>
        <Image
          src={separador}
          alt="separador" />
        <span className='text-sm text-white font-bold'>{palavra[i].versiculo}</span>

      </div>

    </div>
  )
}
