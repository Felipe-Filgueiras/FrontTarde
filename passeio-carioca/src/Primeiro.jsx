import Footer from "./Components/Footer/Footer";
import Header from "./Components/Header/Header";
import ImageGallery from "./Components/Imagem/Imagem";
import { ContainerImagem } from "./Components/Imagem/Style";

const Primeiro = () => {

    const images = [
        {
          src: '/imagens/casaazul.png',
          description: 'O Edifício que inspirou a série Detetives do Prédio Azul, do canal Gloob, também foi o lar de Ana Maria Teixeira de Carvalho, a eterna musa da bossa-nova e "Mulher de Branco" de Ipanema, que faleceu no último dia 3 de agosto, aos 75 anos. Há décadas ela circulava pelas ruas de Ipanema como a mais famosa e polêmica personalidade do bairro. Era filha do radialista e jornalista Luis de Carvalho e ex-mulher do compositor Marcos Valle, com quem ajudou a divulgar a bossa-nova pelo mundo. Ana Maria, há 16 anos, vendeu sua casa branca na Rua Joana Angélica, nº 207 e comprou um apartamento no térreo do prédio azul, onde vivia com uma acompanhante desde 2007.O nome verdadeiro do prédio azul é Fonseca e Silva, localizado na Rua Alberto de Campos, nº 217, em Ipanema.',
          endereco: "Rua Alberto de Campos, n 217, Ipanema",
          location: [-22.98120,-43.20449],
          title: "Edifício Fonseca e Silva"
        },
        {
          src: '/imagens/casarosa.png',
          description: 'No início da década de 1930 o arquiteto Eduardo Vasconcelos Pederneiras já era conhecido por ter comandado a modernização da área central da cidade mineira de Poços de Caldas. Foi nessa época que ele recebeu o convite de Samuel Pereira das Neves para projetar um imponente edifício de frente para a praça do Largo do Machado, no número 21. Em 1936 a construção residencial, do estilo art déco, foi inaugurada e recebeu o nome de Palácio Rosa. O luxo estava presente em todos os detalhes de seus nove andares. Desde o portão em ferro, passando pelo hall repleto de belos mármores até o capricho no projeto de sua fachada. E a fachada realmente é o grande destaque com sua clara divisão entre base, corpo e coroamento.',
          endereco: "Praça do Largo do Machado, n 21, Catete",
          location: [-22.93105,-43.17851],
          title: "ㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤPalácio Rosa"
        },
        {
          src: '/imagens/casafeia.png',
          description: 'A eterna Casa de Rui Barbosa localizada na Rua São Clemente, n° 134, em Botafogo, foi uma das últimas chácaras agrícolas do bairro e transformada em casa residencial em 1849 pelo seu primeiro dono, Bernardo Casemiro de Freitas, o Barão da Lagoa. A família Barbosa foi a quarta e última a morar nessa propriedade, batizando-a de Villa Maria Augusta, em homenagem a mulher de Rui. Ficaram nesse terreno de mais de 6 mil m2 de 1895 até 1923, quando Rui faleceu com 73 anos. Seu morador mais ilustre foi um dos maiores juristas do Brasil além de também ter sido: diplomata, político, escritor, jornalista, orador e tradutor. A Casa foi comprada pelo governo federal em 1924. Três anos depois o Museu Casa de Rui Barbosa foi criado e aberto ao público em 1930. Essa residência pintada de rosa é uma das mais famosas e visitadas de Botafogo.',
          endereco: "Rua São Clemente, n 134, Botafogo",
          location: [-22.94877,-43.18682],
          title: "ㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤCasa de Rui Barbosa"
        },
      ];

    return (<div>
        <Header></Header>
        <ImageGallery images={images} />
        <Footer></Footer>
    </div>);
}

export default Primeiro;