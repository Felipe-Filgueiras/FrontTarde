const ImageGallery = ({ images }) => {
    return (
      <div className="image-gallery">
        {images.map((image, index) => (
          <div key={index} className="image-container">
            <h2>{image.title}</h2>
            <img src={image.src} alt={`Image ${index + 1}`} />
            <p>{image.description}</p>
          </div>
        ))}
      </div>
    );
  };
  
  export default ImageGallery;