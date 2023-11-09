import './App.css';
import CompAle from './components/CompAle';
import ImageGallery from './components/Imagem/ImageGallery';

function App() {
  const images = [
    {
      src: '/imagens/casa1.jpeg',
      description: 'Casa 1 casa 1 casa 1 casa 1 casa 1 casa 1 casa 1 casa 1 casa 1 casa 1',
      title: "Casa 1"
    },
    {
      src: '/imagens/casa2.jpeg',
      description: 'casa 2 casa 2 casa 2 casa 2 casa 2 casa 2 casa 2 casa 2 casa 2 casa 2 ',
      title: "Casa 2"
    },
    {
      src: '/imagens/casa3.webp',
      description: 'casa3 casa3 casa3 casa3 casa3 casa3 casa3 casa3 casa3 casa3 casa3 casa3 ',
      title: "Casa 3"
    },
  ];

  return (
    <div className="App">
      <div className='BodyContent'>
        <ImageGallery images={images} />
      </div>
    </div>
  );
}

export default App;