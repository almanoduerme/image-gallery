import React from "react";
import './gallery.css';

const Gallery = () => {
  const images = [
    {id: 1, src: "https://images.pexels.com/photos/33787/chimpanzee-sitting-sad-mammal.jpg?auto=compress&cs=tinysrgb&dpr=1&w=500", title: 'Photo 1', description: 'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout'},
    {id: 2, src: "https://images.pexels.com/photos/1551437/pexels-photo-1551437.png?auto=compress&cs=tinysrgb&dpr=1&w=500", title: 'Photo 2', description: 'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout'},
    {id: 3, src: "https://images.pexels.com/photos/2173872/pexels-photo-2173872.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500", title: 'Photo 3', description: 'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout'},
    {id: 4, src: "https://images.pexels.com/photos/1715092/pexels-photo-1715092.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500", title: 'Photo 4', description: 'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout'},
    {id: 5, src: "https://images.pexels.com/photos/115526/pexels-photo-115526.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500", title: 'Photo 5', description: 'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout'},
    {id: 6, src: "https://images.pexels.com/photos/5967959/pexels-photo-5967959.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500", title: 'Photo 6', description: 'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout'},
  ];

  return (
    <div className="gallery">
      {images.map((image, pos) => {
        return (
          <div className="image-container" key={pos}>
            <img className="image" src={image.src} alt="" />
            <h5 className="image-title">{image.title}</h5>
            <p className="image-description">{image.description}</p>
          </div>
        );
      })}
    </div>
  );
};

export default Gallery;
