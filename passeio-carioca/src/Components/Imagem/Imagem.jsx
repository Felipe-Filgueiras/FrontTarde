import { ContainerImagem } from "./Style";

const ImageGallery = ({ images }) => {
    return (
      <ContainerImagem>
         <div className="image-gallery">
        {images.map((image, index) => (
          <div key={index} className="image-container">
            <h2>{image.title}</h2>
            <div id="end">
                <img src="/imagens/logo_mapa.jpeg" alt="" />
                <p>{image.endereco}</p>
            </div>
            <img src={image.src} alt={`Image ${index + 1}`} />
            <p>{image.description}</p>
            <div id="saiba-mais">
              <a href="#">Saiba mais</a>
              <a href="#">Adicionar aos favoritos</a>
            </div>
          </div>
        ))}
      </div>
      </ContainerImagem>
    );
  };
  
  export default ImageGallery;