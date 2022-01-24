import React from "react";
import './gallery.css';

const Gallery = () => {
  const images = [
    {id: 1, src: "https://images.pexels.com/photos/9429840/pexels-photo-9429840.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500", title: 'Photo 1', description: 'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout'},
    {id: 2, src: "https://images.pexels.com/photos/2646483/pexels-photo-2646483.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500", title: 'Photo 2', description: 'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout'},
    {id: 3, src: "https://images.pexels.com/photos/2173872/pexels-photo-2173872.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500", title: 'Photo 3', description: 'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout'},
    {id: 4, src: "https://images.pexels.com/photos/1715092/pexels-photo-1715092.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500", title: 'Photo 4', description: 'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout'},
    {id: 5, src: "https://images.pexels.com/photos/1107807/pexels-photo-1107807.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500", title: 'Photo 5', description: 'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout'},
    {id: 6, src: "https://images.pexels.com/photos/4056753/pexels-photo-4056753.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500", title: 'Photo 6', description: 'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout'},
    {id: 7, src: "https://images.pexels.com/photos/667228/pexels-photo-667228.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500", title: 'Photo 7', description: 'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout'},
    {id: 8, src: "https://images.pexels.com/photos/2361952/pexels-photo-2361952.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500", title: 'Photo 8', description: 'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout'},
    {id: 9, src: "https://images.pexels.com/photos/160839/cat-animal-love-pet-160839.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500", title: 'Photo 9', description: 'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout'},
    {id: 10, src: "https://images.pexels.com/photos/7633208/pexels-photo-7633208.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500", title: 'Photo 10', description: 'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout'},
    {id: 11, src: "https://images.pexels.com/photos/8310631/pexels-photo-8310631.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500", title: 'Photo 10', description: 'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout'},
    {id: 12, src: "https://images.pexels.com/photos/6638266/pexels-photo-6638266.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500", title: 'Photo 10', description: 'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout'},
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
