import Footer from "./Components/Footer/Footer";
import Header from "./Components/Header/Header";
import ImageGallery from "./Components/Imagem/Imagem";
import { ContainerImagem } from "./Components/Imagem/Style";

const Primeiro = () => {

    const images = [
        {
          src: '/imagens/casa1.jpeg',
          description: 'Casa 1 casa 1 casa 1 casa 1 casa 1 casa 1 casa 1 casa 1 casa 1 casa 1',
          endereco: "Rua Fulano de Tal",
          title: "Casa 1"
        },
        {
          src: '/imagens/casa2.jpeg',
          description: 'casa 2 casa 2 casa 2 casa 2 casa 2 casa 2 casa 2 casa 2 casa 2 casa 2 ',
          endereco: "Rua Fulano de Tal",
          title: "Casa 2"
        },
        {
          src: '/imagens/casa3.webp',
          description: 'casa3 casa3 casa3 casa3 casa3 casa3 casa3 casa3 casa3 casa3 casa3 casa3 ',
          endereco: "Rua Fulano de Tal",
          title: "Casa 3"
        },
      ];

    return (<div>
        <Header></Header>
        <ImageGallery images={images} />
        <Footer></Footer>
    </div>);
}

export default Primeiro;